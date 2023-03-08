using AddOn.Models.ResData;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core.Authorize
{
    public class Token
    {
        public static string Secret = "C19DC594483209615BD5F73F5235C3B35CEE1A15FD7A95AAD42DA04BAA9B587F";
        public string GenerateToken(LoginModels._data data)
        {
            byte[]? key = Convert.FromBase64String(Secret);
            SymmetricSecurityKey? securityKey = new SymmetricSecurityKey(key);
            SecurityTokenDescriptor? descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {
                      new Claim("UserData", JsonConvert.SerializeObject(data.User)),
                      new Claim("PartnerData", JsonConvert.SerializeObject(data.Partner))}),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = new SigningCredentials(securityKey,
                SecurityAlgorithms.HmacSha256Signature)
            };

            JwtSecurityTokenHandler? handler = new JwtSecurityTokenHandler();
            JwtSecurityToken? token = handler.CreateJwtSecurityToken(descriptor);
            return handler.WriteToken(token);
        }
        public static ClaimsPrincipal GetPrincipal(string? token)
        {
            try
            {
                JwtSecurityTokenHandler? tokenHandler = new JwtSecurityTokenHandler();
                JwtSecurityToken? jwtToken = (JwtSecurityToken)tokenHandler.ReadToken(token);
                if (jwtToken == null)
                    return null;
                byte[] key = Convert.FromBase64String(Secret);
                TokenValidationParameters? parameters = new TokenValidationParameters()
                {
                    RequireExpirationTime = true,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(key)
                };
                SecurityToken? securityToken;
                ClaimsPrincipal? principal = tokenHandler.ValidateToken(token,
                      parameters, out securityToken);
                return principal;
            }
            catch
            {
                return null;
            }
        }
        public static string? ValidateToken(string token)
        {
            string? username = null;
            ClaimsPrincipal principal = GetPrincipal(token);
            if (principal == null)
                return null;
            ClaimsIdentity? identity = null;
            try
            {
                identity = (ClaimsIdentity)principal.Identity;
            }
            catch (NullReferenceException)
            {
                return null;
            }
            Claim? usernameClaim = identity?.FindFirst(ClaimTypes.Name);
            username = usernameClaim?.Value;
            return username;
        }
    }
}
