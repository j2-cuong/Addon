using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class IBookingTransaction
    {
        public Guid TransactionId { get; set; }
        public int? StatusCode { get; set; }
        public Guid? UserId { get; set; }
        public DateTime? Time { get; set; }
        public decimal? Amount { get; set; }
        public string? PartnerCode { get; set; }
        public Guid? BookingId { get; set; }
    }
}
