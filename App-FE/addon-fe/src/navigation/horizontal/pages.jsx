import {
    Category, CloseSquare, Image2, PaperPlus, TwoUsers
} from "react-iconly";

const pages = [
    {
        header: "Trang chủ",
        subMenu: [
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
        ]
    },
    {
        header:"Danh mục sản phẩm",
        subMenu:[
            {
                id: "tai-khoan",
                title: "Danh mục tài khoản",
                icon: <Category set="curved" className="remix-icon" />,
                navLink: "/pages/tai-khoan",
            },
            {
                id: "mau-sac",
                title: "Danh mục màu Sắc",
                icon: <Category set="curved" className="remix-icon" />,
                navLink: "/pages/mau-sac",
            },
            {
                id: "hang-hoa",
                title: "Danh mục hàng hóa",
                icon: <Category set="curved" className="remix-icon" />,
                navLink: "/pages/hang-hoa",
            },
            {
                id: "hoa-don",
                title: "Danh mục Hóa Đơn",
                icon: <Category set="curved" className="remix-icon" />,
                navLink: "/pages/hoa-don",
            },
            {
                id: "khach-mua",
                title: "Khách hàng mua",
                icon: <TwoUsers set="curved" className="remix-icon" />,
                navLink: "/pages/khach-hang-mua",
            },
            {
                id: "group",
                title: "Danh mục nhóm",
                icon: <Image2 set="curved" className="remix-icon" />,
                navLink: "/pages/nhom",
            },   {
                id: "kich-thuoc",
                title: "Danh mục kích thước",
                icon: <Image2 set="curved" className="remix-icon" />,
                navLink: "/pages/kich-thuoc",
            },
            {
                id: "phan-quyen",
                title: "Danh mục phân quyền",
                icon: <Image2 set="curved" className="remix-icon" />,
                navLink: "/pages/phan-quyen",
            },
        ]
    }
];

export default pages