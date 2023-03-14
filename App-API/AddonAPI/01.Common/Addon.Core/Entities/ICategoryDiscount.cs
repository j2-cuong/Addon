using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class ICategoryDiscount
    {
        public Guid DiscountId { get; set; }
        public Guid? CategoryId { get; set; }
        public decimal? DiscountMax { get; set; }
        public string? PartnerCode { get; set; }
    }
}
