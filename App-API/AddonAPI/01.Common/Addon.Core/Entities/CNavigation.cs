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
        public string? IsPermission { get; set; }
        public int? ParentLevel { get; set; }
        public int? ChildLevel { get; set; }
        public string? ParentGroup { get; set; }
        public string? IconName { get; set; }
        public string? IconStyle { get; set; }
        public string? IdPage { get; set; }
    }
}
