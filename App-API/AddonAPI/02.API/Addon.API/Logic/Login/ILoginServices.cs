using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;

namespace Addon.Core.Interfaces
{
    public interface ILoginServices
    {
        Task<CommonResponse<LoginModels._data>> LoginEcoSvc(LoginEcoRequest request);
        Task<CommonResponse<string>> CreateKeyLogin(LoginEcoRequest request);
        Task<CommonResponse<LoginModels._data>> AuthenKey(AuthenRequest request);
        Task<CommonResponse<GetDeposit._data>> GetDeposit(GetDepositRequest request);
    }
}
