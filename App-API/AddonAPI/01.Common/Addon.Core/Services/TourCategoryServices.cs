using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static AddOn.Models.Responses.StaticResult;

namespace Addon.Core.Services
{
    public class TourCategoryServices
    {
        AddonDBContext context = new AddonDBContext();
        public async Task<CommonResponse<CTourCategory>> GetById(GetTourCategoryByIdRequest request)
        {
            CommonResponse<CTourCategory> res = new CommonResponse<CTourCategory>();
            if (string.IsNullOrEmpty(request.id))
                res = StaticResult.Error<CTourCategory>("Thiếu thông tin id", ErrorCode.Missing.ToString());

            return res;
        }    

        public async Task<CommonResponse<CTourCategory>> Create(CTourCategory request)
        {
            CommonResponse<CTourCategory> res = new CommonResponse<CTourCategory>();
            if(request.CategoryId == Guid.Empty)
                request.CategoryId = Guid.NewGuid();

            return res;
        }
    }
}
