using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class CNavigation
    {
        [JsonIgnore]
        public Guid NavId { get; set; }
        [JsonIgnore]
        public string NavCode { get; set; } = null!;
        public string NavName { get; set; } = null!;
        public string NavUrl { get; set; } = null!;
        [JsonIgnore]
        public string IsPermission { get; set; } = null!;
        public int ParentLevel { get; set; }
        public int ChildLevel { get; set; }
    }


}
