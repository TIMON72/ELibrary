using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ELibrary.Services.Interfaces
{
    public interface IELibService
    {

        Task AddBook(Book book);

        Task EditBook(Book book);

        Task DeleteBook(int bookId);

        Task RegistrationUser(User user);

        Task DeleteUser(int userId);
    }
}
