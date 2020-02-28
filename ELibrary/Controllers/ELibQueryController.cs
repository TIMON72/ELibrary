using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELibrary.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace ELibrary.Controllers
{
    [Route("api/[controller]")]
    public class ELibQueryController : Controller
    {
        readonly IELibQueryService _eLibQueryService;
        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="eLibQueryService"></param>
        public ELibQueryController(IELibQueryService eLibQueryService)
        {
            _eLibQueryService = eLibQueryService;
        }
        /// <summary>
        /// Контроллер получения всех книг
        /// </summary>
        /// <returns></returns>
        //[Authorize(Roles = "Admin")]
        [Route("GetAllBooks")]
        [HttpGet]
        public async Task<List<Book>> GetAllBooks()
        {
            try
            {
                return await _eLibQueryService.GetAllBooks();
            }
            catch (Exception ex)
            {
                Response.ContentType = "application/json";
                await Response.WriteAsync(ex.Message);
                return null;
            }
        }
    }
}