using Addon.Core.Authorize;
using Addon.Core.Common;
using Addon.Core.Entities;
using Addon.Core.Interfaces;
using Addon.DataProcess.DataProcess;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data;
using Addon.Core.Model;
using Addon.Core.Utils;
using static AddOn.Models.Responses.StaticResult;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Addon.Core.Services
{
    public class LoginServices : ILoginServices
    {
        private readonly ILogger<LoginServices> _logger;
        public LoginServices(ILogger<LoginServices> logger)
        {
            _logger = logger;
        }
        ApiBase apiBase = new ApiBase();
        public async Task<LoginResponse<List<ResToken>>> LoginEcoSvc(LoginEcoRequest request)
        {
            //request.PartnerCode = "DEMO";
            //request.UserName = "huynguyen";
            //request.Password = "Huy@@789##";
            try
            {
                HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
                string DataStr = resMsg.Content.ReadAsStringAsync().Result;
                LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);

                JObject jObject = JObject.Parse(DataStr);
                ProcessJson json = new ProcessJson();
                LoginResponse<List<ResToken>> res = new LoginResponse<List<ResToken>>();
                switch (JRes.Code)
                {
                    case "0":
                        string token = new Token().GenerateToken(JRes.Data);
                        var UserRole = (string)jObject["Data"]["User"]["UserRole"];
                        var DisplayName = (string)jObject["Data"]["User"]["DisplayName"];
                        var Account = (string)jObject["Data"]["User"]["Username"];

                        res = StaticResult.SuccessLogin<List<ResToken>>(null, token, UserRole, DisplayName, Account);
                        break;
                    default:
                        res = new LoginResponse<List<ResToken>>
                        {
                            code = (int)ErrorCode.SysErr,
                            message = JRes.Message
                        };
                        break;
                }
                return res;
            }
            catch (Exception e)
            {
                _logger.LogCritical
                               (
                                   $@"*------ StartRequest 'Data is Null------*" + "\r" +
                                   $@"      Controller : LoginEcoSvc      " + "\r" +
                                   $@"      Thông báo: {e.Message}      " + "\r\r" +
                                   $@"*------ EndRequest ------*" + "\r\r"
                               );
                var res = new LoginResponse<List<ResToken>>
                {
                    code = (int)ErrorCode.SysErr,
                    message = e.Message
                };
                return res;
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
                    res = StaticResult.Error<string>(JRes.Message, int.Parse(JRes.Code));
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
                    res = StaticResult.Error<ResToken>(JRes.Message, int.Parse(JRes.Code));
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
                    res = StaticResult.Error<GetDeposit._data>(JRes.Message, int.Parse(JRes.Code));
                    break;
            }
            return res;
        }

        public List<NavModel> GetMenu(string parentId, string IsPer )
        {
            AddonDBContext context = new AddonDBContext();
            var menuRootEntity = context.CNavigations.Where(x => (x.IsPermission.ToUpper().Contains(IsPer.ToUpper())) &&(string.IsNullOrEmpty(parentId) && string.IsNullOrEmpty(x.ParentGroup)) || (!string.IsNullOrEmpty(parentId) && !string.IsNullOrEmpty(x.ParentGroup) && x.ParentGroup.ToLower() == parentId.ToLower())).ToList();
            var menuRootModel = AutoMapperConfig.AutoMap<CNavigation, NavModel>(menuRootEntity);
            foreach (var navModel in menuRootModel)
            {
                var children = GetMenu(navModel.NavId.ToString(), IsPer);
                navModel.Children = children;

                if (children!=null && children.Count() > 0)
                {
                    navModel.NavUrl = "";
                    navModel.ParentGroup = "";
                }
            }
            return menuRootModel;
        }
    }
}
