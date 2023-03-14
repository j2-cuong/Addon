using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddOn.Models.Requests
{
    public class TourDetailData
    {
        [JsonIgnore]
        public Guid TourDetailId { get; set; }
        [JsonIgnore]
        public Guid? TourId { get; set; }
        public int? DayNumber { get; set; }
        public string? Description { get; set; }
    }
    public class TourDetail_GetById_Request
    {
        public string TourDetailId { get; set; }
        public string PartnerCode { get; set; }
    }
    public class TourDetail_GetByTourId_Request
    {
        public string TourId { get; set; }
        public string PartnerCode { get; set; }
    }
    public class TourDetail_Create_Request
    {
        public string TourId { get; set; }
        public List<TourDetailData> Data { get; set; }
    }
    public class TourDetail_Delete_Request
    {
        public string TourId { get; set; }
        public List<TourDetailData> Data { get; set; }
    }
}
