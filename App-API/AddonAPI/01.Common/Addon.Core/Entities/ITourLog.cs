using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class ITourLog
    {
        public Guid Id { get; set; }
        public Guid? TourId { get; set; }
        public string? Desc { get; set; }
        public DateTime? LogTime { get; set; }
        public string? UserId { get; set; }
    }
}
