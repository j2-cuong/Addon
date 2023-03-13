using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class ITour
    {
        public Guid TourId { get; set; }
        public string? TourName { get; set; }
        public Guid? TypeId { get; set; }
        public string? PartnerCode { get; set; }
        public DateTime? DepartureTime { get; set; }
        public DateTime? ArrivalTime { get; set; }
        public decimal? Price { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public int? SeatsNumber { get; set; }
        public TimeSpan? TimeLimit { get; set; }
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
}
