using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class ICustomer
    {
        public Guid CustomerId { get; set; }
        public Guid? BookingId { get; set; }
        public string? TaxCode { get; set; }
        public string? CompanyName { get; set; }
        public string? CustomerName { get; set; }
        public string? EmailAddress { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ContactAddress { get; set; }
        public string? CustomerType { get; set; }
        public string? AgeType { get; set; }
    }
}
