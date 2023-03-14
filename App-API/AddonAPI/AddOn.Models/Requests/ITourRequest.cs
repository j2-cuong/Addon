using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AddOn.Models.Requests
{
    public class ITourRequest
    {
        public class GetByPartnerCode
        {
            [JsonIgnore]
            public string? PartnerCode { get; set; }
        }
        public class SearchByName
        {
            public string? Name { get; set; }
            [JsonIgnore]
            public string? PartnerCode { get; set; }
        }
        public class ByIdRequest
        {
            public string? TourId { get; set; }
            [JsonIgnore]
            public string? PartnerCode { get; set; }
        }
        public class TourCreateRequest
        {
            public TourData? tourData { get; set; }
            public TourDetail? tourDetail { get; set; }
            public TourImage? tourImage { get; set; }
            public TourDestination? tourDestination { get; set; }
        }
        public class TourUpdateRequest
        {
            public string TourId { get; set; }
            public TourData? tourData { get; set; }
            public TourDetail? tourDetail { get; set; }
            public TourImage? tourImage { get; set; }
            public TourDestination? tourDestination { get; set; }
        }
        public class TourData
        {
            [JsonIgnore]
            public Guid? TourId { get; set; }
            public string? TourName { get; set; }
            public Guid? TypeId { get; set; }
            [JsonIgnore]
            public string? PartnerCode { get; set; }
            public DateTime? DepartureTime { get; set; }
            public DateTime? ArrivalTime { get; set; }
            public decimal? Price { get; set; }
            [JsonIgnore]
            public string? CreatedBy { get; set; }
            [JsonIgnore]
            public DateTime? CreatedTime { get; set; }
            [JsonIgnore]
            public string? UpdatedBy { get; set; }
            [JsonIgnore]
            public DateTime? UpdatedTime { get; set; }
            public int? SeatsNumber { get; set; }
            public int? TimeLimit { get; set; }
            public string? FirstCharge { get; set; }
            public DateTime? SecondChargeTime { get; set; }
            public decimal? VisaPrice { get; set; }
            public decimal? PrivateRoomPrice { get; set; }
            public decimal? Adtprice { get; set; }
            public decimal? Chdprice { get; set; }
            public decimal? Infprice { get; set; }
            public string? DepartureLocationCode { get; set; }
            public bool? IsPrivateTour { get; set; }
            public string? TimeDesc { get; set; }
            public string? VehicleDesc { get; set; }
            public string? DestinationDesc { get; set; }
            public string? IdealTimeDesc { get; set; }
            public string? TargetDesc { get; set; }
            public string? SpecialOfferDesc { get; set; }
        }
        public class TourDetail
        {
            [JsonIgnore]
            public Guid? TourId { get; set; }
            public Guid? TourDetailId { get; set; }
            public int? DayNumber { get; set; }
            public string? Description { get; set; }
        }
        public class TourImage
        {
            [JsonIgnore]
            public Guid? TourId { get; set; }
            public Guid? ImageId { get; set; }
            public string? FileName { get; set; }
            [JsonIgnore]
            public Guid? CreatedBy { get; set; }
            [JsonIgnore]
            public DateTime? CreatedTime { get; set; }
            public string? ImageType { get; set; }
        }
        public class TourDestination
        {
            [JsonIgnore]
            public Guid? TourId { get; set; }
            public Guid? Id { get; set; }
            public string? DestinationCode { get; set; }
        }
    }
}
