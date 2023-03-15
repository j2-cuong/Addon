using Addon.Core.Authorize;
using Addon.Core.Entities;
using AddOn.Models;
using AddOn.Models.Requests;
using AddOn.Models.Responses;
using log4net.Core;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;

namespace Addon.API
{
    /// <summary>
    /// 
    /// </summary>
    public class WarnCategoryServices : IWarnCategoryServices
    {
        AddonDBContext context = new AddonDBContext();
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<IWarn> SearchById(Warn request)
        {
            CommonResponse<IWarn> res = new CommonResponse<IWarn>();
            try
            {
                if (string.IsNullOrEmpty(request.WarnId.ToString()))
                    res = StaticResult.MissingError<IWarn>("WarnId");
                else
                {
                    IWarn? cWarn = context.IWarns.Where(x => x.WarnId == Guid.Parse(request.WarnId)).FirstOrDefault();
                    if (cWarn == null)
                        res = StaticResult.NotFoundError<IWarn>($"danh mục chiết khấu với id: {request.WarnId}");
                    else
                        res = StaticResult.Success<IWarn>(cWarn);
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<IWarn>(ex.Message);
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<CommonResponse<List<IWarn>>> SearchByName(WarnModel request)
        {
            CommonResponse<List<IWarn>> res = new CommonResponse<List<IWarn>>();
            try
            {
                List<IWarn>? cTourList = await context.IWarns.Where(x => x.Title.Contains(request.Title) ||
                                                                                    x.Content.Contains(request.Content)).
                                                                                    ToListAsync<IWarn>();
                if (cTourList.Count == 0)
                    res = StaticResult.NotFoundError<List<IWarn>>($"danh mục chiết khấu với tên: {request.Title}");
                else
                    res = StaticResult.Success<List<IWarn>>(cTourList);
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<List<IWarn>>(ex.Message);
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<IWarn> Create(IWarn request)
        {
            CommonResponse<IWarn> res = new CommonResponse<IWarn>();
            try
            {
                request.WarnId = Guid.NewGuid();
                context.IWarns.Add(request);
                res = StaticResult.Success<IWarn>(request);
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<IWarn>(ex.Message);
            }
            return res;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse<IWarn> Update(IWarn request)
        {
            CommonResponse<IWarn> res = new CommonResponse<IWarn>();
            try
            {
                string i = "0";
                if (request.WarnId == Guid.Empty || string.IsNullOrEmpty(request.WarnId.ToString()))
                    res = StaticResult.MissingError<IWarn>("Id định danh của Chiết khấu (WarnId)");
                else
                {
                    IWarn? exist = context.IWarns.Where(x => x.WarnId == Guid.Parse(request.WarnId.ToString())).FirstOrDefault();

                    if (string.IsNullOrEmpty(request.PartnerCode))
                        i = "1";
                    if (string.IsNullOrEmpty(request.Title))
                        i = "2";
                    if(string.IsNullOrEmpty(request.Content))
                        i = "3";
                    switch (i)
                    {
                        case "0":
                            if (exist == null)
                                res = StaticResult.NotExistError<IWarn>();
                            else
                            {
                                context.IWarns.Update(request);
                                res = StaticResult.Success<IWarn>(request);
                            }
                            break;
                        case "01":
                            res = StaticResult.MissingError<IWarn>("Mã partnerCode (partnerCode)");
                            break;
                        case "02":
                            res = StaticResult.MissingError<IWarn>("Tiêu đề chiết khấu (Title)");
                            break;
                        case "03":
                            res = StaticResult.MissingError<IWarn>("Content chiết khấu (Content)");
                            break;
                        default:
                            res = StaticResult.Error<IWarn>("Có sai sót từ hệ thống. Vui lòng liên hệ quản trị viên.");
                            break;
                    }
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                res = StaticResult.Error<IWarn>(ex.Message);
            }
            return res;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public CommonResponse Delete(Warn request)
        {
            CommonResponse res = new CommonResponse();
            try
            {
                if (string.IsNullOrEmpty(request.WarnId))
                    res = StaticResult.MissingError("id");
                else
                {
                    IWarn? cTour = context.IWarns.Where(x => x.WarnId == Guid.Parse(request.WarnId)).FirstOrDefault();
                    if (cTour == null)
                        res = StaticResult.NotExistError();
                    else
                    {
                        context.IWarns.Remove(cTour);
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
