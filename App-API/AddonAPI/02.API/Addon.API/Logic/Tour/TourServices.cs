using Addon.Core.Entities;
using AddOn.Models.Responses;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Diagnostics.Metrics;
using System.Net;
using static AddOn.Models.Requests.ITourRequest;

namespace Addon.API
{
    /// <summary>
    /// 
    /// </summary>
    public class TourServices : ITourServices
    {
        AddonDBContext context = new AddonDBContext();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<List<ITour>> GetAll(GetByPartnerCode request)
        {
            CommonResponse<List<ITour>> res = new CommonResponse<List<ITour>>();
            try
            {
                if (string.IsNullOrEmpty(request.PartnerCode))
                    res = StaticResult.MissingError<List<ITour>>("PartnerCode.");
                else
                {
                    List<ITour> list = context.ITours.Where(x =>x.PartnerCode== request.PartnerCode||x.IsPrivateTour == false).OrderBy(x => x.DepartureTime).ToList();
                    if (list.Count == 0)
                        res = StaticResult.NotFoundError<List<ITour>>();
                    else
                        res = StaticResult.Success<List<ITour>>(list);
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<List<ITour>>(ex.Message);
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<List<ITour>> SearchByName(SearchByName request)
        {
            if (string.IsNullOrEmpty(request.PartnerCode))
                return StaticResult.MissingError<List<ITour>>("PartnerCode.");
            CommonResponse<List<ITour>> res = new CommonResponse<List<ITour>>();
            try
            {
                if (string.IsNullOrEmpty(request.Name))
                    res = StaticResult.MissingError<List<ITour>>("Tên cần tìm(Name)");
                else
                {
                    List<ITour> list = context.ITours.Where(x => x.TourName.Contains(request.Name) && (x.PartnerCode == request.PartnerCode || x.IsPrivateTour == false)).OrderBy(x => x.DepartureTime).ToList();
                    if (list.Count == 0)
                        res = StaticResult.NotFoundError<List<ITour>>();
                    else
                        res = StaticResult.Success<List<ITour>>(list);
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<List<ITour>>(ex.Message);
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<ITour> GetTourById(ByIdRequest request)
        {
            if (string.IsNullOrEmpty(request.PartnerCode))
                return StaticResult.MissingError<ITour>("PartnerCode.");
            CommonResponse<ITour> res = new CommonResponse<ITour>();
            try
            {
                if (string.IsNullOrEmpty(request.TourId))
                    res = StaticResult.MissingError<ITour>("TourId");
                else
                {
                    ITour data = context.ITours.Where(x => x.TourId == Guid.Parse(request.TourId) && (x.PartnerCode == request.PartnerCode|| x.IsPrivateTour == false )).FirstOrDefault();
                    if (data == null)
                        res = StaticResult.NotExistError<ITour>();
                    else
                        res = StaticResult.Success<ITour>(data);
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<ITour>(ex.Message);
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<ITour> Create(TourCreateRequest request, string UserId, string PartnerCode)
        {
            TourData Master = request.tourData;

            if (Master.TypeId == Guid.Empty)
                return StaticResult.MissingError<ITour>("Loại Tour(TypeId)");

            if (Master.DepartureTime == null || string.IsNullOrEmpty(Master.DepartureLocationCode))
                return StaticResult.MissingError<ITour>("Thời gian xuất phát (DepartureTime) hoặc địa điểm xuất phát (DepartureLocationCode)");

            if (Master.SeatsNumber == null)
                return StaticResult.MissingError<ITour>("Số chỗ có thể đặt(SeatsNumber)");

            if (Master.FirstCharge == null)
                return StaticResult.MissingError<ITour>("Tỷ lệ thanh toán lần 1 (FirstCharge)");
            try
            {
                Guid Id = Guid.NewGuid();
                CommonResponse<ITour> res = new CommonResponse<ITour>();
                Master.TourId = Id;
                Master.CreatedBy = UserId;
                Master.CreatedTime = DateTime.Now;
                Master.PartnerCode = PartnerCode;
                ITour tourData = JsonConvert.DeserializeObject<ITour>(JsonConvert.SerializeObject(Master));
                context.ITours.Add(tourData);

                //Thêm detail

                // Thêm Destination

                // Thêm Image

                res = StaticResult.Success<ITour>(tourData);
                context.SaveChanges();
                return res;
            }
            catch (Exception ex)
            {
                return StaticResult.Error<ITour>(ex.Message);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<ITour> Update(TourUpdateRequest request, string UserId, string PartnerCode)
        {
            TourData Master = request.tourData;
            if (string.IsNullOrEmpty(request.TourId))
                return StaticResult.MissingError<ITour>("id Tour cần update (TourId)");

            if (Master.TypeId == Guid.Empty)
                return StaticResult.MissingError<ITour>("Loại Tour(TypeId)");

            if (Master.DepartureTime == null || string.IsNullOrEmpty(Master.DepartureLocationCode))
                return StaticResult.MissingError<ITour>("Thời gian xuất phát (DepartureTime) hoặc địa điểm xuất phát (DepartureLocationCode)");

            if (Master.SeatsNumber == null)
                return StaticResult.MissingError<ITour>("Số chỗ có thể đặt(SeatsNumber)");

            if (Master.FirstCharge == null)
                return StaticResult.MissingError<ITour>("Tỷ lệ thanh toán lần 1 (FirstCharge)");

            try
            {
                CommonResponse<ITour> res = new CommonResponse<ITour>();
                ITour Exist = context.ITours.Where(x => x.TourId == Guid.Parse(request.TourId) && x.PartnerCode == PartnerCode).AsNoTracking().First();
                if (Exist == null)
                    res = StaticResult.NotFoundError<ITour>();
                else
                {
                    Guid.TryParse(request.TourId,out Guid Id);
                    if (Id == Guid.Empty)
                        return StaticResult.Error<ITour>("Sai định dạng id");
                    Master.TourId = Id;
                    Master.CreatedBy = Exist.CreatedBy;
                    Master.CreatedTime = Exist.CreatedTime;
                    Master.UpdatedBy = UserId;
                    Master.UpdatedTime = DateTime.Now;
                    Master.PartnerCode = PartnerCode;
                    ITour tourData = JsonConvert.DeserializeObject<ITour>(JsonConvert.SerializeObject(Master));
                    context.ITours.Update(tourData);
                    // Update Detail

                    // Update Destination

                    // Update Image

                    context.SaveChanges();
                    res = StaticResult.Success<ITour>(tourData);
                }
                return res;
            }
            catch (Exception ex)
            {
                return StaticResult.Error<ITour>(ex.Message);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse Delete(ByIdRequest request)
        {
            CommonResponse res = new CommonResponse();
            try
            {
                if (string.IsNullOrEmpty(request.TourId))
                    return StaticResult.MissingError("TourId");
                ITour exist = context.ITours.Where(x => x.TourId == Guid.Parse(request.TourId)).AsNoTracking().First();
                if (exist == null)
                    res = StaticResult.NotExistError();
                else
                {
                    context.ITours.Remove(exist);
                    context.SaveChanges();
                    res = StaticResult.Success();
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error(ex.Message);
            }
            return res;
        }
    }
}
