import {
    GitMerge, // for HDD paths
    Milestone, // for HDD precision
    Layers, // for Multi-utility pipelines
    Box, // for Box Pushing
    Unplug, // for Pipe Jacking (metaphor for connecting)
    Crosshair, // for Precision Boring
    Hammer, // for Pipe Ramming
} from 'lucide-react';

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

const boxpushingContent = {
    service1: {
        title: 'Box Pushing for Major Civil Structures (RUBs & Culverts)',
        description:
            'When your project demands the construction of a robust Road Under Bridge (RUB) or culvert beneath live traffic, our Box Pushing method is the ideal solution. We utilize powerful hydraulic systems to thrust pre-cast concrete segments into place, accelerating project completion and enhancing site safety, all while eliminating the need for open-cut excavation.',
        Icon: Box, // Icon yahan add kiya
    },
    service2: {
        title: 'Pipe Jacking & Pushing: Large Diameter, High Precision',
        description:
            'For large-diameter pipelines carrying water, sewage, or other utilities, our pipe jacking service offers a superior trenchless solution. Whether navigating hard rock or unstable soil conditions, our experienced team ensures millimeter-level accuracy, significantly reducing environmental impact and restoration costs.',
        Icon: Unplug, // Icon yahan add kiya
    },
    imageSrc:
        'https://images.unsplash.com/photo-1599303217595-3004b901615f?q=80&w=1974&auto=format&fit=crop', // Relevant image for jacking
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

export { hddContent, boxpushingContent, boringContent };
