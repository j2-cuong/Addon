using Addon.Core.Model;
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
        public class Nav 
        {
            public Guid? NavId { get; set;} 
        }
        public class NavigationModel : Nav
        {
            public string NavName { get; set; } = null!;
            public string NavUrl { get; set; } = null!;
            public string IconName { get; set; } = null!;
            public string IconStyle { get; set; } = null!;
            public string IdPage { get; set; } = null!;
            public string? ParentGroup { get; set; }
            public List<NavigationModel>? SubMenu { get; set; }
        }
    }
}
