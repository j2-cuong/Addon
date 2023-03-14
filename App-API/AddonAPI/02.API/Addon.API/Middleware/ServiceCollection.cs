using Addon.API.Logic;
using Addon.API.Logic.TourCategory;
using Addon.Core.Interfaces;
using Addon.Core.Services;

namespace Addon.API.Middleware
{
    public static class ServiceCollection
    {
        public static void RegisterIoCs(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<ILoginServices, LoginServices>();
            services.AddScoped<ITourCategoryServices, TourCategoryServices>();
            services.AddScoped<ITourServices, TourServices>();
            services.AddScoped<ITourDetailServices, TourDetailServices>();
            //services.AddScoped<ITourHandler, TourHandler>();
        }
    }
}
