using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;

namespace Addon.Core.Interfaces
{
    public interface ILoginServices
    {
        Task<Response<ResToken>> LoginEcoSvc(LoginEcoRequest request);
        Task<CommonResponse<string>> CreateKeyLogin(LoginEcoRequest request);
        Task<CommonResponse<ResToken>> AuthenKey(AuthenRequest request);
        Task<CommonResponse<GetDeposit._data>> GetDeposit(GetDepositRequest request);
    }
}
