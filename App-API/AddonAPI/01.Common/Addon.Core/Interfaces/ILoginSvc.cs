using AddOn.Models.Requests;
using AddOn.Models.ResData;
using AddOn.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core.Interfaces
{
    public interface ILoginSvc
    {
        public Task<CommonResponse<LoginModels._data>> LoginEcoSvc(LoginEcoRequest request);
        public Task<CommonResponse<string>> CreateKeyLogin(LoginEcoRequest request);
        public Task<CommonResponse<LoginModels._data>> AuthenKey(AuthenRequest request);
        public Task<CommonResponse<GetDeposit._data>> GetDeposit(GetDepositRequest request);
    }
}
