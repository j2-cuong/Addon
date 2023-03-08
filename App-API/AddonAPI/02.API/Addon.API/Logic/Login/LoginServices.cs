using Addon.Core.Common;
using Addon.Core.Interfaces;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Newtonsoft.Json;

namespace Addon.Core.Services
{
    public class LoginServices : ILoginServices
    {
        ApiBase apiBase = new ApiBase();
        public async Task<CommonResponse<LoginModels._data>> LoginEcoSvc(LoginEcoRequest request)
        {
            CommonResponse<LoginModels._data> res = new CommonResponse<LoginModels._data>();
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    res = StaticResult.Success<LoginModels._data>(JRes.Data);
                    break;
                default:
                    res = StaticResult.Error<LoginModels._data>(JRes.Message, JRes.Code);
                    break;
            }
            return res;
        }

        public async Task<CommonResponse<string>> CreateKeyLogin(LoginEcoRequest request)
        {
            CommonResponse<string> res = new CommonResponse<string>();
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "CreateAuthKeyForTest");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginKey JRes = JsonConvert.DeserializeObject<LoginKey>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    res = StaticResult.Success<string>(JRes.Data);
                    break;
                default:
                    res = StaticResult.Error<string>(JRes.Message, JRes.Code);
                    break;
            }
            return res;
        }
        public async Task<CommonResponse<LoginModels._data>> AuthenKey(AuthenRequest request)
        {
            CommonResponse<LoginModels._data> res = new CommonResponse<LoginModels._data>();
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "AuthKey");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    res = StaticResult.Success<LoginModels._data>(JRes.Data);
                    break;
                default:
                    res = StaticResult.Error<LoginModels._data>(JRes.Message, JRes.Code);
                    break;
            }
            return res;
        }
        public async Task<CommonResponse<GetDeposit._data>> GetDeposit(GetDepositRequest request)
        {
            CommonResponse<GetDeposit._data> res = new CommonResponse<GetDeposit._data>();
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "ShowDeposit");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            GetDeposit JRes = JsonConvert.DeserializeObject<GetDeposit>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    res = StaticResult.Success<GetDeposit._data>(JRes.Data);
                    break;
                default:
                    res = StaticResult.Error<GetDeposit._data>(JRes.Message, JRes.Code);
                    break;
            }
            return res;
        }
    }
}
