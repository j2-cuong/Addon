using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class CNavigation
    {
        public Guid NavId { get; set; }
        public string NavCode { get; set; } = null!;
        public string? Title { get; set; }
        public string? Url { get; set; }
        public string? UserRole { get; set; }
        public int? PartnerLevel { get; set; }
    }
}
