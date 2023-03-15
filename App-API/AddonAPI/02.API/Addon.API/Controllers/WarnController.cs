using Addon.API.Logic.TourCategory;
using Addon.Core.Entities;
using AddOn.Models;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Addon.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class WarnController : ControllerBase
    {
        IWarnCategoryServices svc;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="_svc"></param>
        public WarnController(IWarnCategoryServices _svc)
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
        ///         "WarnId":"3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]

        [Route("SearchById")]
        public CommonResponse<IWarn> SearchById(Warn request)
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
        public async Task<CommonResponse<List<IWarn>>> SearchByName(WarnModel request)
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
        ///         "WarnTitle": "string",
        ///         "WarnContent": "string"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("Create")]
        public CommonResponse<IWarn> Create(IWarn request)
        {
            return svc.Create(request);
        }

        /// <summary>
        /// Update.
        /// </summary>
        /// <remarks>
        /// Example: sử dụng Postman
        /// 
        /// METHOD : POST
        /// 
        /// I, Thẻ headers bao gồm : 
        /// 
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///         "categoryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "categoryCode": "string",
        ///         "categoryName": "string"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("Update")]
        public CommonResponse<IWarn> Update(IWarn request)
        {
            return svc.Update(request);
        }

        /// <summary>
        /// Delete.
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
        ///         "CategoryId":"3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("Delete")]
        public CommonResponse Delete(Warn request)
        {
            return svc.Delete(request);
        }
    }
}
