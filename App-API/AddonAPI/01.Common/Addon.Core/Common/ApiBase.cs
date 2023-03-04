using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core.Common
{
    public class ApiBase
    {
        public async Task<HttpResponseMessage> _postAsync(dynamic request, string FuncName)
        {
            string uri = GetLink.GetValueOrDefault(FuncName, null);
            if (string.IsNullOrEmpty(uri))
            {
                throw new Exception("Chức năng hiện không có hoặc đang bảo trì.");
            }
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Add("Authorization", "0sX79RNrJAoNMlS0weVhhs5pYy7GIhdJ9FfJftUHARQt6tg66yDAdO5NDcyGX63WN7Kd4oTqZonJdKoWQ1uF8OTIhwQtNN7Pj6Hhi0QyYdXqX28fOAd9sqiG0kGQrYKa");
            HttpContent content = new StringContent(JsonConvert.SerializeObject(request), Encoding.UTF8, "application/json");
            HttpResponseMessage res = await client.PostAsync(uri, content);
            return res;
        }
        public Dictionary<string, string> GetLink = new Dictionary<string, string>
        {
            {"Authentication","https://eco.metatrip.vn/ECOAPI/Authentication" },
            {"CreateAuthKeyForTest","https://eco.metatrip.vn/ECOAPI/CreateAuthenKey" },
            {"ShowDeposit","https://eco.metatrip.vn/ECOAPI/ShowDeposit" },
            {"AuthKey","https://eco.metatrip.vn/ECOAPI/AuthenMe" }
        };
    }
}
