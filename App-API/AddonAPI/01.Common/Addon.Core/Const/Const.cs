using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Addon.Core
{
    public class ErrorCodes
    {
        public static int RecordIsUsingCode = -2;
        public static int NotFoundCode = -3;
        public static int ServerErrorCode = -4;
        public static int PermissionDuplicateCode = -5;
        public static int IdCannotBeNull = -8;
        public static int NoRow = -9;

    }

    public class ErrorMessage
    {
        public static string RecordIsUsingMessage = "Bản ghi đang được sử dụng !";
        public static string NotFoundMessage = "Không có dữ liệu !";
        public static string ServerErrorMessage = "Server bảo trì để nâng cấp, vui lòng thử lại sau !";
        public static string InvoiceDeleteMessage = "Lỗi, Bạn không có quyền để thực hiện chức năng này !";
        public static string IdCannotBeNull = "Id không được để trống";
        public static string NoRow = "Không tìm thấy dữ liệu tương ứng";
    }

    public class SuccessCode
    {
        public static int CreateCode = 1;
        public static int EditCode = 2;
        public static int LoginCode = 3;
        public static int DeleteCode = 4;
    }

    public class SuccessMessage
    {
        public static string CreateMessage = "Tạo mới thành công";
        public static string EditMessage = "Thay đổi thành công";
        public static string LoginMessage = "Đăng nhập thành công";
        public static string DeleteMessage = "Xóa bản ghi thành công";
    }
}
