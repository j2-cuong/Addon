using System.Data.Entity;

namespace Addon.Core.ConnectProcess
{
    public class MethodCreateConnect : DbContext
    {
        public MethodCreateConnect() : base(ConnectString.Connect)
        {
        }
       
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
