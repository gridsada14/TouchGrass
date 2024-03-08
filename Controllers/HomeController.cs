using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;


namespace Touchgrass.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult Profile()
    {
        

        return View("~/Views/Home/Profile.cshtml"); // Return the 'Profile.cshtml' view
    }
    public IActionResult Login()
    {
        

        return View("~/Views/Home/Login.cshtml"); // Return the 'Profile.cshtml' view
    }
    

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
    
}
