export const allProjects = [
    {
        id: 1,
        isFeatured: true,
        category: 'Jack Pushing', // CATEGORY UPDATE: Pushing & Jacking -> Jack Pushing
        subCategory: 'Lift Irrigation Project', // SUBCATEGORY UPDATE: Client ke "Project Types" se liya gaya.
        title: 'L&T Lift Irrigation (Kundaliya)',
        location: 'Rajgarh, Madhya Pradesh',
        client: 'Larsen & Toubro (L&T)',
        challenge: 'A critical water supply project requiring extensive pipe crossings (150mm to 1600mm) through varied terrains, including hard rock up to 3 meters deep.',
        solution: 'Deployed multiple methods, including crane-assisted placement and trenchless pipe pushing, handling diverse DI and MS pipes to meet L&T\'s stringent quality standards.',
        imageSrc: null,
        keyStats: [
            { label: 'Pipe Diameters', value: 'Up to 1600mm' },
            { label: 'Terrain', value: 'Hard Rock & Mixed Soil' },
            { label: 'Technology', value: 'Jack Pushing & Open Cut' },
        ],
        testimonial: {
            quote: "Sarvottam's capability to handle diverse pipe sizes and challenging ground conditions was critical to our project's success.",
            author: 'Project Manager, L&T Water & Effluent Treatment',
        },
    },
    {
        id: 2,
        isFeatured: true,
        category: 'Jack Pushing', // CATEGORY UPDATE
        subCategory: 'Highway Crossing', // SUBCATEGORY UPDATE
        title: 'Kalisindh Lift Irrigation - Highway Crossings',
        location: 'Madhya Pradesh',
        client: 'Megha Engineering & Infrastructures Ltd (MEIL)',
        challenge: 'Installing a vast range of MS encasing pipes (from 400mm to a massive 3900mm) for National & State Highway crossings in all soil types, including hard rock.',
        solution: 'Leveraged advanced jacking and pushing techniques for high-precision pipe tunneling, successfully managing an exceptionally wide range of pipe diameters as per MEIL\'s directives.',
        imageSrc: null,
        keyStats: [
            { label: 'Pipe Diameters', value: '400mm to 3900mm' },
            { label: 'Technology', value: 'Jack Pushing' },
            { label: 'Infrastructure', value: 'NH & SH Crossings' },
        ],
        testimonial: null,
    },
    {
        id: 3,
        isFeatured: false,
        category: 'Jack Pushing',
        subCategory: 'Sewer Line Project',
        title: 'Namami Gange - Digha-Kankarbagh Sewer Network',
        location: 'Patna, Bihar',
        client: 'VA Tech Wabag Ltd',
        challenge: 'Executing large-diameter sewer pipeline installation in a dense urban zone of Patna under a tight monthly schedule, with strict requirements to minimize public disruption.',
        solution: 'Completed multiple stretches of sewer line using the jack pushing method and timely civil works, showcasing high efficiency in handling complex urban infrastructure projects.',
        imageSrc: 'https://i.ibb.co/VFkccm1/wabagh-project.webp',
        keyStats: [
            { label: 'Pipe Diameter', value: '1600mm RCC' },
            { label: 'Technology', value: 'Jack Pushing' },
        ],
        testimonial: null,
    },
    {
        id: 4,
        isFeatured: false,
        category: 'HDD',
        subCategory: 'Highway Crossing',
        title: 'Mohanpura Pipeline Project (HDD)',
        location: 'Mohanpura, Madhya Pradesh',
        client: 'Jain Irrigation Systems Ltd.',
        challenge: 'Installing MS casing pipes (600mm to 2000mm) for a highway crossing using HDD through unpredictable mixed ground conditions (soft soil, murram, hard rock).',
        solution: 'Expertly deployed the HDD method for both boring and pushing the casing pipe, managing all required machinery to complete the 100-meter crossing successfully.',
        imageSrc: null,
        keyStats: [
            { label: 'Pipe Diameters', value: '600mm to 2000mm' },
            { label: 'Terrain', value: 'Mixed (Soil, Murram, Hard Rock)' },
            { label: 'Technology', value: 'HDD' },
        ],
        testimonial: null,
    },
    {
        id: 5,
        isFeatured: true,
        category: 'Jack Pushing', // CATEGORY UPDATE
        subCategory: 'Lift Irrigation Project', // SUBCATEGORY UPDATE
        title: 'L&T Parwati + Shipralink Project',
        location: 'Madhya Pradesh',
        client: 'Larsen & Toubro (L&T)',
        challenge: 'Complex pipeline crossings under critical infrastructure, ensuring minimal disruption and maximum efficiency for a major irrigation link project.',
        solution: 'Our expertise in trenchless solutions, specifically Jack Pushing, was critical for the successful execution of this high-stakes project.',
        imageSrc: null, // Client se is project ki image maangein
        keyStats: [
            { label: 'Client', value: 'Larsen & Toubro' },
            { label: 'Technology', value: 'Jack Pushing' },
            { label: 'Project Type', value: 'Irrigation Link' },
        ],
        testimonial: null,
    },
    {
        id: 6,
        isFeatured: false,
        category: 'Auger Boring',
        subCategory: 'Gas Pipeline Project', // SUBCATEGORY UPDATE
        title: 'City Gas Distribution Network (Auger Boring)',
        location: 'Bhopal, Madhya Pradesh',
        client: 'GAIL Gas (Local Authority)', // CLIENT UPDATE: Client ke notes se
        challenge: 'Installing steel casing pipes for a gas distribution network in a congested urban area without disrupting traffic.',
        solution: 'Utilized precision auger boring to accurately install pipes under busy roads, completing the project ahead of schedule with minimal surface impact.',
        imageSrc: null,
        keyStats: [
            { label: 'Technology', value: 'Auger Boring' },
            { label: 'Infrastructure', value: 'Urban Roads' },
            { label: 'Utility', value: 'Gas Pipeline' },
        ],
        testimonial: null,
    },
    {
        id: 8,
        isFeatured: true,
        category: 'Box Pushing',
        subCategory: 'Railway Crossing',
        title: 'Railway Under-Bridge (RUB) Construction',
        location: 'All India (various sites)',
        client: 'Indian Railways / NHAI',
        challenge: 'Constructing concrete box culverts and underpasses under live, operational railway tracks without disrupting train schedules, a high-risk and precision-demanding task.',
        solution: 'Using our specialized Box Pushing technique, we incrementally push pre-cast concrete box segments under the railway embankment. This method is approved by railway authorities and guarantees structural safety and project completion on time.',
        imageSrc: 'https://i.ibb.co/QFfGgDG4/box-Pushing.webp',
        keyStats: [
            { label: 'Infrastructure', value: 'Live Railway Tracks' },
            { label: 'Technology', value: 'Box Pushing' },
            { label: 'Benefit', value: 'Zero Rail Traffic Disruption' },
        ],
        testimonial: null,
    },
];


// === SERVICES FOR HOMEPAGE ===
export const services = [
    {
        title: 'Horizontal Directional Drilling',
        link: '/services/hdd',
        imgSrc: 'https://i.ibb.co/pjBJ6b2d/hero-img-2.webp',
        imgAlt: 'Horizontal Directional Drilling rig in action for a major project.',
        description: 'A steerable, trenchless solution for long-distance crossings under rivers, highways, or sensitive areas with pinpoint accuracy.',
    },
    // {
    //     title: 'Box Pushing (For Railways)',
    //     link: '/services/box-pushing',
    //     imgSrc: boxpushingImg,
    //     imgAlt: 'Construction of a Railway Under-Bridge using the box pushing method.',
    //     description: 'Specialized in constructing Railway Under-Bridges (RUBs) and culverts under live traffic with zero disruption to train services.',
    // },
    {
        title: 'Jack Pushing',
        link: '/services/jack-pushing',
        imgSrc: 'https://i.ibb.co/LXjcVjgt/jack-pushing-img.webp',
        imgAlt: 'Large diameter pipes being installed using hydraulic jacks.',
        description: 'Ideal for installing large diameter pipelines (600mm & above) for water supply, sewer, and utility projects across any terrain.',
    },
    {
        title: 'Auger Boring',
        link: '/services/auger-boring',
        imgSrc: 'https://i.ibb.co/dsqqNnBj/auger-Boring.webp',
        imgAlt: 'Auger boring machine for precision underground services.',
        description: 'A reliable and cost-effective trenchless solution for straight-line installation of steel casing pipes under roads and railways.',
    },
];