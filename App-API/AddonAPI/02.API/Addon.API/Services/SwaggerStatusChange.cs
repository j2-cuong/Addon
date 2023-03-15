using Swashbuckle.AspNetCore.SwaggerGen;
using Microsoft.OpenApi.Models;


namespace Addon.API.Services
{
    public class SwaggerStatusChange : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            operation.Responses["401"] = new OpenApiResponse
            {
                Description = "Unauthorized",
                Content = new Dictionary<string, OpenApiMediaType>()
            };
            //if (operation.Responses.ContainsKey("200"))
            //{
            //    operation.Responses["200"] = new OpenApiResponse
            //    {
            //        Description = "OK",
            //        Content = new Dictionary<string, OpenApiMediaType>()
            //    };
            //} else if(operation.Responses.ContainsKey("401"))
            //{
            //    operation.Responses["401"] = new OpenApiResponse
            //    {
            //        Description = "Unauthorized",
            //        Content = new Dictionary<string, OpenApiMediaType>()
            //    };
            //}
        }
    }
}
