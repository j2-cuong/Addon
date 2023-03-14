using Addon.Core.Entities;
using AddOn.Models.Responses;
using static AddOn.Models.Requests.ITourRequest;

namespace Addon.API.Logic
{
    public interface ITourServices
    {
        CommonResponse<List<ITour>> GetAll(GetByPartnerCode request);
        CommonResponse<List<ITour>> SearchByName(SearchByName request);
        CommonResponse<ITour> GetTourById(ByIdRequest request);
        CommonResponse<ITour> Create(TourCreateRequest request, string userId, string PartnerCode);
        CommonResponse<ITour> Update(TourUpdateRequest request, string userId, string PartnerCode);
        CommonResponse Delete(ByIdRequest request);
    }
}
