using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;
using System.Text.Json;

namespace Touchgrass.Controllers;
public class LogoutController : Controller
{
    private readonly ILogger<LogoutController> _logger;
    
    public LogoutController(ILogger<LogoutController> logger)
    {
        _logger = logger;
    }
    
    [HttpPost]
    public IActionResult Logout()
    {
        HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme).Wait();
        Response.Cookies.Delete(".AspNetCore.Session");
        return RedirectToAction("Login","Login");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}