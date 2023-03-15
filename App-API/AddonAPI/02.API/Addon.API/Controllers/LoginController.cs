using Addon.Core.Authorize;
using Addon.Core.Interfaces;
using Addon.Core.Model;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Addon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        ILoginServices svc;
        public LoginController(ILoginServices _svc)
        {
            svc = _svc;
        }


        /// <summary>
        /// LoginEco.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "PartnerCode":"DEMO",
        ///         "Username":"huynguyen",
        ///         "Password":"Huy@@789##"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [Route("LoginEco")]
        [HttpPost]
        public async Task<LoginResponse<List<ResToken>>> LoginEco(LoginEcoRequest request)
        {
            return await svc.LoginEcoSvc(request);
        }
        /// <summary>
        /// AuthenKey.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "Key":"KeyTest",
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [Route("AuthenKey")]
        [HttpPost]
        public async Task<CommonResponse<ResToken>> AuthenKey(AuthenRequest request)
        {
            return await svc.AuthenKey(request);
        }
        /// <summary>
        /// CreateKeyLogin.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "PartnerCode":"DEMO",
        ///         "Username":"huynguyen",
        ///         "Password":"Huy@@789##"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [Route("CreateKeyLogin")]
        [HttpPost]
        public async Task<CommonResponse<string>> CreateKeyLogin(LoginEcoRequest request)
        {
            return await svc.CreateKeyLogin(request);
        }


        /// <summary>
        /// GetDepositByPartnerCode.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        ///     "Authorization":"Bearer "+ Token lấy từ API login
        /// 
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "PartnerCode":"DEMO",
        ///         "Username":"huynguyen",
        ///         "Password":"Huy@@789##"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [Route("GetDepositByPartnerCode")]
        [Authorize]
        [HttpPost]
        public async Task<CommonResponse<GetDeposit._data>> GetDepositByPartnerCode(GetDepositRequest request)
        {
            return await svc.GetDeposit(request);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="parentId"></param>
        /// <param name="IsPer"></param>
        /// <returns></returns>
        /// 


        /// <summary>
        /// GetMenu.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        ///     "Authorization":"Bearer "+ Token lấy từ API login
        /// 
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "PartnerCode":"DEMO",
        ///         "Username":"huynguyen",
        ///         "Password":"Huy@@789##"
        ///     }
        ///
        /// IV, Note
        /// 
        /// Lưu ý : 
        /// 
        ///     + parentId truyền giá trị = GetMenu
        ///     
        ///     + IsPer là giá trị UseRole khi login
        /// 
        /// </remarks>
        [Route("GetMenu")]
        [Authorize]
        //[Authorize(Roles = "ADMIN")]
        [HttpPost]
        public List<NavModel> GetMenu()
        {
            string parentId = string.Empty;
            string token = HttpContext.Request.Headers["Authorization"].ToString().Split(" ")[1];
            LoginModels._data PartnerCode = Token.ValidateToken(token);
            string IsPer = PartnerCode.User.UserRole.ToString();
            return svc.GetMenu(parentId, IsPer);
        }
    }
}
