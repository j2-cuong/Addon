using Addon.Core.ConnectProcess;
using System.Data.Entity;

namespace Addon.DataProcess
{
    public abstract class Repository<T> where T : class
    {
        protected readonly MethodCreateConnect context;
        public Repository()
        {
            context = new MethodCreateConnect();
        }
        public virtual void Create(T entity)
        {
            context.Set<T>().Add(entity);
            context.SaveChanges();
        }

        public virtual void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();
        }

        public virtual void Delete(int id)
        {
            var entity = context.Set<T>().Find(id);
            context.Set<T>().Remove(entity);
            context.SaveChanges();
        }

        public virtual T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }
        //public virtual IEnumerable<T> GetAll()
        //{
        //    return context.Set<T>();
        //}
    }
}
