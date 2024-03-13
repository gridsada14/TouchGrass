using Microsoft.AspNetCore.Authorization;
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

    [HttpPost]
    public IActionResult Index(string username, string password)
    {
        var usersjson = System.IO.File.ReadAllText("./Database/User.json");
        var users = JsonSerializer.Deserialize<List<User>>(usersjson);
        var exist_user = users.Find(u => u.Name == username);

        if (username != null && password != null && exist_user == null)
        {
            var latest_id = users[^1].Ids;
            User new_user = new User{
                Name = username,
                Password = password,
                Ids = latest_id + 1,
                Bio = "",
                Pic = "/pic/user/user.png"
            };
                
            users.Add(new_user);

            string jsondata = JsonSerializer.Serialize<List<User>>(users);
            System.IO.File.WriteAllText("./Database/User.json", jsondata);
            return RedirectToAction("Login","Login");
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