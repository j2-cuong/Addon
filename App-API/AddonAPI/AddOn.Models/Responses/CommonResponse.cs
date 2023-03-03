using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddOn.Models.Responses
{
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
