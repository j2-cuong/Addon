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
using System.Collections.Generic;
using System.Data;
<<<<<<< HEAD
using Addon.DataProcess.DataProcess;
using System.Linq;
using System.Collections;
using System.Text.Json.Nodes;
using static Addon.Core.PermissionMode;
using System.Diagnostics.Metrics;
using Addon.Core.Model;
using Addon.Core.Utils;
=======
using static Addon.Core.Const.PermissionMode;
using static AddOn.Models.Responses.StaticResult;
>>>>>>> d7c6d1aabb3501dca39de6724013dd35f2e89b2c

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
        public async Task<LoginResponse<List<NavigationModel>>> LoginEcoSvc(LoginEcoRequest request)
        {
<<<<<<< HEAD

            try
            {
                request.PartnerCode = "DEMO";
                request.UserName = "huynguyen";
                request.Password = "Huy@@789##";

                HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
                string DataStr = resMsg.Content.ReadAsStringAsync().Result;
                LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);

                JObject jObject = JObject.Parse(DataStr);
                ProcessJson json = new ProcessJson();
                switch (JRes.Code)
                {
                    case "0":
                        var UserRole = (string)jObject["Data"]["User"]["UserRole"];
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
                        _logger.LogCritical
                                   (
                                       $@"*------ StartRequest ------*" + "\r" +
                                       $@"      Controller : LoginEcoSvc      " + "\r" +
                                       $@"      Thông báo: {jObject}      " + "\r\r" +
                                       $@"      Eco res: {DataStr}      " + "\r\r" +
                                       $@"*------ EndRequest ------*" + "\r\r"
                                   );
                        return new Response<ResToken>(
                            2,
                            "Thất bại",
                            JRes
                        );
                        break;
                }
            } catch (Exception ex)
            {
                _logger.LogCritical
                                    (
                                        $@"*------ StartRequest 'Data is Null------*" + "\r" +
                                        $@"      Controller : LoginEcoSvc      " + "\r" +
                                        $@"      Thông báo: {ex.Message}      " + "\r\r" +
                                        $@"*------ EndRequest ------*" + "\r\r"
                                    );
                return new Response<ResToken>(
                            2,
                            "Thất bại"
                        );
=======

            //request.PartnerCode = "DEMO";
            //request.UserName = "accounting";
            //request.Password = "123456@@";



            //request.PartnerCode = "DEMO";
            //request.UserName = "huynguyen";
            //request.Password = "Huy@@789##";

            HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);

            JObject jObject = JObject.Parse(DataStr);
            var UserRole = (string)jObject["Data"]["User"]["UserRole"];
            ProcessJson json = new ProcessJson();
            LoginResponse<List<NavigationModel>> res = new LoginResponse<List<NavigationModel>>();
            switch (JRes.Code)
            {
                case "0":
                    var getPermission = GetNav(UserRole);
                    string token = new Token().GenerateToken(JRes.Data);
                    res = StaticResult.SuccessLogin<List<NavigationModel>>(getPermission, token);
                    break;
                default:
                    res = new LoginResponse<List<NavigationModel>>
                    {
                        code = (int)ErrorCode.SysErr,
                        message = JRes.Message
                    };
                    break;
>>>>>>> d7c6d1aabb3501dca39de6724013dd35f2e89b2c
            }
            return res;
        }


        public async Task<Response<ResToken>> LoginWithParamEco(LoginEcoRequest request)
        {

            try
            {
                HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
                string DataStr = resMsg.Content.ReadAsStringAsync().Result;
                LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);

                JObject jObject = JObject.Parse(DataStr);
                ProcessJson json = new ProcessJson();
                switch (JRes.Code)
                {
                    case "0":
                        var UserRole = (string)jObject["Data"]["User"]["UserRole"];
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
                        _logger.LogCritical
                                   (
                                       $@"*------ StartRequest ------*" + "\r" +
                                       $@"      Controller : LoginEcoSvc      " + "\r" +
                                       $@"      Thông báo: {jObject}      " + "\r\r" +
                                       $@"      Eco res: {DataStr}      " + "\r\r" +
                                       $@"*------ EndRequest ------*" + "\r\r"
                                   );
                        return new Response<ResToken>(
                            2,
                            "Thất bại"
                        );
                        break;
                }
            }
            catch (Exception ex)
            {
                _logger.LogCritical
                                    (
                                        $@"*------ StartRequest ------*" + "\r" +
                                        $@"      Controller : LoginEcoSvc      " + "\r" +
                                        $@"      Thông báo: {ex.Message}      " + "\r\r" +
                                        $@"*------ EndRequest ------*" + "\r\r"
                                    );
                return new Response<ResToken>(
                            2,
                            "Thất bại"
                        );
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

        public List<NavModel> GetNav(string PermissionName)
        {
            AddonDBContext context = new AddonDBContext();
            List<NavModel> result = new List<NavModel>();
            List<NavModel> getSubMenu = new List<NavModel>();
            List<NavModel> getChildrenMenu = new List<NavModel>();
            JObject res = new JObject();
            ProcessJson jsonConvert = new ProcessJson();

            PermissionName = "Booking";
            var ParentGroup = "a83e1897-d64e-477f-900b-424d6948f6cc";
            // Tìm Menu tổng
            var callMenu = (from i in context.CNavigations
                            where
                            (
                              i.IsPermission.ToUpper().Contains(PermissionName) && (string.IsNullOrEmpty(i.ParentGroup) || (!string.IsNullOrEmpty(i.ParentGroup) && i.ParentGroup.Contains("test")))
                            )
                            select i).ToList();

            result = AutoMapperConfig.AutoMap<CNavigation, NavModel>(callMenu);

            if (result.Count > 0)
            {
<<<<<<< HEAD
                foreach (var pair in result)
                {
                   
                   // menu cấp 1
                   var callSubMenu = context.CNavigations.Where(x => (!string.IsNullOrEmpty(x.ParentGroup) && pair.NavId.ToString().ToUpper().Equals(x.ParentGroup))).ToList();

                   pair.Children = AutoMapperConfig.AutoMap<CNavigation, NavModel>(callSubMenu);

                   if (pair.Children != null)
                   {
                       foreach (var childrenMenu in pair.Children)
                       {
                           if (!String.IsNullOrEmpty(childrenMenu.ParentGroup))
                           {
                                // menu cấp 2
                                var callChildrenMenu = context.CNavigations.Where(x => (!string.IsNullOrEmpty(x.ParentGroup) && childrenMenu.NavId.ToString().ToUpper().Equals(x.ParentGroup))).ToList();

                               childrenMenu.Children = AutoMapperConfig.AutoMap<CNavigation, NavModel>(callChildrenMenu);
                           }
                       }
                   }
                    
                }
            }
            var a = result;
            return result;
=======
                NavName = o.NavName,
                NavUrl = o.NavUrl,
                ParentLevel = (int)o.ParentLevel,
                ChildLevel = (int)o.ChildLevel,
            }).OrderByDescending(x => x.ParentLevel).ThenBy(x => x.ChildLevel)
            .ToList();
            //var getSubMenu 
            return getMenu;
>>>>>>> d7c6d1aabb3501dca39de6724013dd35f2e89b2c
        }
    }
}
