export const API_CODE_RESPONSE = {
    SUCCESS: 0,
    ERROR: 999
} as const

export const API_MESSAGE_RESPONSE = {
    SUCCESS: "Thành công.",
    SIGNIN_NOT_FOUND: "Signin not found!"
} as const

export const MESSAGE_MODAL_VI = {
    //login message
    LOGIN_SUCCESS : 'Đăng nhập thành công!',
    LOGIN_FAIL : 'Đăng nhập thất bại!',
    SIGNIN_NOT_FOUND: 'Sai thông tin đăng nhập!',

    //page message
    PAGE_NOT_FOUND : 'Không tìm thấy trang!',
} as const