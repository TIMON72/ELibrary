using Microsoft.AspNetCore.Mvc;
using DBRepository.Interfaces;

namespace ELibrary.Controllers
{
    public class HomeController : Controller
    {
        ILibraryRepository _contextFactory;

        public HomeController(ILibraryRepository contextFactory)
        {
            _contextFactory = contextFactory;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
