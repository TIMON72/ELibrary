using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;
using Microsoft.AspNetCore.Http;
using ELibrary.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace ELibrary.Controllers
{
    [Route("api/[controller]")]
    public class ELibController : Controller
    {
        IELibService _elibService;
        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="elibRepository"></param>
        public ELibController(IELibService elibRepository)
        {
            _elibService = elibRepository;
        }
        /// <summary>
        /// Контроллер добавления книги
        /// </summary>
        /// <param name="bookViewModel"></param>
        /// <returns></returns>
        //[Authorize(Roles = "Admin")]
        [Route("AddBook")]
        [HttpPost]
        public async Task AddBook([FromBody]Book book)
        {
            try
            {
                await _elibService.AddBook(book);
            }
            catch (Exception ex)
            {
                Response.ContentType = "application/json";
                await Response.WriteAsync(ex.Message);
            }
        }
        /// <summary>
        /// Контроллер изменения свойств книги
        /// </summary>
        /// <param name="book"></param>
        /// <returns></returns>
        //[Authorize(Roles = "Admin")]
        [Route("EditBook")]
        [HttpPost]
        public async Task EditBook([FromBody]Book book)
        {
            try
            {
                await _elibService.EditBook(book);
            }
            catch (Exception ex)
            {
                Response.ContentType = "application/json";
                await Response.WriteAsync(ex.Message);
            }
        }
        /// <summary>
        /// Контроллер удаления книги
        /// </summary>
        /// <param name="bookId"></param>
        /// <returns></returns>
        //[Authorize(Roles = "Admin")]
        [Route("DeleteBook/{bookId:int}")]
        [HttpDelete]
        public async Task DeleteBook(int bookId)
        {
            try
            {
                await _elibService.DeleteBook(bookId);
            }
            catch (Exception ex)
            {
                Response.ContentType = "application/json";
                await Response.WriteAsync(ex.Message);
            }
        }
        /// <summary>
        /// Контроллер регистрации пользователя
        /// </summary>
        /// <returns></returns>
        //[Authorize(Roles = "Admin")]
        [Route("RegistrationUser")]
        [HttpPost]
        public async Task RegistrationUser([FromBody]User user)
        {
            try
            {
                await _elibService.RegistrationUser(user);
            }
            catch (Exception ex)
            {
                Response.ContentType = "application/json";
                await Response.WriteAsync(ex.Message);
            }
        }
        /// <summary>
        /// Контроллер удаления пользователя
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        //[Authorize(Roles = "Admin")]
        [Route("DeleteUser/{userId:int}")]
        [HttpDelete]
        public async Task DeleteUser(int userId)
        {
            try
            {
                await _elibService.DeleteUser(userId);
            }
            catch (Exception ex)
            {
                Response.ContentType = "application/json";
                await Response.WriteAsync(ex.Message);
            }
        }
    }
}