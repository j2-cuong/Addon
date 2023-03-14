using Addon.Core.Entities;
using static Addon.Core.PermissionMode;

namespace Addon.Core.Model
{
    public class NavModel : CNavigation
    {
        public List<NavModel>? Children { get; set; }
    }
}
