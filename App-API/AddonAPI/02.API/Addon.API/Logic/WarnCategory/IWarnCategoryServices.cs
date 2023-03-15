using Addon.Core.Entities;
using AddOn.Models;
using AddOn.Models.Requests;
using AddOn.Models.Responses;

namespace Addon.API
{
    public interface IWarnCategoryServices
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse<IWarn> SearchById(Warn request);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<CommonResponse<List<IWarn>>> SearchByName(WarnModel request);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse<IWarn> Create(IWarn request); 
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse<IWarn> Update(IWarn request);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        CommonResponse Delete(Warn request);
    }
}
