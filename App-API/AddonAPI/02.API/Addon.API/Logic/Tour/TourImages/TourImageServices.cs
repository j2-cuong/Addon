
using Addon.Core.Entities;
using AddOn.Models.Responses;
using System.Configuration;

namespace Addon.API 
{ 
    public class TourImageServices
    {
        private async Task<string> UploadImageAsync(IFormFile image)
        {
            byte[] imageContents;

            using (var memoryStream = new MemoryStream())
            {
                await image.CopyToAsync(memoryStream);
                imageContents = memoryStream.ToArray();
            }

            string imagePath = "C:\\MyFolder\\" + image.FileName;

            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                fileStream.Write(imageContents, 0, imageContents.Length);
            }

            return imagePath;
        }
    }
}
