using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class CDestination
    {
        public string Code { get; set; } = null!;
        public string ParentCode { get; set; } = null!;
        public string Type { get; set; } = null!;
        public string NameVi { get; set; } = null!;
    }
}
