using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class IBookingLog
    {
        public Guid Id { get; set; }
        public Guid? BookingId { get; set; }
        public string? Desc { get; set; }
        public DateTime? Logtime { get; set; }
        public Guid? UserId { get; set; }
    }
}
