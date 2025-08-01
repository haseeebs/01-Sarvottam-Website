export const allProjects = [
    {
        id: 1,
        isFeatured: true,
        category: 'Pushing & Jacking',
        subCategory: 'Multi-Terrain Water Supply',
        title: 'L&T Lift Irrigation (Kundaliya)',
        location: 'Rajgarh, Madhya Pradesh',
        client: 'Larsen & Toubro (L&T)',
        challenge:
            'To execute extensive pipe crossings for a critical water supply project, navigating varied terrains including hard rock excavation up to 3 meters deep for a wide range of pipe sizes (150mm to 1600mm).',
        solution:
            'We deployed multiple methods suited for each challenge, including crane-assisted placement and trenchless pipe pushing. Our ability to handle diverse DI and MS pipes met the stringent quality standards of L&T.',
        imageSrc:
            'https://images.unsplash.com/photo-1593349122524-7446587c69da?q=80&w=2070&auto=format&fit=crop',
        keyStats: [
            { label: 'Pipe Diameters', value: '600mm and above' },
            { label: 'Terrain Handled', value: 'Hard Rock & Mixed Soil' },
            { label: 'Technology', value: 'Trenchless + Open Cut' },
        ],
        testimonial: {
            quote:
                "Sarvottam's capability to handle diverse pipe sizes and challenging ground conditions was critical to our project's success.",
            author: 'Project Manager, L&T Water & Effluent Treatment',
        },
    },
    {
        id: 2,
        isFeatured: true,
        category: 'Pushing & Jacking',
        subCategory: 'Highway Crossing',
        title: 'Kalisindh Lift Irrigation Scheme - Phase II',
        location: 'Madhya Pradesh',
        client: 'Megha Engineering & Infrastructures Ltd (MEIL)',
        challenge:
            'To install a vast range of MS encasing pipes (from 400mm to a massive 3900mm) for National & State Highway crossings, requiring expertise in all soil types, including hard rock.',
        solution:
            "Leveraging advanced jacking and pushing techniques, our team executed the pipe tunneling with high precision. We successfully managed the exceptionally wide range of pipe diameters as per MEIL's directives.",
        imageSrc:
            'https://images.unsplash.com/photo-1519408436233-34502b183a26?q=80&w=2070&auto=format&fit=crop', // Placeholder
        keyStats: [
            { label: 'Pipe Diameters', value: '600mm and above' },
            { label: 'Technology', value: 'Jacking & Pushing' },
            { label: 'Infrastructure', value: 'NH & SH Crossings' },
        ],
        testimonial: null,
    },
    {
        id: 3,
        isFeatured: false,
        category: 'Pushing & Jacking',
        subCategory: 'Urban Infrastructure',
        title: 'Digha-Kankarbagh Sewer Network Project',
        location: 'Patna, Bihar',
        client: 'VA Tech Wabag Ltd',
        challenge:
            'Laying a large 1600mm diameter RCC sewer pipe for 141 meters in a dense urban zone of Patna using a trenchless method to minimize public disruption and meet a tight 3-month schedule.',
        solution:
            'Our team successfully executed all associated civil works and employed the jack pushing method to install the pipeline, completing the project on schedule and demonstrating our efficiency in urban infrastructure projects.',
        imageSrc: null,
        keyStats: [
            { label: 'Pipe Diameter', value: '1600mm RCC' },
            { label: 'Crossing Length', value: '141 Meters' },
            { label: 'Technology', value: 'Trenchless (Jack Pushing)' },
        ],
        testimonial: null,
    },
    {
        id: 4,
        isFeatured: false,
        category: 'HDD', // Changed to be more specific
        subCategory: 'Horizontal Directional Drilling (HDD)',
        title: 'Mohanpura LBS Pipeline Project',
        location: 'Mohanpura, Madhya Pradesh',
        client: 'Jain Irrigation Systems Ltd.',
        challenge:
            'Installing MS casing pipes (600mm to 2000mm) for a highway crossing using the HDD method through unpredictable mixed ground conditions, including soft soil, murram, and hard rock.',
        solution:
            'Our team expertly deployed the HDD method for both boring and pushing the casing pipe, managing all required machinery to successfully complete the 100-meter crossing across the varied strata.',
        imageSrc:
            'https://images.unsplash.com/photo-1629930784483-53d712a833a6?q=80&w=2940&auto=format&fit=crop', // Placeholder
        keyStats: [
            { label: 'Pipe Diameters', value: '600mm to 2000mm' },
            { label: 'Terrain Handled', value: 'Mixed (Soil, Murram, Hard Rock)' },
            { label: 'Technology', value: 'HDD' },
        ],
        testimonial: null,
    },
    {
        id: 5,
        isFeatured: true,
        category: 'Pushing & Jacking',
        subCategory: 'Trenchless Technology',
        title: 'Parwati + Shipralink Project',
        location: 'Madhya Pradesh',
        client: 'Larsen & Toubro (L&T)',
        challenge:
            'This project involved complex pipeline crossings under critical infrastructure, ensuring minimal disruption and maximum efficiency.',
        solution:
            'Our expertise in trenchless solutions was critical for the successful execution of this high-stakes project.',
        imageSrc: null,
        keyStats: [
            { label: 'Role', value: 'Execution Partner' },
            { label: 'Technology', value: 'Trenchless Solutions' },
            { label: 'Client', value: 'Larsen & Toubro' },
        ],
        testimonial: null,
    },
    {
        id: 6,
        isFeatured: false,
        category: 'Auger Boring',
        subCategory: 'Urban Utility Installation',
        title: 'City Gas Distribution Network',
        location: 'Bhopal, Madhya Pradesh',
        client: 'Local Gas Authority',
        challenge: 'Installing steel casing pipes for a gas distribution network in a congested urban area without disrupting traffic.',
        solution: 'Utilized precision auger boring to accurately install pipes under busy roads, completing the project ahead of schedule with minimal surface impact.',
        imageSrc: 'https://images.unsplash.com/photo-1619463261749-51d2047a5137?q=80&w=2940&auto=format&fit=crop',
        keyStats: [
            { label: 'Technology', value: 'Auger Boring' },
            { label: 'Infrastructure', value: 'Urban Roads' },
        ],
        testimonial: null,
    },
];

import boxpushingImg from '@/assets/images/Box-pushing.jpg';
import augerboringImg from '@/assets/images/Auger-boring.jpg';
// -import pipelineImg from '@/assets/images/NormalImg-1.jpg';
import hddImg from '@/assets/images/Hero-image-2.jpg';

export const services = [
    {
        title: 'Horizontal Directional Drilling (HDD)',
        link: '/services/hdd',
        imgSrc: hddImg,
        imgAlt: 'Horizontal Directional Drilling rig in action for a major project.',
        description:
            'For long-distance crossings under rivers, highways, or sensitive areas, our HDD service provides a steerable, trenchless solution with pinpoint accuracy and minimal environmental impact.',
    },
    {
        title: 'Box Pushing & Pipe Jacking',
        link: '/services/pushing-jacking',
        imgSrc: boxpushingImg,
        imgAlt: 'Hydraulic jacks for box pushing and pipe jacking projects.',
        description:
            'We construct underground underpasses (RUBs) and culverts with precision-guided box pushing and pipe jacking. This method accelerates project completion and enhances site safety by eliminating the need for open-cut excavation.',
    },
    {
        title: 'Auger Boring',
        link: '/services/auger-boring',
        imgSrc: augerboringImg,
        imgAlt: 'Auger boring machine for precision underground services.',
        description:
            'Ideal for straight-line utility installations of steel casing pipes under roads and railways. Our auger boring method is a reliable and cost-effective trenchless solution for various ground conditions.',
    },
];
// --- END OF FILE src/data/projectData.js ---