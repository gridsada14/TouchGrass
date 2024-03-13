using Microsoft.AspNetCore.Authorization;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Touchgrass.Models;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc.Abstractions;




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

        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var act = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        
        if (tag.Count != 0){
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
        }

        if (keyword != null){
            var searchFiltered = act.FindAll(ex => ex.Title.Contains(keyword));
            act = searchFiltered;
        }
        
        return View(act);
    }

        
    [HttpPost]
    public IActionResult JoinAct(int Id)
    {
        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var acts = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        var act = acts.FirstOrDefault(a=> a.Ids == Id);
        Console.WriteLine(act.Title);
        Member mb = new Member{
            Users = new User{
                Name = HttpContext.Session.GetString("Name"),
                Pic = HttpContext.Session.GetString("Pic")
            },
            Status = "Pending"
        };

        act.Member.Add(mb);

        var updatedJson = JsonSerializer.Serialize(acts);
        System.IO.File.WriteAllText("./Database/Activity.json", updatedJson);
        return Ok("Success");
    }

    public IActionResult Act(int Id)
    {
        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var acts = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        var act = acts.FirstOrDefault(a=> a.Ids == Id);
        return View(act);
    }

    [HttpPost]
    public IActionResult AcceptMember(int user_id, int act_id)
    {
        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var acts = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        var act = acts.FirstOrDefault(a=> a.Ids == act_id);
        Console.WriteLine(act.Title);
        var user = act.Member.FirstOrDefault(a=> a.Users.Ids == user_id);
        user.Status = "Joined";


        var updatedJson = JsonSerializer.Serialize(acts);
        System.IO.File.WriteAllText("./Database/Activity.json", updatedJson);
        return Ok("Success");
    }


    [HttpPost]
    public IActionResult KickMember(int user_id, int act_id)
    {
        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var acts = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        var act = acts.FirstOrDefault(a=> a.Ids == act_id);
        Console.WriteLine(act.Title);
        var user = act.Member.FirstOrDefault(a=> a.Users.Ids == user_id);
        act.Member.Remove(user);

        var updatedJson = JsonSerializer.Serialize(acts);
        System.IO.File.WriteAllText("./Database/Activity.json", updatedJson);
        return Ok("Success");
    }

    [HttpPost]
    public IActionResult LeaveAct(int Id)
    {
        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var acts = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        var act = acts.FirstOrDefault(a=> a.Ids == Id);
        Console.WriteLine(act.Title);
        var user = act.Member.FirstOrDefault(a=> a.Users.Name == HttpContext.Session.GetString("Name"));
        act.Member.Remove(user);

        if (user.Status == "Host")
        {
            acts.Remove(act);
        }

        var updatedJson = JsonSerializer.Serialize(acts);
        System.IO.File.WriteAllText("./Database/Activity.json", updatedJson);
        return Ok("Success");
    }


    public IActionResult Setting()
    {
        if (TempData.ContainsKey("ErrorMessage"))
        {
            ViewBag.ErrorMessage = TempData["ErrorMessage"];
        }
        return View();
    }

    public IActionResult Profile()
    {
        var actjson = System.IO.File.ReadAllText("./Database/Activity.json");
        var act = JsonSerializer.Deserialize<List<ActivityModel>>(actjson);
        return View(act);
    }

    public IActionResult CreateActivity()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }




}