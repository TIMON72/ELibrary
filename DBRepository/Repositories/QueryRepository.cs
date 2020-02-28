using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Reflection;

namespace DBRepository.Repositories
{
    public class QueryRepository : BaseRepository, IQueryRepository
    {
        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="connectionString"></param>
        /// <param name="contextFactory"></param>
        public QueryRepository(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }
        /// <summary>
        /// Запрос всех книг
        /// </summary>
        /// <returns></returns>
        public async Task<List<Book>> GetAllBooks()
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                try
                {
                    List<Book> ListBooks = new List<Book>();
                    var query = context.Books;
                    return ListBooks = await query.ToListAsync();
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
        }
    }
}
