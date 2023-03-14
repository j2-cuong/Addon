using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class IWarn
    {
        public Guid WarnId { get; set; }
        public string? PartnerCode { get; set; }
        public string? UserId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
    }
}
