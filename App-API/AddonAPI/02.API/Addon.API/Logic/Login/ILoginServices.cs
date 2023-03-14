using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using static Addon.Core.Const.PermissionMode;

namespace Addon.Core.Interfaces
{
    public interface ILoginServices
    {
        Task<LoginResponse<List<NavigationModel>>> LoginEcoSvc(LoginEcoRequest request);
        Task<CommonResponse<string>> CreateKeyLogin(LoginEcoRequest request);
        Task<CommonResponse<ResToken>> AuthenKey(AuthenRequest request);
        Task<CommonResponse<GetDeposit._data>> GetDeposit(GetDepositRequest request);
    }
}
