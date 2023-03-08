﻿using Addon.Core.Common;
using Addon.Core.Entities;
﻿using Addon.Core.Authorize;
using Addon.Core.Interfaces;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Addon.Core.Services
{
    public class LoginServices : ILoginServices
    {
        ApiBase apiBase = new ApiBase();
        public async Task<CommonResponse<ResToken>> LoginEcoSvc(LoginEcoRequest request)
        {

            request.PartnerCode = "DEMO";
            request.UserName = "huynguyen";
            request.Password = "Huy@@789##";

            CommonResponse<ResToken> res = new CommonResponse<ResToken>();
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);

            JObject jObject = JObject.Parse(DataStr);
            var UserRole = (string)jObject["Data"]["User"]["UserRole"];

            switch (JRes.Code)
            {
                case "0":
                    var a = GetNav(UserRole).Result;
                    string token = new Token().GenerateToken(JRes.Data);
                    ResToken resData = new ResToken()
                    {
                        Partner = JRes.Data.Partner,
                        User = JRes.Data.User,
                        Token= token
                    };
                    res = StaticResult.Success<ResToken>(resData);
                    break;
                default:
                    res = StaticResult.Error<ResToken>(JRes.Message, JRes.Code);
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
        public async Task<CommonResponse<ResToken>> AuthenKey(AuthenRequest request)
        {
            CommonResponse<ResToken> res = new CommonResponse<ResToken>();
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "AuthKey");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);
            switch (JRes.Code)
            {
                case "0":
                    string token = new Token().GenerateToken(JRes.Data);
                    ResToken resData = new ResToken()
                    {
                        Partner = JRes.Data.Partner,
                        User = JRes.Data.User,
                        Token = token
                    };
                    res = StaticResult.Success<ResToken>(resData);
                    break;
                default:
                    res = StaticResult.Error<ResToken>(JRes.Message, JRes.Code);
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

        public async Task<Response<List<CNavigation>>> GetNav(string PermissionName)
        {
            AddonDBContext context = new AddonDBContext();
            string key = string.Empty;
            if(PermissionName == "ADMIN")
            {
                key = "IsAdmin";
            } else if(PermissionName == "ISSUE")
            {
                key = "IsMod";
            } else if(PermissionName == "Booking")
            {
                key = "IsBooking";
            } else
            {
                key = "IsAccounting";
            }
            var result = (from a in context.CNavigations
                          where key.Contains("1")
                          select a).ToList();

            return new Response<List<CNavigation>>(
                            SuccessCode.CreateCode,
                            SuccessMessage.CreateMessage,
                            result.ToString()
                            );
        }
    }
}
