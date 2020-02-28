using DBRepository.Interfaces;
using ELibrary.Services.Interfaces;
using Models;
using System;
using System.Threading.Tasks;

namespace ELibrary.Services.Implementation
{
    public class ELibService : IELibService
    {
        ILibraryRepository _elibrepository;
        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="elibrepository"></param>
        public ELibService(ILibraryRepository elibrepository)
        {
            _elibrepository = elibrepository;
        }
        /// <summary>
        /// Сервис получения книги
        /// </summary>
        /// <param name="book"></param>
        /// <returns></returns>
        public async Task AddBook(Book book)
        {
            try
            {
                await _elibrepository.AddBook(book);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        /// <summary>
        /// Сервис изменения свойств книги
        /// </summary>
        /// <param name="book"></param>
        /// <returns></returns>
        public async Task EditBook(Book book)
        {
            try
            {
                await _elibrepository.EditBook(book);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        /// <summary>
        /// Сервис списывания книги
        /// </summary>
        /// <param name="idBook"></param>
        /// <returns></returns>
        public async Task DeleteBook(int bookId)
        {
            try
            {
                await _elibrepository.DeleteBook(bookId);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        /// <summary>
        /// Сервис регистрации пользователя
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public async Task RegistrationUser(User user)
        {
            try
            {
                await _elibrepository.RegistrationUser(user);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        /// <summary>
        /// Сервис удаления пользователя
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public async Task DeleteUser(int userId)
        { 
            try
            {
                await _elibrepository.DeleteUser(userId);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
