using Addon.Core.Interfaces;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
        public async Task<CommonResponse<LoginModels._data>> LoginEco(LoginEcoRequest request)
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
        public async Task<CommonResponse<LoginModels._data>> AuthenKey(AuthenRequest request)
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
    }
}
