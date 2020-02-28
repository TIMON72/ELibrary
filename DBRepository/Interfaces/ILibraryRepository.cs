using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Interfaces
{
    public interface ILibraryRepository
    {

        Task AddBook(Book book);

        Task EditBook(Book book);

        Task DeleteBook(int bookId);

        Task RegistrationUser(User user);

        Task DeleteUser(int userId);
    }
}

