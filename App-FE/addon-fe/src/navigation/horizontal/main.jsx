import {
    Category,  PaperPlus,CloseSquare,
    Discount,User,Paper,
    InfoSquare,Password,Unlock,
    Bookmark,Message,Calendar, 
    People, Buy,Filter2, 
    TicketStar, Discovery, Danger
} from "react-iconly";
const main = [
    {
        header: "Trang chủ",
        id: "dashboard",
        title: "Dashboards",
        navLink: "/index"
    },
    {
        header: "Danh mục",
        subMenu: [
            // Error Pages
            {
                id: "error-404",
                title: "404",
                icon: <CloseSquare set="curved" className="remix-icon" />,
                navLink: "/pages/error-404",
            },
            {
                id: "error-403",
                title: "403",
                icon: <CloseSquare set="curved" className="remix-icon" />,
                navLink: "/pages/error-403",
            },
            {
                id: "error-500",
                title: "500",
                icon: <CloseSquare set="curved" className="remix-icon" />,
                navLink: "/pages/error-500",
            },
            {
                id: "error-503",
                title: "503",
                icon: <CloseSquare set="curved" className="remix-icon" />,
                navLink: "/pages/error-503",
            },
            {
                id: "error-502",
                title: "502",
                icon: <CloseSquare set="curved" className="remix-icon" />,
                navLink: "/pages/error-502",
            },
            {
                id: "maintenance",
                title: "Maintenance",
                icon: <CloseSquare set="curved" className="remix-icon" />,
                navLink: "/pages/maintenance",
            },
            {
                id: "comming-soon",
                title: "Coming Soon",
                icon: <CloseSquare set="curved" className="remix-icon" />,
                navLink: "/pages/coming-soon",
            },


            // 
            {
                id: "pricing",
                title: "Pricing",
                icon: <Discount set="curved" className="remix-icon" />,
                navLink: "/pages/pricing",
            },

            // Profile Page
            {
                id: "profile-personel-information",
                title: "Personel Information",
                icon: <User set="curved" className="remix-icon" />,
                navLink: "/pages/profile/personel-information",
            },
            {
                id: "profile-notifications",
                title: "Notifications",
                icon: <User set="curved" className="remix-icon" />,
                navLink: "/pages/profile/notifications",
            },
            {
                id: "profile-activity",
                title: "Activity Monitor",
                icon: <User set="curved" className="remix-icon" />,
                navLink: "/pages/profile/activity",
            },
            {
                id: "profile-security",
                title: "Security Settings",
                icon: <User set="curved" className="remix-icon" />,
                navLink: "/pages/profile/security",
            },
            {
                id: "profile-password-change",
                title: "Password Change",
                icon: <User set="curved" className="remix-icon" />,
                navLink: "/pages/profile/password-change",
            },
            {
                id: "profile-connect-with-social",
                title: "Connect with Social",
                icon: <User set="curved" className="remix-icon" />,
                navLink: "/pages/profile/connect-with-social",
            },

            {
                id: "invoice",
                title: "Invoice",
                icon: <Paper set="curved" className="remix-icon" />,
                navLink: "/pages/invoice",
            },
            {
                id: "faq",
                title: "FAQ",
                icon: <InfoSquare set="curved" className="remix-icon" />,
                navLink: "/pages/faq",
            },
            {
                id: "knowledge-base",
                title: "Knowledge Base",
                icon: <Bookmark set="curved" className="remix-icon" />,
                children: [
                    {
                        id: "knowledge-base-1",
                        title: "Knowledge Base 1",
                        navLink: "/pages/knowledge-base/knowledge-base-1",
                    },
                    {
                        id: "knowledge-base-2",
                        title: "Knowledge Base 2",
                        navLink: "/pages/knowledge-base/knowledge-base-2",
                    },
                ],
            },
            {
                id: "blank-page",
                title: "Blank Page",
                icon: <PaperPlus set="curved" className="remix-icon" />,
                navLink: "/pages/blank-page",
            },

            // Authen 

            {
                id: "login-page",
                title: "Login Page",
                icon: <Unlock set="curved" className="remix-icon" />,
                navLink: "/pages/authentication/login",
            },
            {
                id: "register-page",
                title: "Register Page",
                icon: <Unlock set="curved" className="remix-icon" />,
                navLink: "/pages/authentication/register",
            },
            {
                id: "recover-password",
                title: "Receover Password",
                icon: <Unlock set="curved" className="remix-icon" />,
                navLink: "/pages/authentication/recover-password",
            },
            {
                id: "reset-password",
                title: "Reset Password",
                icon: <Unlock set="curved" className="remix-icon" />,
                navLink: "/pages/authentication/reset-password",
            },


            // Lock Screen
            {
                id: "welcome",
                title: "Welcome",
                icon: <Password set="curved" className="remix-icon" />,
                navLink: "/pages/welcome",
            },
            {
                id: "password-is-changed",
                title: "Password Is Changed",
                icon: <Password set="curved" className="remix-icon" />,
                navLink: "/pages/password-is-changed",
            },
            {
                id: "deactivated",
                title: "Deactivated",
                icon: <Password set="curved" className="remix-icon" />,
                navLink: "/pages/deactivated",
            },
            {
                id: "lock",
                title: "Lock",
                icon: <Password set="curved" className="remix-icon" />,
                navLink: "/pages/lock",
            },


            // General

            {
                id: "style-guide",
                title: "Style Guide",
                icon: <Category set="curved" className="remix-icon" />,
                navLink: "/components/general/style-guide",
            },
            {
                id: "buttons",
                title: "Buttons",
                icon: <Category set="curved" className="remix-icon" />,
                navLink: "/components/general/buttons",
            },
            {
                id: "icons",
                title: "Icons",
                icon: <Category set="curved" className="remix-icon" />,
                navLink: "/components/general/icons",
            },

            // Navigation
            {
                id: "breadcrumb",
                title: "Breadcrumbs",
                icon: <Discovery set="curved" className="remix-icon" />,
                navLink: "/components/navigation/breadcrumb",
            },
            {
                id: "dropdown",
                title: "Dropdown",
                icon: <Discovery set="curved" className="remix-icon" />,
                navLink: "/components/navigation/dropdown",
            },
            {
                id: "menu",
                title: "Menu",
                icon: <Discovery set="curved" className="remix-icon" />,
                navLink: "/components/navigation/menu",
            },
            {
                id: "pagination",
                title: "Pagination",
                icon: <Discovery set="curved" className="remix-icon" />,
                navLink: "/components/navigation/pagination",
            },
            {
                id: "steps",
                title: "Steps",
                icon: <Discovery set="curved" className="remix-icon" />,
                navLink: "/components/navigation/steps",
            },

            //Data Entry
            {
                id: "checkbox",
                title: "Checkbox",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/checkbox",
            },
            {
                id: "datepicker",
                title: "DatePicker",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/datepicker",
            },
            {
                id: "form",
                title: "Form",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/form",
            },
            {
                id: "inputs",
                title: "Inputs",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/inputs",
            },
            {
                id: "input-number",
                title: "InputNumber",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/input-number",
            },
            {
                id: "radio",
                title: "Radio",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/radio",
            },
            {
                id: "rate",
                title: "Rate",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/rate",
            },
            {
                id: "select",
                title: "Select",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/select",
            },
            {
                id: "slider",
                title: "Slider",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/slider",
            },
            {
                id: "switch",
                title: "Switch",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/switch",
            },
            {
                id: "upload",
                title: "Upload",
                icon: <Filter2 set="curved" className="remix-icon" />,
                navLink: "/components/data-entry/upload",
            },
            //Data Display
            {
                id: "avatar",
                title: "Avatar",
                icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/avatar",
            },
            {
                id: "badge",
                title: "Badge",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/badge",
            },
            {
                id: "calendar",
                title: "Calendar",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/calendar",
            },
            {
                id: "card",
                title: "Card",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/card",
            },
            {
                id: "collapse",
                title: "Collapse",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/collapse",
            },
            {
                id: "comment",
                title: "Comment",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/comment",
            },
            {
                id: "empty",
                title: "Empty",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/empty",
            },
            {
                id: "list",
                title: "List",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/list",
            },
            {
                id: "popover",
                title: "Popover",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/popover",
            },
            {
                id: "table",
                title: "Table",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/table",
            },
            {
                id: "tabs",
                title: "Tabs",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/tabs",
            },
            {
                id: "tag",
                title: "Tag",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/tag",
            },
            {
                id: "timeline",
                title: "Timeline",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/timeline",
            },
            {
                id: "tooltip",
                title: "Tooltip",icon: <TicketStar set="curved" className="remix-icon" />,
                navLink: "/components/data-display/tooltip",
            },

            // Feedback
            {
                id: "alert",
                title: "Alert",
                icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/alert",
            },
            {
                id: "drawer",
                title: "Drawer",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/drawer",
            },
            {
                id: "modal",
                title: "Modal",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/modal",
            },
            {
                id: "message",
                title: "Message",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/message",
            },
            {
                id: "notification",
                title: "Notification",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/notification",
            },
            {
                id: "popconfirm",
                title: "Popconfirm",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/popconfirm",
            },
            {
                id: "progress",
                title: "Progress",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/progress",
            },
            {
                id: "result",
                title: "Result",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/result",
            },
            {
                id: "skeleton",
                title: "Skeleton",icon: <Danger set="curved" className="remix-icon" />,
                navLink: "/components/feedback/skeleton",
            },

            {
                id: "apps-calendar",
                title: "Calendar",
                icon: <Calendar set="curved" />,
                navLink: "/apps/calendar",
            },
            {
                id: "contact",
                title: "Contact",
                icon: <People set="curved" />,
                navLink: "/apps/contact",
            },
            //Ecommerce
            {
                id: "shop",
                title: "Shop",
                icon: <Buy set="curved" />,
                navLink: "/apps/ecommerce/shop",
            },
            {
                id: "wishlist",
                title: "Wishlist",
                icon: <Buy set="curved" />,
                navLink: "/apps/ecommerce/wishlist",
            },
            {
                id: "product-detail",
                title: "Product Detail",
                icon: <Buy set="curved" />,
                navLink: "/apps/ecommerce/product-detail/0",
            },
            {
                id: "checkout",
                title: "Checkout",
                icon: <Buy set="curved" />,
                navLink: "/apps/ecommerce/checkout",
            },
        ]
    },
];

export default main