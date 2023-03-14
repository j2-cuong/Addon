using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddOn.Models.Requests
{
    public class GetTourCategoryByIdRequest 
    {
        public string? CategoryId { get; set; }
    }
    public class GetTourCategoryByNameRequest
    {
        public string name { get; set; }
    }
}
