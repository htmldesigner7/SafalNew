export interface EngineeringCard {
  id: string;
  number: string;
  subtitle: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface EngineeringContent {
  title: string;
  cards: EngineeringCard[];
}

export const engineeringData: EngineeringContent = {
  title: "Engineering Global Impact.",
  cards: [
    {
      id: "logistics",
      number: "01.",
      subtitle: "Sector / Logistics",
      title: "Autonomous Logistics",
      description: "Eliminating bottlenecks through Industrial IoT and predictive machine learning.",
      imageSrc: "/images/DI_Compaas.png" // Placeholder icon, replace with actual logistics icon
    },
    {
      id: "finance",
      number: "02.",
      subtitle: "Sector / Finance",
      title: "Decentralized Security",
      description: "Balancing seamless API integrations with military-grade zero-trust frameworks.",
      imageSrc: "/images/DI_StarCube.png" // Placeholder icon, replace with actual security icon
    },
    {
      id: "corporate",
      number: "03.",
      subtitle: "Sector / Corporate",
      title: "Enterprise Ecosystems",
      description: "Building cohesive digital narratives that drive deep institutional investor confidence.",
      imageSrc: "/images/DI_Orbit.png" // Placeholder icon, replace with actual ecosystem icon
    },
    {
      id: "industrial",
      number: "04.",
      subtitle: "Sector / Industrial",
      title: "Low-Code Agility",
      description: "Transitioning legacy monoliths into agile micro-services without halting production.",
      imageSrc: "/images/DI_Rocket.png" // Placeholder icon, replace with actual agility icon
    }
  ]
};
