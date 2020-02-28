using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;


namespace DBRepository.Repositories
{
    public class LibraryRepository : BaseRepository, ILibraryRepository
    {
        public LibraryRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }
        /// <summary>
        /// Добавление книги в библиотеку
        /// </summary>
        /// <param name="book"></param>
        /// <returns></returns>
        public async Task AddBook(Book book)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                try
                {
                    await context.Books.AddAsync(book);
                    await context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
        }
        /// <summary>
        /// Изменение свойств книги
        /// </summary>
        /// <param name="book"></param>
        /// <returns></returns>
        public async Task EditBook(Book book)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                //var user = await context.Users.ToListAsync();
                Book editBook = await context.Books.FirstOrDefaultAsync(b => b.BookId == book.BookId);
                if (editBook == null)
                    throw new Exception("Невозможно обновить данные книги - книга не найдена в базе");
                editBook.Author = book.Author;
                editBook.Category = book.Category;
                editBook.Genre = book.Genre;
                editBook.Name = book.Name;
                editBook.Year = book.Year;
                context.Entry(editBook).State = EntityState.Modified;
                await context.SaveChangesAsync();
            }
        }
        /// <summary>
        /// Списывание книги из библиотеки
        /// </summary>
        /// <param name="idBook"></param>
        /// <returns></returns>
        public async Task DeleteBook(int bookId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                Book book = await context.Books.FirstOrDefaultAsync(b => b.BookId == bookId);
                if (book != null)
                {
                    context.Books.Remove(book);
                    await context.SaveChangesAsync();
                }
                else
                    throw new Exception("Такой книги не существует");
            }
        }
        /// <summary>
        /// Регистрация пользователя
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public async Task RegistrationUser(User user)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = await context.Users.FirstOrDefaultAsync(u => u.Login == user.Login);
                if (query != null)
                    throw new Exception("Такой пользователь уже существует");
                SHA256Managed sha256 = new SHA256Managed();
                user.Password = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(user.Password)));
                await context.Users.AddAsync(user);
                await context.SaveChangesAsync();
            }
        }
        /// <summary>
        /// Удаление пользователя
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public async Task DeleteUser(int userId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                User user = await context.Users.FirstOrDefaultAsync(u => u.UserId == userId);
                if (user != null)
                {
                    context.Users.Remove(user);
                    await context.SaveChangesAsync();
                }
                else
                    throw new Exception("Такого пользователя не существует");
            }
        }
    }
}