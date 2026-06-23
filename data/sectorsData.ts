export interface SectorItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface SectorsContent {
  title: string;
  subtitle?: string;
  cards: SectorItem[];
}

export const defaultSectorsData: SectorsContent = {
  title: 'Transforming Sectors. Architecting the Future.',
  cards: [
    {
      id: '01',
      title: 'Manufacturing',
      image: '/images/container-port.png',
      description: 'Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus e aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet. In non platea morbi facilisis consectetur nunc maecenas. Sit porta nulla sed non in nibh tellus nisl. Quam eget odio vestibulum bibendum eget vel massa. In nibh imperdiet proin felis senectus viverra vulputate. Sem mattis malesuada blandit sapien sagittis mi.',
    },
    {
      id: '02',
      title: 'Logistics',
      image: '/images/container-port.png',
      description: 'Optimize your supply chain and distribution networks with intelligent logistics platforms designed for global scale and real-time visibility.',
    },
    {
      id: '03',
      title: 'Retail',
      image: '/images/container-port.png',
      description: 'Transform customer experiences and streamline operations with data-driven retail ecosystems and omni-channel commerce solutions.',
    },
    {
      id: '04',
      title: 'Healthcare',
      image: '/images/container-port.png',
      description: 'Empower medical professionals and improve patient outcomes through secure, interoperable healthcare technology frameworks.',
    },
    {
      id: '05',
      title: 'Finance',
      image: '/images/container-port.png',
      description: 'Navigate complex regulatory landscapes and accelerate innovation with robust, secure financial infrastructure and analytics.',
    }
  ]
};
