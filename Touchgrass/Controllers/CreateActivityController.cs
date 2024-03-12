using Microsoft.AspNetCore.Authorization;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;
using Newtonsoft.Json;   
   
namespace Touchgrass.Controllers;   

[Authorize]
public class CreateActivityController : Controller
{
    private readonly ILogger<CreateActivityController> _logger;

    private readonly IWebHostEnvironment _environment;
    
    public CreateActivityController(ILogger<CreateActivityController> logger, IWebHostEnvironment environment)
    {
        _logger = logger;
        _environment = environment;
    }
   
    [HttpPost]
    public IActionResult CreateActivity(List<IFormFile> Images)
    {
        var formData = new Dictionary<string, object>();

        foreach (var (key, value) in Request.Form)
        {
                formData[key] = value;
        }
        var filePaths = new List<string>();
        if (Images != null && Images.Count > 0)
        {
            foreach (var uploadedFile in Images)
            {
                string uploadsFolder = Path.Combine(_environment.WebRootPath, "pic", "activity");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(uploadedFile.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                        uploadedFile.CopyTo(fileStream);
                }

                string relativePath = Path.Combine("pic", "activity", uniqueFileName);
                filePaths.Add(relativePath);
            }
            formData["Img"] = filePaths;
        }
        if (!formData.ContainsKey("Tag"))
        {
            formData["Tag"] = "";
        }
        string tagsString = formData["Tag"].ToString() ?? "";
        List<string> tagsList = string.IsNullOrEmpty(tagsString) ? new List<string>() : new List<string>(tagsString.Split(','));
        formData["Tag"] = tagsList;

        string json = System.IO.File.ReadAllText("Database/Activity.json");
        List<Dictionary<string, object>> fileContents = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(json);
        fileContents.Add(formData);
        string jsons = JsonConvert.SerializeObject(fileContents, Formatting.Indented);
        System.IO.File.WriteAllText("Database/Activity.json", jsons);

        return RedirectToAction("Index", "Home");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }


}
    