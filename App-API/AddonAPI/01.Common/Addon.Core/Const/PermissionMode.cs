using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core
{
    public class PermissionMode
    {
        public partial class NavigationModel
        {
            [JsonIgnore]
            public string NavName { get; set; } = null!;
            [JsonIgnore]
            public string NavUrl { get; set; } = null!;
            [JsonIgnore]
            public int ParentLevel { get; set; }
            [JsonIgnore]
            public int ChildLevel { get; set; }
            [JsonIgnore]
            public string IconName { get; set; } = null!;
            [JsonIgnore]
            public string IconStyle { get; set; } = null!;
            [JsonIgnore]
            public string IdPage { get; set; } = null!;
        }
    }
}
