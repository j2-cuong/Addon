using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Addon.API.Logic.Tour.TourDetail
{
    public class TourDetailServices : ITourDetailServices
    {
        AddonDBContext context = new AddonDBContext();
        public async Task<CommonResponse<ITourDetail>> GetById(TourDetail_GetById_Request request)
        {
            CommonResponse<ITourDetail> res = new CommonResponse<ITourDetail>();
            if (string.IsNullOrEmpty(request.TourDetailId))
                res = StaticResult.MissingError<ITourDetail>("Id chi tiết Tour(TourDetailId)");
            else if (string.IsNullOrEmpty(request.PartnerCode))
                res = StaticResult.MissingError<ITourDetail>("PartnerCode");
            else
            {
                try
                {
                    string query = $@"SELECT D.* FROM I_TourDetail D
                                    LEFT JOIN I_Tour AS T ON
                                    T.TourId = D.TourId
                                    WHERE (T.PartnerCode = '{request.PartnerCode}' OR T.IsPrivateTour = 0)
                                    AND D.TourDetailId = '{request.TourDetailId}'";
                    ITourDetail data = context.ITourDetails.FromSqlRaw(query).FirstOrDefault();
                    if (data == null)
                        res = StaticResult.NotExistError<ITourDetail>();
                    else
                        res = StaticResult.Success(data);
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
                                    WHERE (T.PartnerCode = '{request.PartnerCode}' OR T.IsPrivateTour = 0)
                                    AND T.TourId = '{request.TourId}'";
                    List<ITourDetail> data = context.ITourDetails.FromSqlRaw(query).ToList();
                    if (data.Count == 0)
                        res = StaticResult.NotExistError<List<ITourDetail>>();
                    else
                        res = StaticResult.Success(data);
                }
                catch (Exception ex)
                {
                    res = StaticResult.Error<List<ITourDetail>>(ex.Message);
                }
            }
            return res;
        }

        public CommonResponse<List<ITourDetail>> Create(TourDetail_Create_Request request)
        {
            CommonResponse<List<ITourDetail>> res = new CommonResponse<List<ITourDetail>>();

            try
            {
                if (string.IsNullOrEmpty(request.TourId))
                    res = StaticResult.MissingError<List<ITourDetail>>("TourId");
                else
                {
                    ITour exist = context.ITours.Where(x => x.TourId == Guid.Parse(request.TourId)).AsNoTracking().FirstOrDefault();
                    if (exist == null)
                        res = StaticResult.NotExistError<List<ITourDetail>>();
                    else
                    {
                        List<ITourDetail> data = new List<ITourDetail>();
                        foreach (TourDetailData item in request.Data)
                        {
                            item.TourId = Guid.Parse(request.TourId);
                            item.TourDetailId = Guid.NewGuid();
                            ITourDetail itemcvt = JsonConvert.DeserializeObject<ITourDetail>(JsonConvert.SerializeObject(item));
                            data.Add(itemcvt);
                        }
                        context.ITourDetails.AddRange(data);
                        context.SaveChanges();
                        res = StaticResult.Success(data);
                    }
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<List<ITourDetail>>(ex.Message);
            }

            return res;
        }

        public CommonResponse<ITourDetail> Delete(TourDetail_Delete_Request request)
        {
            CommonResponse<ITourDetail> res = new CommonResponse<ITourDetail>();
            try
            {
                if (string.IsNullOrEmpty(request.TourId))
                    res = StaticResult.MissingError<ITourDetail>("TourId");
                else
                {
                    List<ITourDetail> exist = context.ITourDetails.Where(x => x.TourId == Guid.Parse(request.TourId)).ToList();
                    if (exist.Count == 0)
                        res = StaticResult.NotExistError<ITourDetail>();
                    else
                    {
                        context.ITourDetails.RemoveRange(exist);
                        context.SaveChanges();
                        res = StaticResult.Success<ITourDetail>(null);
                    }
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<ITourDetail>(ex.Message);
            }
            return res;
        }

        public CommonResponse<List<ITourDetail>> Update(TourDetail_Create_Request request)
        {
            CommonResponse<List<ITourDetail>> res = new CommonResponse<List<ITourDetail>>();

            try
            {
                if (string.IsNullOrEmpty(request.TourId))
                    res = StaticResult.MissingError<List<ITourDetail>>("TourId");
                else
                {
                    List<ITourDetail> exist = context.ITourDetails.Where(x => x.TourId == Guid.Parse(request.TourId)).ToList();
                    if (exist.Count == 0)
                        res = StaticResult.NotExistError<List<ITourDetail>>();
                    else
                    {
                        context.ITourDetails.RemoveRange(exist);
                        List<ITourDetail> data = new List<ITourDetail>();
                        foreach (TourDetailData item in request.Data)
                        {
                            item.TourId = Guid.Parse(request.TourId);
                            item.TourDetailId = Guid.NewGuid();
                            ITourDetail itemcvt = JsonConvert.DeserializeObject<ITourDetail>(JsonConvert.SerializeObject(item));
                            data.Add(itemcvt);
                        }
                        context.ITourDetails.AddRange(data);
                        context.SaveChanges();
                        res = StaticResult.Success(data);
                    }
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<List<ITourDetail>>(ex.Message);
            }

            return res;
        }
    }
}
