using Addon.Core.Authorize;
using Addon.Core.Entities;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using log4net.Core;
using Microsoft.EntityFrameworkCore;

namespace Addon.API.Logic.TourCategory
{
    /// <summary>
    /// 
    /// </summary>
    public class TourCategoryServices : ITourCategoryServices
    {
        AddonDBContext context = new AddonDBContext();
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<CTourCategory> SearchById(GetTourCategoryByIdRequest request)
        {
            CommonResponse<CTourCategory> res = new CommonResponse<CTourCategory>();
            try
            {
                if (string.IsNullOrEmpty(request.CategoryId))
                    res = StaticResult.MissingError<CTourCategory>("CategoryId");
                else
                {
                    CTourCategory? cTour = context.CTourCategories.Where(x => x.CategoryId == Guid.Parse(request.CategoryId)).FirstOrDefault();
                    if (cTour == null)
                        res = StaticResult.NotFoundError<CTourCategory>($"danh mục Loại Tour với id: {request.CategoryId}");
                    else
                        res = StaticResult.Success<CTourCategory>(cTour);
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<CTourCategory>(ex.Message);
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<CommonResponse<List<CTourCategory>>> SearchByName(GetTourCategoryByNameRequest request)
        {
            CommonResponse<List<CTourCategory>> res = new CommonResponse<List<CTourCategory>>();
            try
            {
                List<CTourCategory>? cTourList = await context.CTourCategories.Where(x => x.CategoryCode.Contains(request.name) ||
                                                                                    x.CategoryName.Contains(request.name)).
                                                                                    ToListAsync<CTourCategory>();
                if (cTourList.Count == 0)
                    res = StaticResult.NotFoundError<List<CTourCategory>>($"danh mục Loại Tour với tên: {request.name}");
                else
                    res = StaticResult.Success<List<CTourCategory>>(cTourList);
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<List<CTourCategory>>(ex.Message);
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<CTourCategory> Create(CTourCategory request)
        {

            CommonResponse<CTourCategory> res = new CommonResponse<CTourCategory>();
            try
            {
                string i = "0";
                if (request.CategoryId == Guid.Empty || string.IsNullOrEmpty(request.CategoryId.ToString()))
                    request.CategoryId = Guid.NewGuid();

                if (string.IsNullOrEmpty(request.CategoryCode))
                    i += "1";
                if (string.IsNullOrEmpty(request.CategoryName))
                    i += "2";
                switch (i)
                {
                    case "0":
                        context.CTourCategories.Add(request);
                        res = StaticResult.Success<CTourCategory>(request);
                        break;
                    case "01":
                        res = StaticResult.MissingError<CTourCategory>("Mã Loại Tour (CategoryCode)");
                        break;
                    case "02":
                        res = StaticResult.MissingError<CTourCategory>("Tên Loại Tour (CategoryName)");
                        break;
                    case "012":
                        res = StaticResult.MissingError<CTourCategory>("Mã Loại Tour (CategoryCode) và Tên Loại Tour (CategoryName)");
                        break;
                    default:
                        res = StaticResult.Error<CTourCategory>("Có sai sót từ hệ thống. Vui lòng liên hệ quản trị viên.");
                        break;
                }
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<CTourCategory>(ex.Message);
            }

            return res;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<CTourCategory> Update(CTourCategory request)
        {
            CommonResponse<CTourCategory> res = new CommonResponse<CTourCategory>();
            try
            {
                string i = "0";
                if (request.CategoryId == Guid.Empty || string.IsNullOrEmpty(request.CategoryId.ToString()))
                    res = StaticResult.MissingError<CTourCategory>("Id định danh của Loại tour (CategoryId)");
                else
                {
                    if (string.IsNullOrEmpty(request.CategoryCode))
                        i += "1";
                    if (string.IsNullOrEmpty(request.CategoryName))
                        i += "2";
                    switch (i)
                    {
                        case "0":
                            CTourCategory? exist = context.CTourCategories.Where(x => x.CategoryId == Guid.Parse(request.CategoryId.ToString())).AsNoTracking().FirstOrDefault();
                            if (exist == null)
                                res = StaticResult.NotExistError<CTourCategory>();
                            else
                            {
                                context.CTourCategories.Update(request);
                                res = StaticResult.Success<CTourCategory>(request);
                            }
                            break;
                        case "01":
                            res = StaticResult.MissingError<CTourCategory>("Mã Loại Tour (CategoryCode)");
                            break;
                        case "02":
                            res = StaticResult.MissingError<CTourCategory>("Tên Loại Tour (CategoryName)");
                            break;
                        case "012":
                            res = StaticResult.MissingError<CTourCategory>("Mã Loại Tour (CategoryCode) và Tên Loại Tour (CategoryName)");
                            break;
                        default:
                            res = StaticResult.Error<CTourCategory>("Có sai sót từ hệ thống. Vui lòng liên hệ quản trị viên.");
                            break;
                    }
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<CTourCategory>(ex.Message);
            }
            return res;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse Delete(GetTourCategoryByIdRequest request)
        {
            CommonResponse res = new CommonResponse();
            try
            {
                if (string.IsNullOrEmpty(request.CategoryId))
                    res = StaticResult.MissingError("id");
                else
                {
                    CTourCategory? cTour = context.CTourCategories.Where(x => x.CategoryId == Guid.Parse(request.CategoryId)).AsNoTracking().FirstOrDefault();
                    if (cTour == null)
                        res = StaticResult.NotExistError();
                    else
                    {
                        context.CTourCategories.Remove(cTour);
                        res = StaticResult.Success();
                    }
                }
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                res = StaticResult.Error(ex.Message);
            }
            return res;
        }
    }
}
