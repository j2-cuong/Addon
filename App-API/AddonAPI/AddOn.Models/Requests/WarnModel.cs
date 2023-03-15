using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddOn.Models
{
    public  class Warn
    {
        public string? WarnId{ get; set; }
    }
    public class WarnModel : Warn
    {
        public string? PartnerCode { get; set; }
        public string? UserId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
    }

}
