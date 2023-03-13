using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;

namespace Addon.API.Logic.TourCategory
{
    public interface ITourCategoryServices
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse<CTourCategory> SearchById(GetTourCategoryByIdRequest request);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<CommonResponse<List<CTourCategory>>> SearchByName(GetTourCategoryByNameRequest request);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse<CTourCategory> Create(CTourCategory request); 
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse<CTourCategory> Update(CTourCategory request);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse Delete(GetTourCategoryByIdRequest request);
    }
}
