using DBRepository.Interfaces;
using ELibrary.Services.Interfaces;
using Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ELibrary.Services.Implementation
{
    public class ELibQueryService : IELibQueryService
    {
        IQueryRepository _queryRepository;
        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="queryRepository"></param>
        public ELibQueryService(IQueryRepository queryRepository)
        {
            _queryRepository = queryRepository;
        }
        /// <summary>
        /// Сервис получения всех книг
        /// </summary>
        /// <returns></returns>
        public async Task<List<Book>> GetAllBooks()
        {
            try
            {
                return await _queryRepository.GetAllBooks();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
