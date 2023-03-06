using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class ITourDetail
    {
        public Guid TourDetailId { get; set; }
        public Guid? TourId { get; set; }
        public int? DayNumber { get; set; }
        public string? Description { get; set; }
    }
}
