using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core.Const
{
    public class PermissionMode
    {
        public partial class NavigationModel
        {
            public string NavName { get; set; } = null!;
            public string NavUrl { get; set; } = null!;
            public int ParentLevel { get; set; }
            public int ChildLevel { get; set; }
        }
    }
}
