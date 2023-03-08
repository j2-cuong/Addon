using Addon.Core.Interfaces;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
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
        ///     	"clientType": "Test",
        ///     	"accountName": "tester021",
        ///     	"accountPass": "tester01",
        ///     	"accountEmail": "tester01dgmail.com",
        ///     	"accountPhone": "096668312001",
        ///     	"isPermission": 0,
        ///     	"isConfirm": true,
        ///     	"isBlock": false,
        ///     	"createBy": true
        ///     
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// @CreateBy bit, (false - Hệ thống, true - Admin)
        /// 
        /// @isBlock bit, (false - Hệ thống, true - Admin)
        /// 
        /// </remarks>
        [Route("LoginEco")]
        [HttpPost]
        public async Task<CommonResponse<LoginModels._data>> LoginEco(LoginEcoRequest request)
        {
            return await svc.LoginEcoSvc(request);
        }
        [Route("AuthenKey")]
        [HttpPost]
        public async Task<CommonResponse<LoginModels._data>> AuthenKey(AuthenRequest request)
        {
            return await svc.AuthenKey(request);
        }
        [Route("CreateKeyLogin")]
        [HttpPost]
        public async Task<CommonResponse<string>> CreateKeyLogin(LoginEcoRequest request)
        {
            return await svc.CreateKeyLogin(request);
        }
        [Route("GetDepositByPartnerCode")]
        [HttpPost]
        public async Task<CommonResponse<GetDeposit._data>> GetDepositByPartnerCode(GetDepositRequest request)
        {
            return await svc.GetDeposit(request);
        }
    }
}
