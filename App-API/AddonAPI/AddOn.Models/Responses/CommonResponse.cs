using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddOn.Models.Responses
{
    public class StaticResult
    {
        public static CommonResponse<T> Success<T>(T Data)
        {
            return new CommonResponse<T>()
            {
                code = "00",
                message = "Thành công.",
                Data = Data
            };
        }
        public static CommonResponse Error(string Msg)
        {
            return new CommonResponse()
            {
                code = "00",
                message = Msg,
            };
        }
        public static CommonResponse<T> Error<T>(string Msg,string code)
        {
            return new CommonResponse<T>()
            {
                code = code,
                message = Msg,
            };
        }
    }
    public class CommonResponse<T>
    {
        public string code { get; set; }
        public string message { get; set; }
        public T Data { get; set; }
    }
    public class CommonResponse
    {
        public string code { get; set; }
        public string message { get; set; }
    }
}
