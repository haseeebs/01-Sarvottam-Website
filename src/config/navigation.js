export const primaryNav = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
        name: 'Services',
        path: '/services',

        dropdown: [
            { name: 'All Services', path: '/services' },
            { name: 'Tunnel & Pipeline Crossing', path: '/services/pipeline-crossing' },
            { name: 'Box Pushing & Pipe Jacking', path: '/services/pushing-jacking' },
            { name: 'Auger Boring', path: '/services/auger-boring' },
            { name: 'Other Support Services', path: '/services/other' },
        ],
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Equipment', path: '/equipment' },
    { name: 'Contact', path: '/contact' },
];

export const footerNav = {
    company: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Our Equipment', path: '/equipment' },
    ],
    services: [
        { name: 'Tunnel & Pipeline Crossing', path: '/services/pipeline-crossing' },
        { name: 'Box Pushing & Pipe Jacking', path: '/services/pushing-jacking' },
        { name: 'Auger Boring', path: '/services/auger-boring' },
        { name: 'Other Support Services', path: '/services/other' },
    ],
    contact: {
        address: '123 Infrastructure Lane, New Delhi, India 110001',
        email: 'sarvottam24365@gmail.com',
        phone: '+91 777 180 6888',
    },
};