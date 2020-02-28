using DBRepository.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace DBRepository.Interfaces
{
        public interface IRepositoryContextFactory
        {
            RepositoryContext CreateDbContext(string connectionString);
        }
}