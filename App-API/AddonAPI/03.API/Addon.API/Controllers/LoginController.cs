using AddOn.Models.Requests;
using AddOn.Models.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Addon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [Route("LoginEco")]
        [HttpPost]
        public async  IActionResult<CommonResponse> LoginEco(LoginEcoRequest request)
        {

        }
    }
}
