using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using Microsoft.EntityFrameworkCore;

namespace Addon.API.Logic.TourDetail
{
    public class TourDetailServices
    {
        AddonDBContext context = new AddonDBContext();
        public async Task<CommonResponse<ITourDetail>> GetById(TourDetail_GetById_Request request)
        {
            CommonResponse<ITourDetail> res = new CommonResponse<ITourDetail>();
            if (string.IsNullOrEmpty(request.TourDetailId))
                res = StaticResult.MissingError<ITourDetail>("Id chi tiết Tour(TourDetailId)");
            else if(string.IsNullOrEmpty(request.PartnerCode))
                res = StaticResult.MissingError<ITourDetail>("PartnerCode");
            else
            {
                try
                {
                    string query = $@"SELECT D.* FROM I_TourDetail D
                                    LEFT JOIN I_Tour AS T ON
                                    T.TourId = D.TourId
                                    WHERE (T.PartnerCode = '{request.PartnerCode}' OR T.IsPrivateTour = 1)
                                    AND D.TourDetailId = '{request.TourDetailId}'";
                    ITourDetail data = context.ITourDetails.FromSqlRaw(query).FirstOrDefault();
                    if (data == null)
                        res = StaticResult.NotExistError<ITourDetail>();
                    else
                        res = StaticResult.Success<ITourDetail>(data);
                }
                catch (Exception ex)
                {
                    res = StaticResult.Error<ITourDetail>(ex.Message);
                }
            }
            return res;
        }
        public async Task<CommonResponse<List<ITourDetail>>> GetByTourId(TourDetail_GetByTourId_Request request)
        {
            CommonResponse<List<ITourDetail>> res = new CommonResponse<List<ITourDetail>>();
            if (string.IsNullOrEmpty(request.TourId))
                res = StaticResult.MissingError<List<ITourDetail>>("Id Tour(TourId)");
            else if (string.IsNullOrEmpty(request.PartnerCode))
                res = StaticResult.MissingError<List<ITourDetail>>("PartnerCode");
            else
            {
                try
                {
                    string query = $@"SELECT D.* FROM I_TourDetail D
                                    LEFT JOIN I_Tour AS T ON
                                    T.TourId = D.TourId
                                    WHERE (T.PartnerCode = '{request.PartnerCode}' OR T.IsPrivateTour = 1)
                                    AND T.TourId = '{request.TourId}'";
                    List<ITourDetail> data = context.ITourDetails.FromSqlRaw(query).ToList();
                    if (data.Count == 0)
                        res = StaticResult.NotExistError<List<ITourDetail>>();
                    else
                        res = StaticResult.Success<List<ITourDetail>>(data);
                }
                catch (Exception ex)
                {
                    res = StaticResult.Error<List<ITourDetail>>(ex.Message);
                }
            }
            return res;
        }
    }
}
