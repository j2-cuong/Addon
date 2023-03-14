using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using Microsoft.EntityFrameworkCore;

namespace Addon.API.Logic
{
    public class TourDestinationServices
    {
        AddonDBContext context = new AddonDBContext();
        public CommonResponse<List<ITourDestination>> GetAllByTourId(TourDestination_GetByTourId_Request request)
        {
            CommonResponse<List<ITourDestination>> res = new CommonResponse<List<ITourDestination>>();

            try
            {
                if (string.IsNullOrEmpty(request.TourId))
                    res = StaticResult.MissingError<List<ITourDestination>>("TourId");
                else
                {
                    var list = context.ITourDestinations.Where(x => x.TourId == Guid.Parse(request.TourId)).ToList();
                    if (list.Count == 0)
                        res = StaticResult.NotExistError<List<ITourDestination>>();
                    else
                        res = StaticResult.Success<List<ITourDestination>>(list);
                }
            }
            catch (Exception e)
            {
                res = StaticResult.Error<List<ITourDestination>>(e.Message);
            }

            return res;
        }

        public CommonResponse<ITourDestination> GetById(TourDestination_GetById_Request request)
        {
            CommonResponse<ITourDestination> res = new CommonResponse<ITourDestination>();
            try
            {
                if (string.IsNullOrEmpty(request.TourDestinationId))
                    res = StaticResult.MissingError<ITourDestination>("TourDestinationId");
                else
                {
                    var exist = context.ITourDestinations.Where(x => x.Id == Guid.Parse(request.TourDestinationId)).FirstOrDefault();
                    if (exist == null)
                        res = StaticResult.NotExistError<ITourDestination>();
                    else
                        res = StaticResult.Success<ITourDestination>(exist);
                }
            }
            catch (Exception e)
            {
                res = StaticResult.Error<ITourDestination>(e.Message);
            }
            return res;
        }

        public CommonResponse<List<ITourDestination>> GetAllByName(TourDestination_SearchByName_Request request)
        {
            CommonResponse<List<ITourDestination>> res = new CommonResponse<List<ITourDestination>>();

            try
            {
                if(string.IsNullOrEmpty(request.TourId))
                    res = StaticResult.MissingError<List<ITourDestination>>("TourId");
                else if (string.IsNullOrEmpty(request.Name))
                    res = StaticResult.MissingError<List<ITourDestination>>("Name");
                else
                {
                    string query = $@"SELECT IT.*,CD.Name_Vi FROM I_TourDestination IT
                                    LEFT JOIN C_Destination AS CD ON
                                    CD.Code = IT.DestinationCode
                                    WHERE (CD.Name_Vi LIKE '%{request.Name}%'
                                    OR IT.DestinationCode LIKE '%{request.Name}%')
                                    AND IT.TourId = '{request.TourId}'";
                    var list = context.ITourDestinations.FromSqlRaw(query).ToList();
                    if (list.Count == 0)
                        res = StaticResult.NotExistError<List<ITourDestination>>();
                    else
                        res = StaticResult.Success<List<ITourDestination>>(list);
                }
            }
            catch (Exception e)
            {
                res = StaticResult.Error<List<ITourDestination>>(e.Message);
            }

            return res;
        }
    }
}
