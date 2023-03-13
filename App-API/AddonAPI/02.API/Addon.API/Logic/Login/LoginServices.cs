using Addon.Core.Common;
using Addon.Core.Entities;
﻿using Addon.Core.Authorize;
using Addon.Core.Interfaces;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Data;
using Addon.DataProcess.DataProcess;
using System.Linq;
using System.Collections;
using System.Text.Json.Nodes;
using static Addon.Core.Const.PermissionMode;

namespace Addon.Core.Services
{
    public class LoginServices : ILoginServices
    {
        ApiBase apiBase = new ApiBase();
        public async Task<Response<ResToken>> LoginEcoSvc(LoginEcoRequest request)
        {
           
                request.PartnerCode = "DEMO";
                request.UserName = "accounting";
                request.Password = "123456@@";
            


            //request.PartnerCode = "DEMO";
            //request.UserName = "huynguyen";
            //request.Password = "Huy@@789##";

            HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);

            JObject jObject = JObject.Parse(DataStr);
            var UserRole = (string)jObject["Data"]["User"]["UserRole"];
            ProcessJson json = new ProcessJson();
            switch (JRes.Code)
            {
                case "0":
                    var getPermission = GetNav(UserRole);
                    string token = new Token().GenerateToken(JRes.Data);
                    var res = new Response<ResToken>(
                        1,
                        "Thành Công",
                        getPermission,
                        token
                    ); 
                    
                    return res;
                    break;
                default:
                    return new Response<ResToken>(
                        2,
                        "Thất bại"
                    );
                    break;
            }
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

        public List<NavigationModel> GetNav(string PermissionName)
        {
            AddonDBContext context = new AddonDBContext();
            List<CNavigation> result = new List<CNavigation>();
            result = (from i in context.CNavigations
                      where (i.IsPermission.Contains(PermissionName)) && (i.ChildLevel == 0)
                      select i).ToList();

            var getMenu = result.Select(o => new NavigationModel
            {
                NavName = o.NavName,
                NavUrl = o.NavUrl,
                ParentLevel = o.ParentLevel,
                ChildLevel  = o.ChildLevel,
            }).OrderByDescending(x => x.ParentLevel).ThenBy(x => x.ChildLevel)
            .ToList();
            //var getSubMenu 
            return getMenu;
        }
    }
}
