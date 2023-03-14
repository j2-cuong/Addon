using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AddOn.Models.Requests
{
    public class TourDestination_GetByTourId_Request: TourDetail_GetByTourId_Request
    {
    }

    public class TourDestination_GetById_Request
    {
        public string? TourDestinationId { get; set; }
    }
    public class TourDestination_SearchByName_Request
    {
        public string? TourId { get; set; }
        public string? Name { get; set; }
    }
}
