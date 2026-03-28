export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    link: string;
    delay: string;
    active?: boolean;
    image?: string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Industrial Heat Pumps (60°C – 120°C)",
        description: "High-efficiency heat pump systems designed for industrial process heating and decarbonization.",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/heat-pump",
        delay: '.3'
    },
    {
        id: 2,
        title: "Organic Rankine Cycle (ORC)",
        description: "Convert low-grade waste heat into usable electrical power for improved energy efficiency.",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/orc",
        delay: '.5',
        active: true
    },
    {
        id: 3,
        title: "Waste-to-Energy Systems",
        description: "Transform industrial waste streams into valuable thermal and power outputs.",
        icon: "/img/service/icon/s-icon-3.svg",
        link: "/waste-to-energy",
        delay: '.7'
    },
    {
        id: 4,
        title: "Heat Pump Dryers",
        description: "Energy-efficient drying solutions for industrial and agricultural applications.",
        icon: "/img/service/icon/s-icon-4.svg",
        link: "/heat-pump-dryer",
        delay: '.9'
    },
    {
        id: 5,
        title: "High-Temperature Heat Pumps",
        description: "Advanced systems engineered for demanding high-temperature industrial processes.",
        icon: "/img/service/icon/s-icon-10.svg",
        link: "/heat-pump",
        delay: '.3'
    },
    {
        id: 6,
        title: "Waste Heat Recovery",
        description: "Capture and reuse excess process heat to reduce fuel consumption and emissions.",
        icon: "/img/service/icon/s-icon-11.svg",
        link: "/waste-heat-recovery",
        delay: '.5'
    },
    {
        id: 7,
        title: "Solar Dryers",
        description: "Sustainable drying solutions powered by solar thermal technology.",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/solar-dryer",
        delay: '.7'
    },
    {
        id: 8,
        title: "Hydrogen Generators",
        description: "On-site hydrogen production systems supporting clean fuel transition.",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/hydrogen-generator",
        delay: '.9'
    }];