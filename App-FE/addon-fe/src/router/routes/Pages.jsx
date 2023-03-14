import { lazy } from "react";

const PagesRoutes = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../../view/home")),
    layout: "HorizontalLayout",
},
  {
    path: "/pages/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/error-page",
    component: lazy(() => import("../../view/pages/error")),
    layout: "FullLayout",
  },
  // {
  //   path: "/pages/san-pham",
  //   component: lazy(() => import("../../view/pages/products")),
  //   layout: "HorizontalLayout",
  // },
  {
    path: "/pages/tai-khoan",
    component: lazy(() => import("../../view/pages/accounts")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/mau-sac",
    component: lazy(() => import("../../view/pages/color")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/kich-thuoc",
    component: lazy(() => import("../../view/pages/size")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/nhom",
    component: lazy(() => import("../../view/pages/group")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/khach-hang-mua",
    component: lazy(() => import("../../view/pages/customer")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/phan-quyen",
    component: lazy(() => import("../../view/pages/permission")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/hang-hoa",
    component: lazy(() => import("../../view/pages/products")),
    layout: "HorizontalLayout",
  },
  {
    path: "/pages/hoa-don",
    component: lazy(() => import("../../view/pages/invoice")),
    layout: "HorizontalLayout",
  },
];

export default PagesRoutes;