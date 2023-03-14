using Addon.API.Logic;
using Addon.Core.Common;
using Addon.Core.Entities;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static AddOn.Models.Requests.ITourRequest;

namespace Addon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourController : ControllerBase
    {
        ITourServices svc;
        public TourController(ITourServices svc)
        {
            this.svc = svc;
        }
        /// <summary>
        /// GetAllData.
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
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("GetAll")]
        public CommonResponse<List<ITour>> GetAllData()
        {
            string PartnerCode = new ApiBase().GetLoginData(Request).Partner.PartnerCode;
            return svc.GetAll(new AddOn.Models.Requests.ITourRequest.GetByPartnerCode { PartnerCode = PartnerCode});
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
        ///         "TourId":"3fa85f64-5717-4562-b3fc-2c963f66afa6"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("GetById")]
        public CommonResponse<ITour> GetByTourId(ByIdRequest request)
        {
            request.PartnerCode = new ApiBase().GetLoginData(Request).Partner.PartnerCode;
            return svc.GetTourById(request);
        }

        /// <summary>
        /// SearchByTourName.
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
        ///         "Name":"Demo"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("SearchByTourName")]
        public CommonResponse<List<ITour>> SearchByName(SearchByName request)
        {
            request.PartnerCode = new ApiBase().GetLoginData(Request).Partner.PartnerCode;
            return svc.SearchByName(request);
        }

        /// <summary>
        /// CreateNew.
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
        ///       "tourData": {
        ///         "tourName": "TestABD",
        ///         "typeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "departureTime": "2023-03-13T09:19:51.035Z",
        ///         "arrivalTime": "2023-03-13T09:19:51.035Z",
        ///         "price": 1000000,
        ///         "seatsNumber": 50,
        ///         "timeLimit": 360,
        ///         "firstCharge": "30%",
        ///         "secondChargeTime": "2023-03-15",
        ///         "visaPrice": 500000,
        ///         "privateRoomPrice": 200000,
        ///         "adtprice": 100000,
        ///         "chdprice": 200000,
        ///         "infprice": 300000,
        ///         "departureLocationCode": "HN",
        ///         "isPrivateTour": true,
        ///         "timeDesc": "5 ngày - 6 đêm",
        ///         "vehicleDesc": "Ô tô",
        ///         "destinationDesc": "6 điểm đến",
        ///         "idealTimeDesc": "Quah năm",
        ///         "targetDesc": "Vui là chính",
        ///         "specialOfferDesc": "80% discount. Mại dô"
        ///       },
        ///       "tourDetail": {
        ///         "tourDetailId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "dayNumber": 0,
        ///         "description": "string"
        ///       },
        ///       "tourImage": {
        ///         "imageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "fileName": "string",
        ///         "imageType": "string"
        ///       },
        ///       "tourDestination": {
        ///         "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "destinationCode": "string"
        ///       }
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("CreateNew")]
        public CommonResponse<ITour> CreateNew(TourCreateRequest request)
        {
            LoginModels._data UserData = new ApiBase().GetLoginData(Request);
            return svc.Create(request, UserData.User.UserId,UserData.Partner.PartnerCode);
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
        ///     "Authorization":"Bearer "+ Token lấy từ API login
        /// II, Thẻ body - raw - đổi text thành Json
        /// 
        /// III, Json mẫu
        /// 
        ///     {
        ///       "TourId": "422c7571-b86f-4c2b-aa50-27ca04ae451c",
        ///       "tourData": {
        ///         "tourName": "TestABD",
        ///         "typeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "departureTime": "2023-03-13T09:19:51.035Z",
        ///         "arrivalTime": "2023-03-13T09:19:51.035Z",
        ///         "price": 1000000,
        ///         "seatsNumber": 50,
        ///         "timeLimit": 360,
        ///         "firstCharge": "30%",
        ///         "secondChargeTime": "2023-03-15",
        ///         "visaPrice": 500000,
        ///         "privateRoomPrice": 200000,
        ///         "adtprice": 100000,
        ///         "chdprice": 200000,
        ///         "infprice": 300000,
        ///         "departureLocationCode": "HN",
        ///         "isPrivateTour": true,
        ///         "timeDesc": "5 ngày - 6 đêm",
        ///         "vehicleDesc": "Ô tô",
        ///         "destinationDesc": "6 điểm đến",
        ///         "idealTimeDesc": "Quah năm",
        ///         "targetDesc": "Vui là chính",
        ///         "specialOfferDesc": "80% discount. Mại dô"
        ///       },
        ///       "tourDetail": {
        ///         "tourDetailId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "dayNumber": 0,
        ///         "description": "string"
        ///       },
        ///       "tourImage": {
        ///         "imageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "fileName": "string",
        ///         "imageType": "string"
        ///       },
        ///       "tourDestination": {
        ///         "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        ///         "destinationCode": "string"
        ///       }
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
    [HttpPost]
        [Authorize]
        [Route("Update")]
        public CommonResponse<ITour> Update(TourUpdateRequest request)
        {
            LoginModels._data UserData = new ApiBase().GetLoginData(Request);
            return svc.Update(request,UserData.User.UserId, UserData.Partner.PartnerCode);
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
        ///       "TourId": "422c7571-b86f-4c2b-aa50-27ca04ae451c"
        ///     }
        ///
        /// IV, Note
        /// 
        /// 
        /// </remarks>
        [HttpPost]
        [Authorize]
        [Route("Delete")]
        public CommonResponse Delete(ByIdRequest request)
        {
            return svc.Delete(request);
        }
    }
}
