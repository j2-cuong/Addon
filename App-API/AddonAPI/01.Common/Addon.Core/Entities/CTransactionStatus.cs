using System;
using System.Collections.Generic;

namespace Addon.Core.Entities
{
    public partial class CTransactionStatus
    {
        public int StatusCode { get; set; }
        public string? StatusName { get; set; }
    }
}
