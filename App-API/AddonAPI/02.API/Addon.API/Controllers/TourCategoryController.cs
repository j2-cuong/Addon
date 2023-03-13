using Addon.API.Logic.TourCategory;
using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Addon.API.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TourCategoryController : ControllerBase
    {
        ITourCategoryServices svc;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="_svc"></param>
        public TourCategoryController(ITourCategoryServices _svc)
        {
            this.svc = _svc;
        }

        /// <summary>
        /// SearchById.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        ///     "Authorization":"Bearer "+ Token lấy từ API login
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "CategoryId":"DEMO"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("SearchById")]
        public CommonResponse<CTourCategory> SearchById(GetTourCategoryByIdRequest request)
        {
            return svc.SearchById(request);
        }

        /// <summary>
        /// SearchByName.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        ///     "Authorization":"Bearer "+ Token lấy từ API login
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "name":"DEMO"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("SearchByName")]
        public async Task<CommonResponse<List<CTourCategory>>> SearchByName(GetTourCategoryByNameRequest request)
        {
            return await svc.SearchByName(request);
        }

        /// <summary>
        /// Create.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        ///     "Authorization":"Bearer "+ Token lấy từ API login
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "name":"DEMO"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("Create")]
        public CommonResponse<CTourCategory> Create(CTourCategory request)
        {
            return svc.Create(request);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("Update")]
        public CommonResponse<CTourCategory> Update(CTourCategory request)
        {
            return svc.Update(request);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        [Route("Delete")]
        public CommonResponse Delete(GetTourCategoryByIdRequest request)
        {
            return svc.Delete(request);
        }
    }
}
