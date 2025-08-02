import {
    GitMerge, // for HDD paths
    Milestone, // for HDD precision
    Layers, // for Multi-utility pipelines
    Box, // for Box Pushing
    Unplug, // for Pipe Jacking (metaphor for connecting)
    Crosshair, // for Precision Boring
    Hammer, // for Pipe Ramming
    Train, // 🆕 NAYA ICON: Box Pushing mein Railway ke liye
    Maximize, // 🆕 NAYA ICON: Jack Pushing mein bade diameter ke liye
} from 'lucide-react';

import BoxpushingImg from '@/assets/images/Box-pushing.webp'

const hddContent = {
    service1: {
        title: 'Steerable, Long-Distance Crossings',
        description:
            'HDD is the premier solution for installing pipelines over long distances and complex paths. Our advanced guidance systems allow us to navigate beneath rivers, congested urban areas, and environmentally sensitive zones with surgical precision.',
        Icon: GitMerge,
    },
    service2: {
        title: 'Minimal Surface & Environmental Impact',
        description:
            'The key advantage of HDD is its minimal footprint. With only small entry and exit points, we preserve landscapes, avoid traffic disruption, and significantly reduce restoration costs, making it the ideal choice for high-stakes projects.',
        Icon: Milestone,
    },
    imageSrc:
        'https://images.unsplash.com/photo-1629930784483-53d712a833a6?q=80&w=2940&auto=format&fit=crop', // Relevant image for HDD
};

const boxPushingContent = {
    service1: {
        title: 'Railway Under-Bridge (RUB) Construction via Box Pushing',
        description:
            'Hum chalti hui railway lines ke neeche bina train traffic roke RUBs aur culverts banane mein mahir hain. Hamari box pushing technique railway authorities se manzoor-shuda hai aur suraksha ki zamanat deti hai.',
        Icon: Train, // 🆕 NAYA ICON
    },
    service2: {
        title: 'Trenchless Underpass Solutions',
        description:
            'Hamari box pushing expertise se paidal chalne walon aur gaadiyon ke liye zameen-doz raaste (underpasses) banaye jaate hain, jis se traffic mein koi rukawat nahi aati.',
        Icon: Box,
    },
    imageSrc: BoxpushingImg
};

const jackPushingContent = {
    service1: {
        title: 'Large Diameter Pipe Jacking (600mm & Above)',
        description:
            'For major water supply, sewer lines, and utility conduits, we employ high-capacity hydraulic jacks to push large diameter pipes (600mm and above) through any terrain, including hard rock and unstable soil.',
        Icon: Maximize, // 🆕 NAYA ICON
    },
    service2: {
        title: 'High-Precision Pipeline Installation',
        description:
            'Our jack pushing services are perfect for installing pipelines for Lift Irrigation Projects, Power Cable Protection, and Road/Highway crossings, ensuring precise alignment and grade over long distances.',
        Icon: Unplug,
    },
    imageSrc: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Example image
};

const boringContent = {
    service1: {
        title: 'Precision Auger Boring',
        description:
            'A proven and highly accurate method for installing steel casing pipes in diverse geotechnical conditions, from common soils to soft rock. Leveraging advanced guidance systems and high-torque machinery, we maintain exacting control over line and grade, ensuring every installation meets precise project specifications.',
        Icon: Crosshair, // Icon yahan add kiya
    },
    service2: {
        title: 'Pipe Ramming for Challenging Ground',
        description:
            'When encountering difficult ground with cobbles, boulders, or other obstructions, pipe ramming is the most effective solution. This technique uses a powerful pneumatic hammer to drive the pipe casing, displacing obstacles in its path. It is an ideal method for short-distance crossings where other boring methods are impractical.',
        Icon: Hammer, // Icon yahan add kiya
    },
    imageSrc:
        'https://images.unsplash.com/photo-1619463261749-51d2047a5137?q=80&w=2940&auto=format&fit=crop', // Relevant image for boring
};

export { hddContent, jackPushingContent, boxPushingContent, boringContent };
