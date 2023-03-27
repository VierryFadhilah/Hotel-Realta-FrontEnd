import Menualt from '@/components/icons/menualt';
import Shopping from '@/components/icons/shopping-cart';
import Hotels from '@/components/icons/office-building';
import Money from '@/components/icons/cash';
import User from '@/components/icons/user';
import Folder from '@/components/icons/folder-open';
import Dashboard from '@/components/icons/view-grid';
import Chevron from '@/components/icons/Icon';
import Hr from '../icons/identification';

const listMenu = [
    
    {
        to: "/",
        path: "/",
        icon: Dashboard,
        name: "Dashboard",
    },
    {
        to: "/hotel",
        path: "/hotel",
        icon: Hotels,
        name: "Hotel",
    },
    {
        to: "",
        path: "",
        icon: Hotels,
        name: "Resto"
    },
    {
        to: "#",
        path: "#",
        icon: Shopping,
        name: "Purchasing",
        icon2: Chevron,
        submenu: [
            {
                to: "",
                path: "",
                title: "Vendor",
            },
            {
                to: "",
                path: "",
                title: "Stock",
            },
            {
                to: "",
                path: "",
                title: "Purchasing Order",
            }
        ]
    },
    {
        to: "",
        path: "",
        icon: Money,
        name: "Payment",
        icon2: Chevron,
        submenu: [
            {
                to: "",
                path: "",
                title: "Bank",
            },
            {
                to: "",
                path: "",
                title: "Fintech",
            },
            {
                to: "",
                path: "",
                title: "Top Up",
            },
            {
                to: "",
                path: "",
                title: "Account",
            },
            {
                to: "",
                path: "",
                title: "Transaction",
            }
        ]
    },
    {
        to: "",
        path: "#",
        icon: Hr,
        name: "Human Resource",
        icon2: Chevron,
        submenu: [
            {
                to: "/hr/department",
                path: "/hr/department",
                title: "Vendor",
            },
            {
                to: "/",
                path: "/",
                title: "Stock",
            },
            {
                to: "",
                path: "",
                title: "Purchasing Order",
            }
        ]
    },
    {
        to: "",
        path: "",
        icon: Folder,
        name: "Master",
        icon2: Chevron,
        submenu: [
            {
                to: "",
                path: "",
                title: "Location",
            },
            {
                to: "",
                path: "",
                title: "Policy",
            },
            {
                to: "",
                path: "",
                title: "Category",
            },
            {
                to: "",
                path: "",
                title: "Price",
            },
            {
                to: "",
                path: "",
                title: "Service",
            }
        ]
    },
    {
        to: "",
        path: "",
        icon: User,
        name: "User",
        icon2: Chevron,
        submenu: [
            {
                to: "",
                path: "",
                title: "Profil",
            },
            {
                to: "",
                path: "",
                title: "Booking",
            },
            {
                to: "",
                path: "",
                title: "Accaount",
            }
        ]
    },
];

export default listMenu