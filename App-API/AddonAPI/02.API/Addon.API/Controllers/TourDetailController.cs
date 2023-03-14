using Addon.API.Logic;
using Addon.Core.Common;
using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Addon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourDetailController : ControllerBase
    {
        ITourDetailServices svc;
        public TourDetailController(ITourDetailServices svc)
        {
            this.svc = svc;
        }

        /// <summary>
        /// GetById.
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
        ///         "TourDetailId":"3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("GetById")]
        public async Task<CommonResponse<ITourDetail>> GetById(TourDetail_GetById_Request request)
        {
            return await svc.GetById(request);
        }
        /// <summary>
        /// GetByTourId.
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
        ///         "TourId":"3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("GetByTourId")]
        public async Task<CommonResponse<List<ITourDetail>>> GetByTourId(TourDetail_GetByTourId_Request request)
        {
            return await svc.GetByTourId(request);
        }

        /// <summary>
        /// CreateTourDetail.
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
        ///         "TourId": "9ba29238-665c-4cfd-8339-4427b8e196be",
        ///         "Data": [
        ///             {
        ///                 "DayNumber": 1,
        ///                 "Description": "BlaBo..BlaBlo"
        ///             },
        ///             {
        ///                 "DayNumber": 2,
        ///                 "Description": "BliBi..BloBlo"
        ///             }
        ///         ]
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("CreateTourDetail")]
        public CommonResponse<List<ITourDetail>> CreateTourDetail(TourDetail_Create_Request request)
        {
            return svc.Create(request);
        }
        /// <summary>
        /// UpdateTourDetail.
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
        ///         "TourId": "9ba29238-665c-4cfd-8339-4427b8e196be",
        ///         "Data": [
        ///             {
        ///                 "DayNumber": 1,
        ///                 "Description": "BlaBo..BlaBlo"
        ///             },
        ///             {
        ///                 "DayNumber": 2,
        ///                 "Description": "BliBi..BloBlo"
        ///             }
        ///         ]
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("UpdateTourDetail")]
        public CommonResponse<List<ITourDetail>> UpdateTourDetail(TourDetail_Create_Request request)
        {
            return svc.Update(request);
        }

        /// <summary>
        /// DeleteTourDetail.
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
        ///         "TourId": "9ba29238-665c-4cfd-8339-4427b8e196be"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("DeleteTourDetail")]
        public CommonResponse<ITourDetail> DeleteTourDetail(TourDetail_Delete_Request request)
        {
            return svc.Delete(request);
        }
    }
}
