using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class CNavigation
    {
        public Guid NavId { get; set; }
        public string NavCode { get; set; } = null!;
        [JsonIgnore]
        public string NavName { get; set; } = null!;
        [JsonIgnore]
        public string NavUrl { get; set; } = null!;
        [JsonIgnore]
        public string IsPermission { get; set; } = null!;
        [JsonIgnore]
        public string IconName { get; set; } = null!;
        [JsonIgnore]
        public string IconStyle { get; set; } = null!;
        [JsonIgnore]
        public string IdPage { get; set; } = null!;
        [JsonIgnore]
        public string? ParentGroup { get; set; }
    }
}
