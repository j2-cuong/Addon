using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class CTourCategory
    {
        public Guid CategoryId { get; set; }
        public string? CategoryCode { get; set; }
        public string? CategoryName { get; set; }
    }
}
