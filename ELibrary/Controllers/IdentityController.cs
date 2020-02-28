using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using ELibrary.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Models;
using Newtonsoft.Json;

namespace ELibrary.Controllers
{
    [Route("api/[controller]")]
    public class IdentityController : Controller
    {
        IIdentityRepository _repository;

        public IdentityController(IIdentityRepository repository)
        {
            _repository = repository;
        }

        [Route("AuthorizationUser")]
        [HttpPost]
        public async Task Token([FromBody]User user)
        {
            var identity = await GetIdentity(user.Login, user.Password);
            if (identity == null)
            {
                //return Unauthorized();
                Response.ContentType = "application/json";
                await Response.WriteAsync("Invalid login or password!");
                return;
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                username = identity.Name

            };
            // сериализация ответа
            Response.ContentType = "application/json";
            Response.Headers["Access-Control-Allow-Origin"] = "*";
            //Response.Headers["Access-Control-Allow-Credentials"] = "false";
            Response.Headers["Access-Control-Allow-Methods"] = "*";
            await Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
            return;
        }

        private async Task<ClaimsIdentity> GetIdentity(string login, string password)
        {

            ClaimsIdentity identity = null;
            var user = await _repository.GetUser(login);

            if (user != null)
            {
                var sha256 = new SHA256Managed();
                var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));
                if (passwordHash == user.Password)
                {
                    var claims = new List<Claim>
                    {
                        new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
                        new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role),
                    };
                    identity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
                }
            }
            return identity;
        }
    }
}