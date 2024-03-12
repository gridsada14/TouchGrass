using System.Diagnostics;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;
using System.Text.Json;



namespace Touchgrass.Controllers;

public class LoginController : Controller
{
    private readonly ILogger<LoginController> _logger;

    private readonly ISession _session;

    public LoginController(ILogger<LoginController> logger, IHttpContextAccessor httpContextAccessor)
    {
        _logger = logger;
        _session = httpContextAccessor.HttpContext.Session;
    }
    
    public IActionResult Login()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Login(string username, string password)
    {
        var usrjson = System.IO.File.ReadAllText("./Database/User.json");
        var users = JsonSerializer.Deserialize<List<User>>(usrjson);
        var user = users.FirstOrDefault(u => u.Name == username && u.Password == password);
        if (username != null && password != null && user != null)
        {
            _session.SetString("Name",user.Name);
            if (user.Pic != "") {
                _session.SetString("Pic",user.Pic);
            }
            else{
                _session.SetString("Pic","/pic/user/user.png");
            }
            if (user.Bio != "") {
                _session.SetString("Bio",user.Bio);
            }
            else{
                _session.SetString("Bio","");
            }
            
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Name),
            };

            var claimsIdentity = new ClaimsIdentity(
                claims, CookieAuthenticationDefaults.AuthenticationScheme);

            var authProperties = new AuthenticationProperties
            {

            };

            HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity),
                authProperties).Wait(); 

            return RedirectToAction("Index", "Home");
        }
        else
        {
            ViewBag.ErrorMessage = "Invalid";
            return View();
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}