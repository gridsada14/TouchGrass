using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;
using System.IO;
using System.Text.Json;
using System.Linq.Expressions;

namespace Touchgrass.Controllers;

public class RegisterController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}