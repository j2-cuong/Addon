using Addon.Core.Common;
using Addon.Core.Interfaces;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Newtonsoft.Json;

namespace Addon.Core.Services
{
    public class LoginServices : ILoginSvc
    {
        ApiBase apiBase = new ApiBase();
        public async Task<CommonResponse<LoginModels._data>> LoginEcoSvc(LoginEcoRequest request)
        {
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    return StaticResult.Success<LoginModels._data>(JRes.Data);
                    break;
                default:
                    return StaticResult.Error<LoginModels._data>(JRes.Message, JRes.Code);
                    break;
            }
        }

        public async Task<CommonResponse<LoginKey>> CreateKeyLogin(LoginEcoRequest request)
        {
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "CreateAuthKeyForTest");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginKey JRes = JsonConvert.DeserializeObject<LoginKey>(DataStr);
            return StaticResult.Success<LoginKey>(JRes);
        }
        public async Task<CommonResponse<LoginModels._data>> AuthenKey(AuthenRequest request)
        {
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "AuthKey");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    return StaticResult.Success<LoginModels._data>(JRes.Data);
                    break;
                default:
                    return StaticResult.Error<LoginModels._data>(JRes.Message, JRes.Code);
                    break;
            }
        }
        public async Task<CommonResponse<GetDeposit._data>> GetDeposit(GetDepositRequest request)
        {
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "ShowDeposit");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            GetDeposit JRes = JsonConvert.DeserializeObject<GetDeposit>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    return StaticResult.Success<GetDeposit._data>(JRes.Data);
                    break;
                default:
                    return StaticResult.Error<GetDeposit._data>(JRes.Message, JRes.Code);
                    break;
            }
        }
    }
}
