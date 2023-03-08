using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AddOn.Models.ResData
{
    public class GetDeposit
    {
        public string? Code { get; set; }
        public string? Message { get; set; }
        public _data? Data { get; set; }
        public class _data
        {
            public string? PartnerCode { get; set; }
            public decimal DepositAmount { get; set; }
            public bool DepositTour { get; set; }
            public bool DepositHotel { get; set; }
        }
    }
    public class LoginKey
    {
        public string? Code { get; set; }
        public string? Message { get; set; }
        public string? Data { get; set; }
    }
    public class _partner
    {
        public string? ParentCode { get; set; }
        public string? PartnerCode { get; set; }
        public int PartnerLevel { get; set; }
        public string? PartnerName { get; set; }
        public string? Email { get; set; }
        public bool IsOwner { get; set; }
        public bool TourOperator { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
    public class _user
    {
        public string? Username { get; set; }
        public string? DisplayName { get; set; }
        public string? UserRole { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
    }
    public class LoginModels
    {
        public string? Code { get; set; }
        public string? Message { get; set; }
        public _data? Data { get; set; }
        public class _data
        {
            public _partner? Partner { get; set; }
            public _user? User { get; set; }
        }
    }
    public class ResToken
    {
        public _partner? Partner { get; set; }
        public _user? User { get; set; }
        public string? Token { get; set; }
    }
}
