using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class ITourDestination
    {
        public Guid Id { get; set; }
        public Guid? TourId { get; set; }
        public string? DestinationCode { get; set; }
    }
}
