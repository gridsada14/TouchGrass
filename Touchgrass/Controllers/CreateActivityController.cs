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
    public IActionResult CreateActivity(List<IFormFile> Img)
    {
        var notFormatFormData = new Dictionary<string, string>();
        var formData = new Dictionary<string, object>();

        foreach (var (key, value) in Request.Form)
        {
            notFormatFormData[key] = value;
        }
        formData["Title"] = notFormatFormData["Title"];
        formData["MaxMember"] = int.Parse(notFormatFormData["MaxMember"]);
        formData["Member"] = new List<string>();
        formData["Host"] = new Dictionary<string, string>();
        formData["Ids"] = new Random().Next(10000000);
        formData["Description"] = notFormatFormData["Description"];

        if (!notFormatFormData.ContainsKey("Tag"))
        {
            notFormatFormData["Tag"] = "";
        }
        string tagsString = notFormatFormData["Tag"].ToString() ?? "";
        List<string> tagsList = string.IsNullOrEmpty(tagsString) ? new List<string>() : new List<string>(tagsString.Split(','));
        formData["Tag"] = tagsList;

        formData["Place"] = notFormatFormData["Place"];

        var filePaths = new List<string>();
        if (Img != null && Img.Count > 0)
        {
            foreach (var uploadedFile in Img)
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
        else formData["Img"] = new List<string>();
        var host_name = HttpContext.Session.GetString("Name");
        var usersjson = System.IO.File.ReadAllText("./Database/User.json");
        var users = JsonConvert.DeserializeObject<List<User>>(usersjson);
        var host = users.Find(u => u.Name == host_name);
        Member Host = new Member
        {
            Users = host,
            Status = "Host"
        };
        List<Member> memList = new List<Member>();
        memList.Add(Host);
        formData["Host"] = Host;
        formData["Member"] = memList;

        DateTime expireDate = DateTime.Parse(notFormatFormData["Date"]).AddDays(7);
        formData["ExpireDate"] = expireDate.ToString("dd/MM/yyyy");
        DateTime Date = DateTime.Parse(notFormatFormData["Date"]);
        formData["Date"] = Date.ToString("dd/MM/yyyy");

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
