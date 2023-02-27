import { Home, Graph, Document } from "react-iconly";

const main = [
    {
        id: "dashboard",
        title: "Dashboards",
        icon: <Home set="curved" className="remix-icon" />,
        navLink: "/index"
    },
    {
        id: "widgets",
        title: "Danh mục",
        icon: <Graph set="curved" className="remix-icon" />,
        children: [
            {
                id: "error-404",
                title: "404",
                navLink: "/pages/error-404",
            },
            {
                id: "error-403",
                title: "403",
                navLink: "/pages/error-403",
            },
            {
                id: "error-500",
                title: "500",
                navLink: "/pages/error-500",
            },
            {
                id: "error-503",
                title: "503",
                navLink: "/pages/error-503",
            },
            {
                id: "error-502",
                title: "502",
                navLink: "/pages/error-502",
            },
            {
                id: "maintenance",
                title: "Maintenance",
                navLink: "/pages/maintenance",
            },
            {
                id: "comming-soon",
                title: "Coming Soon",
                navLink: "/pages/coming-soon",
            },


            // 
            {
                id: "pricing",
                title: "Pricing",
                navLink: "/pages/pricing",
            },

            // Profile Page
            {
                id: "profile-personel-information",
                title: "Personel Information",
                navLink: "/pages/profile/personel-information",
            },
            {
                id: "profile-notifications",
                title: "Notifications",
                navLink: "/pages/profile/notifications",
            },
            {
                id: "profile-activity",
                title: "Activity Monitor",
                navLink: "/pages/profile/activity",
            },
            {
                id: "profile-security",
                title: "Security Settings",
                navLink: "/pages/profile/security",
            },
            {
                id: "profile-password-change",
                title: "Password Change",
                navLink: "/pages/profile/password-change",
            },
            {
                id: "profile-connect-with-social",
                title: "Connect with Social",
                navLink: "/pages/profile/connect-with-social",
            },

            {
                id: "invoice",
                title: "Invoice",
                navLink: "/pages/invoice",
            },
            {
                id: "faq",
                title: "FAQ",
                navLink: "/pages/faq",
            },
            
            {
                id: "blank-page",
                title: "Blank Page",
                navLink: "/pages/blank-page",
            },

            // Authen 

            {
                id: "login-page",
                title: "Login Page",
                navLink: "/pages/authentication/login",
            },
            {
                id: "register-page",
                title: "Register Page",
                navLink: "/pages/authentication/register",
            },
            {
                id: "recover-password",
                title: "Receover Password",
                navLink: "/pages/authentication/recover-password",
            },
            {
                id: "reset-password",
                title: "Reset Password",
                navLink: "/pages/authentication/reset-password",
            },


            // Lock Screen
            {
                id: "welcome",
                title: "Welcome",
                navLink: "/pages/welcome",
            },
            {
                id: "password-is-changed",
                title: "Password Is Changed",
                navLink: "/pages/password-is-changed",
            },
            {
                id: "deactivated",
                title: "Deactivated",
                navLink: "/pages/deactivated",
            },
            {
                id: "lock",
                title: "Lock",
                navLink: "/pages/lock",
            },


            // General

            {
                id: "style-guide",
                title: "Style Guide",
                navLink: "/components/general/style-guide",
            },
            {
                id: "buttons",
                title: "Buttons",
                navLink: "/components/general/buttons",
            },
            {
                id: "icons",
                title: "Icons",
                navLink: "/components/general/icons",
            },

            // Navigation
            {
                id: "breadcrumb",
                title: "Breadcrumbs",
                navLink: "/components/navigation/breadcrumb",
            },
            {
                id: "dropdown",
                title: "Dropdown",
                navLink: "/components/navigation/dropdown",
            },
            {
                id: "menu",
                title: "Menu",
                navLink: "/components/navigation/menu",
            },
            {
                id: "pagination",
                title: "Pagination",
                navLink: "/components/navigation/pagination",
            },
            {
                id: "steps",
                title: "Steps",
                navLink: "/components/navigation/steps",
            },

            //Data Entry
            {
                id: "checkbox",
                title: "Checkbox",
                navLink: "/components/data-entry/checkbox",
            },
            {
                id: "datepicker",
                title: "DatePicker",
                navLink: "/components/data-entry/datepicker",
            },
            {
                id: "form",
                title: "Form",
                navLink: "/components/data-entry/form",
            },
            {
                id: "inputs",
                title: "Inputs",
                navLink: "/components/data-entry/inputs",
            },
            {
                id: "input-number",
                title: "InputNumber",
                navLink: "/components/data-entry/input-number",
            },
            {
                id: "radio",
                title: "Radio",
                navLink: "/components/data-entry/radio",
            },
            {
                id: "rate",
                title: "Rate",
                navLink: "/components/data-entry/rate",
            },
            {
                id: "select",
                title: "Select",
                navLink: "/components/data-entry/select",
            },
            {
                id: "slider",
                title: "Slider",
                navLink: "/components/data-entry/slider",
            },
            {
                id: "switch",
                title: "Switch",
                navLink: "/components/data-entry/switch",
            },
            {
                id: "upload",
                title: "Upload",
                navLink: "/components/data-entry/upload",
            },
            //Data Display
            {
                id: "avatar",
                title: "Avatar",
                navLink: "/components/data-display/avatar",
            },
            {
                id: "badge",
                title: "Badge",
				navLink: "/components/data-display/badge",
            },
            {
                id: "calendar",
                title: "Calendar",
                navLink: "/components/data-display/calendar",
            },
            {
                id: "card",
                title: "Card",
                navLink: "/components/data-display/card",
            },
            {
                id: "collapse",
                title: "Collapse",
                navLink: "/components/data-display/collapse",
            },
            {
                id: "comment",
                title: "Comment",
                navLink: "/components/data-display/comment",
            },
            {
                id: "empty",
                title: "Empty",
                navLink: "/components/data-display/empty",
            },
            {
                id: "list",
                title: "List",
                navLink: "/components/data-display/list",
            },
            {
                id: "popover",
                title: "Popover",
                navLink: "/components/data-display/popover",
            },
            {
                id: "table",
                title: "Table",
                navLink: "/components/data-display/table",
            },
            {
                id: "tabs",
                title: "Tabs",
                navLink: "/components/data-display/tabs",
            },
            {
                id: "tag",
                title: "Tag",
                navLink: "/components/data-display/tag",
            },
            {
                id: "timeline",
                title: "Timeline",
                navLink: "/components/data-display/timeline",
            },
            {
                id: "tooltip",
                title: "Tooltip",
                navLink: "/components/data-display/tooltip",
            },

            // Feedback
            {
                id: "alert",
                title: "Alert",
                navLink: "/components/feedback/alert",
            },
            {
                id: "drawer",
                title: "Drawer",
                navLink: "/components/feedback/drawer",
            },
            {
                id: "modal",
                title: "Modal",
                navLink: "/components/feedback/modal",
            },
            {
                id: "message",
                title: "Message",
                navLink: "/components/feedback/message",
            },
            {
                id: "notification",
                title: "Notification",
                navLink: "/components/feedback/notification",
            },
            {
                id: "popconfirm",
                title: "Popconfirm",
                navLink: "/components/feedback/popconfirm",
            },
            {
                id: "progress",
                title: "Progress",
                navLink: "/components/feedback/progress",
            },
            {
                id: "result",
                title: "Result",
                navLink: "/components/feedback/result",
            },
            {
                id: "skeleton",
                title: "Skeleton",
                navLink: "/components/feedback/skeleton",
            },

            {
                id: "apps-calendar",
                title: "Calendar",
                navLink: "/apps/calendar",
            },
            {
                id: "contact",
                title: "Contact",
                navLink: "/apps/contact",
            },
            //Ecommerce
            {
                id: "shop",
                title: "Shop",
                navLink: "/apps/ecommerce/shop",
            },
            {
                id: "wishlist",
                title: "Wishlist",
                navLink: "/apps/ecommerce/wishlist",
            },
            {
                id: "product-detail",
                title: "Product Detail",
                navLink: "/apps/ecommerce/product-detail/0",
            },
            {
                id: "checkout",
                title: "Checkout",
                navLink: "/apps/ecommerce/checkout",
            },
            
        ],
    },
];

export default main