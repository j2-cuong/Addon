using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class IBooking
    {
        public Guid BookingId { get; set; }
        public Guid? TourId { get; set; }
        public int? SeatsNumber { get; set; }
        public int? ChildNo { get; set; }
        public int? AdultNo { get; set; }
        public Guid? UserId { get; set; }
        public Guid? CreatedBy { get; set; }
        public DateTime? CreatedTime { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public decimal? Price { get; set; }
        public string? PartnerCode { get; set; }
        public decimal? DiscountAmount { get; set; }
        public decimal? PaymentPrice { get; set; }
        public DateTime? LastIssueDate { get; set; }
        public decimal? VisaPrice { get; set; }
        public decimal? PrivateRoomPrice { get; set; }
        public int? StatusCode { get; set; }
    }
}
