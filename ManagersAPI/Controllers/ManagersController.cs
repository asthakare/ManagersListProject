using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ManagersAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ManagersController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var jsonData = System.IO.File.ReadAllText("data/managers.json");
            var managers = JsonConvert.DeserializeObject<IEnumerable<Manager>>(jsonData);
            return Ok(managers);
        }
    }

    public class Manager
    {
        public string? ManagerName { get; set; }
        public string? Position { get; set; }
        public string? Experience { get; set; }
        public string? Project { get; set; }
        public List<Employee> Employees { get; set; }
    }

    public class Employee
    {
        public string? Name { get; set; }
        public int? Salary { get; set; }
    }
}
