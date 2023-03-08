using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class CNavigation
    {
        public Guid NavId { get; set; }
        public string NavCode { get; set; } = null!;
        public string NavName { get; set; } = null!;
        public string NavUrl { get; set; } = null!;
        public bool? IsAdmin { get; set; }
        public bool? IsMod { get; set; }
        public bool? IsBooking { get; set; }
        public bool? IsAccounting { get; set; }
    }
}
