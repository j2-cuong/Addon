using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;

namespace Addon.API.Logic.TourDetail
{
    public interface ITourDetailServices
    {
        Task<CommonResponse<ITourDetail>> GetById(TourDetail_GetById_Request request);
        Task<CommonResponse<List<ITourDetail>>> GetByTourId(TourDetail_GetByTourId_Request request);
        CommonResponse<List<ITourDetail>> Create(TourDetail_Create_Request request);
        CommonResponse<ITourDetail> Delete(TourDetail_Delete_Request request);
        public CommonResponse<List<ITourDetail>> Update(TourDetail_Create_Request request);
    }
}
