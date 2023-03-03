import {
    Category, CloseSquare, PaperPlus
} from "react-iconly";
const pages = [
    {
        header: "Trang chủ",
    },
    {
        id: "blank-page",
        title: "Blank Page",
        icon: <PaperPlus set="curved" className="remix-icon" />,
        navLink: "/pages/blank-page",
    },
    {
        id: "errors",
        title: "Error Pages",
        icon: <CloseSquare set="curved" className="remix-icon" />,
        children: [
            {
                id: "error-page",
                title: "404",
                navLink: "/pages/error-page",
            },
        ],
    },
    {
        id:"category",
        title:"Danh mục sản phẩm",
        icon: <Category set="curved" className="remix-icon" />,
        children:[
            {
                id: "tai-khoan",
                title: "Danh mục tài khoản",
                navLink: "/pages/tai-khoan",
            },
            {
                id: "mau-sac",
                title: "Danh mục màu Sắc",
                navLink: "/pages/mau-sac",
            },
            {
                id: "hang-hoa",
                title: "Danh mục hàng hóa",
                navLink: "/pages/hang-hoa",
            },
            {
                id: "hoa-don",
                title: "Danh mục Hóa đơn",
                navLink: "/pages/hoa-don",
            },
            {
                id: "khach-mua",
                title: "Khách hàng mua",
                navLink: "/pages/khach-hang-mua",
            },
            {
                id: "group",
                title: "Danh mục nhóm",
                navLink: "/pages/nhom",
            },   {
                id: "kich-thuoc",
                title: "Danh mục kích thước",
                navLink: "/pages/kich-thuoc",
            },
            {
                id: "phan-quyen",
                title: "Danh mục phân quyền",
                navLink: "/pages/phan-quyen",
            },
        ]
    }
];

export default pages