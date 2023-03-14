using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AddOn.Models.Responses
{
    public class StaticResult
    {
        public static CommonResponse Success()
        {
            return new CommonResponse()
            {
                code = (int)ErrorCode.Success,
                message = "Thành công.",
            };
        }
        public static CommonResponse<T> Success<T>(T Data)
        {
            return new CommonResponse<T>()
            {
                code = (int)ErrorCode.Success,
                message = "Thành công.",
                Data = Data
            };
        }
        public static LoginResponse<T> SuccessLogin<T>(T data,string token)
        {
            return new LoginResponse<T>()
            {
                code = (int)ErrorCode.Success,
                message = "Thành công.",
                Token = token,
                Data = data
            };
        }
        public static CommonResponse MissingError(string extend = "")
        {
            return new CommonResponse
            {
                code = (int)ErrorCode.Missing,
                message = $"Thiếu thông tin {extend}"
            };
        }
        public static CommonResponse<T> MissingError<T>(string extend = "")
        {
            return new CommonResponse<T>
            {
                code = (int)ErrorCode.Missing,
                message = $"Thiếu thông tin {extend}"
            };
        }


        public static CommonResponse<T> NotFoundError<T>(string extend = "")
        {
            return new CommonResponse<T>
            {
                code = (int)ErrorCode.NotFound,
                message = "Không có dữ liệu " + (extend == "" ? "" : $"dành cho {extend}")
            };
        }
        public static CommonResponse NotFoundError(string extend = "")
        {
            return new CommonResponse
            {
                code = (int)ErrorCode.NotFound,
                message = "Không có dữ liệu " + (extend == "" ? "" : $"dành cho {extend}")
            };
        }
        public static CommonResponse NotExistError(string extend = "")
        {
            return new CommonResponse
            {
                code = (int)ErrorCode.NotExist,
                message = $"Không tồn tại bản ghi này. {extend}"
            };
        }
        public static CommonResponse<T> NotExistError<T>(string extend = "")
        {
            return new CommonResponse<T>
            {
                code = (int)ErrorCode.NotExist,
                message = $"Không tồn tại bản ghi này. {extend}"
            };
        }

        public static CommonResponse Error(string Msg)
        {
            return new CommonResponse()
            {
                code = (int)ErrorCode.SysErr,
                message = Msg,
            };
        }
        public static CommonResponse<T> Error<T>(string Msg)
        {
            return new CommonResponse<T>()
            {
                code = (int)ErrorCode.SysErr,
                message = Msg,
            };
        }
        public static CommonResponse<T> Error<T>(string Msg, int code)
        {
            return new CommonResponse<T>()
            {
                code = code,
                message = Msg,
            };
        }
        public enum ErrorCode
        {
            Success = 0,

            //Lỗi dữ liệu
            Missing = 401,
            NotExist = 402,

            NotFound = 404,

            SysErr = 999
        }
    }
    public class CommonResponse<T>
    {
        public int code { get; set; }
        public string message { get; set; }
        public T Data { get; set; }
    }
    public class CommonResponse
    {
        public int code { get; set; }
        public string message { get; set; }
    }
    public class LoginResponse<T>
    {
        public int code { get; set; }
        public string message { get; set; }
        public string Token { get; set; }
        public T Data { get; set; }
    }


    public class Response
    {
        public int Status { get; set; }

        public string Message { get; set; }

        public Response(int status, string message = null)
        {
            Status = status;
            Message = message;
        }
    }
    public class Response<T> : Response
    {
        public object Data { get; set; }
        public string ID { get; set; }
        public string Token { get; set; }


        [JsonConstructor]
        public Response(
            int status, string message = null, object data = null, string token = null)
            : base(status, message)
        {
            Data = data;
            Token = token;
        }
    }
}
