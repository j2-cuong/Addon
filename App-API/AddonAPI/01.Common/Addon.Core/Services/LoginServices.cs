using Addon.Core.Common;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core.Services
{
    public class LoginServices
    {
        ApiBase apiBase = new ApiBase();
        public async Task<CommonResponse<LoginModels>> LoginEco(LoginEcoRequest request)
        {
            HttpResponseMessage resMsg = await apiBase._postAsync(request, "Authentication");
            string DataStr = resMsg.Content.ReadAsStringAsync().Result;
            LoginModels JRes = JsonConvert.DeserializeObject<LoginModels>(DataStr);
            switch(JRes.Code)
            {
                case "0":
                    return 
            }
        }

        public CommonResponse<T> ResWithData(T Data)
        {

        }

    }
}
