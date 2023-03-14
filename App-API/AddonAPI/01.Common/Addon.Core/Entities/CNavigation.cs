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
        public string IsPermission { get; set; } = null!;
        public string IconName { get; set; } = null!;
        public string IconStyle { get; set; } = null!;
        public string IdPage { get; set; } = null!;
        public string? ParentGroup { get; set; }
    }
}
