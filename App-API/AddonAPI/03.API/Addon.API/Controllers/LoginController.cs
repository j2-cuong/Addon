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
        ILoginSvc svc;
        public LoginController(ILoginSvc _svc)
        {
            svc = _svc;
        }
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
        public async Task<CommonResponse<LoginKey>> CreateKeyLogin(LoginEcoRequest request)
        {
            return await svc.CreateKeyLogin(request);
        }
        [Route("GetData/GetDepositByPartnerCode")]
        [HttpPost]
        public async Task<CommonResponse<GetDeposit._data>> GetDepositByPartnerCode(GetDepositRequest request)
        {
            return await svc.GetDeposit(request);
        }
    }
}
