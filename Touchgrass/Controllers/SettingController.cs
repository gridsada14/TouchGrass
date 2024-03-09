using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;
using System.Text.Json;


namespace Touchgrass.Controllers;
[Authorize]
public class SettingController : Controller
{
    private readonly ILogger<SettingController> _logger;

    private readonly IWebHostEnvironment _environment;
    
    public SettingController(ILogger<SettingController> logger, IWebHostEnvironment environment)
    {
        _logger = logger;
        _environment = environment;
    }

    [HttpPost]
    public IActionResult Picture(IFormFile filename)
    {
        if (filename != null && filename.Length > 0)
        {
            string uploadsFolder = Path.Combine(_environment.WebRootPath, "pic", "user");

            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            string uniqueFileName = Guid.NewGuid().ToString() + "_" + filename.FileName;

            string filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                filename.CopyTo(fileStream);
            }

            Uri baseUri = new Uri(_environment.WebRootPath + "/");
            Uri filePathUri = new Uri(filePath);
            Uri relativeUri = baseUri.MakeRelativeUri(filePathUri);
            string relativePath = "/" + relativeUri.ToString();

            var usrjson = System.IO.File.ReadAllText("./Database/User.json");
            var users = JsonSerializer.Deserialize<List<User>>(usrjson);
            var userToUpdate = users.Find(user => user.Name == HttpContext.Session.GetString("Name"));


            userToUpdate.Pic = relativePath; 


            var updatedJson = JsonSerializer.Serialize(users);

  
            System.IO.File.WriteAllText("./Database/User.json", updatedJson);

            
            HttpContext.Session.SetString("Pic", relativePath);

            return RedirectToAction("Setting","Home");
        }

        else {
            TempData["ErrorMessage"] = "Invalid";
            return RedirectToAction("Setting","Home");
        }
    }

    [HttpPost]
    public IActionResult Password(string old_password, string new_password)
    {
        var usrjson = System.IO.File.ReadAllText("./Database/User.json");
        var users = JsonSerializer.Deserialize<List<User>>(usrjson);
        var userToUpdate = users.Find(user => user.Name == HttpContext.Session.GetString("Name"));  
        if (old_password != null && new_password != null && userToUpdate.Password == old_password )     
        {

            userToUpdate.Password = new_password; 


            var updatedJson = JsonSerializer.Serialize(users);

  
            System.IO.File.WriteAllText("./Database/User.json", updatedJson);

            return RedirectToAction("Setting","Home");
        }

        else {
            TempData["ErrorMessage"] = "Invalid";
            return RedirectToAction("Setting","Home");
        }
    }

   
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
