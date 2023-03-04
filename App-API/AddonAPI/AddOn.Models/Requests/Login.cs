using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddOn.Models.Requests
{
    public class LoginEcoRequest
    {
        public string PartnerCode { get; set; } 
        public string UserName { get; set; }
        public string Password { get; set; }
    }
    public class AuthenRequest
    {
        public string Key { get; set; }
    }
    public class GetDepositRequest
    {
        public string PartnerCode { get; set; }
    }
}
