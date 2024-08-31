export const navigation = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About us",
        url: "/about-us"
    },
    {
        title: "Tour",
        submenu: [
            {
                title: 'Northern Vietnam',
                url: '/tours?region=Northern+Vietnam',
            },
            {
                title: 'Central Vietnam',
                url: '/tours?region=Central+Vietnam',
            },
            {
                title: 'Southern Vietnam',
                url: '/tours?region=Southern+Vietnam',
            }
        ]
    },
    {
        title: "Contact",
        url: "/contact"
    }
]

export const userRoutes = [
    {
        title: "Manage account",
        url: "/profile"
    },
    {
        title: "Bookings & Trips",
        url: "/my-trip"
    }
]