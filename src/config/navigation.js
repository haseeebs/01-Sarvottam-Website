export const primaryNav = [
    { name: 'Home', path: '/' },
    {
        name: 'Services',
        path: '#',
        dropdown: [
            {
                name: 'Horizontal Directional Drilling',
                path: '/services/hdd',
            },
            { name: 'Auger Boring', path: '/services/auger-boring' },
            { name: 'Box Pushing', path: '/services/box-pushing' },
            { name: 'Jack Pushing', path: '/services/jack-pushing' },
        ],
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Equipment', path: '/equipment' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export const footerNav = {
    company: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Our Equipment', path: '/equipment' },
    ],
    services: [
        {
            name: 'Horizontal Directional Drilling (HDD)',
            path: '/services/hdd',
        },
        { name: 'Auger Boring', path: '/services/auger-boring' },
        { name: 'Box Pushing (For Railways)', path: '/services/box-pushing' },
        { name: 'Jack Pushing', path: '/services/jack-pushing' },
    ],
    contact: {
        email: 'sarvottam24365@gmail.com',
        phone: '+91 777 180 6888',
        phone2: '+91 79746 36790',
    },
};
