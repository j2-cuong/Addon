using Addon.Core.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Addon.Core.PermissionMode;

namespace Addon.Core.Model
{
    public class NavModel : CNavigation
    {
        public List<NavModel>? Children { get; set; }
    }
}
