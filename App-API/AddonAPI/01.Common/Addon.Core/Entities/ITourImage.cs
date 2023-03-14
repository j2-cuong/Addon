using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class ITourImage
    {
        public Guid ImageId { get; set; }
        public Guid? TourId { get; set; }
        public string? FileName { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string? ImageType { get; set; }
    }
}
