using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;
using System.Text.Json;

namespace Touchgrass.Controllers;
[Authorize]
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    
    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    
    public IActionResult Index()
    {
        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var act = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        return View(act);
    }

    [HttpPost]
    public IActionResult Index(List<string> tag, string date, string keyword)
    {
        // //test data pls delete
        // tag = ["💀 murder","💊 hospital","🏖️ beach","🎲 boardgame"];
        // date = "11/9/2004";
        // keyword = "Ga";
        // //////


        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var act = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        
        Console.WriteLine(keyword);

        
        if (tag != null){
            var tagFiltered = act.FindAll(ex => ex.Tag.Any(x => tag.Any(y => y == x)));
            act = tagFiltered;
        }

        if (date != null){
            char[] dateAsChars = date.ToCharArray();
            dateAsChars[0] = date[8];
            dateAsChars[1] = date[9];
            dateAsChars[2] = '/';
            dateAsChars[3] = date[5];
            dateAsChars[4] = date[6];
            dateAsChars[5] = '/';
            dateAsChars[6] = date[0];
            dateAsChars[7] = date[1];
            dateAsChars[8] = date[2];
            dateAsChars[9] = date[3];
            string newdate = new string(dateAsChars);
            var dateFiltered = act.FindAll(ex => ex.Date == newdate);
            act = dateFiltered;
            Console.WriteLine(newdate);
        }

        // if (keyword != null){
        //     var searchFiltered = act.FindAll(ex => ex.Title.Contains(keyword));
        //     act = searchFiltered;
        // }
        
        foreach (var i in tag) {
            Console.WriteLine(i);
        }

        //this one for debug
        foreach (var i in act) {
            Console.WriteLine(i.Title);
        }
        /////

        return View(act);
    }

    public IActionResult Setting()
    {
        return View();
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
