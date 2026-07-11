import { ReactNode } from 'react';

export interface Advantage {
  id: string;
  text: ReactNode;
  position: 'top-left' | 'top-right' | 'middle-right' | 'bottom-right' | 'bottom-left' | 'middle-left';
}

export interface PlatformAdvantagesData {
  title: string;
  centerText: string;
  advantages: Advantage[];
  description: ReactNode;
}

export const enterprisePlatformAdvantagesData: PlatformAdvantagesData = {
  title: 'Platform Advantages',
  centerText: 'Advantages',
  advantages: [
    {
      id: '1',
      text: 'Systems built for consistent and reliable performance',
      position: 'top-left'
    },
    {
      id: '2',
      text: 'Flexible architecture aligned to operational structures',
      position: 'top-right'
    },
    {
      id: '3',
      text: 'Implementation aligned with measurable business outcomes',
      position: 'middle-right'
    },
    {
      id: '4',
      text: 'Structured system design supporting scalability',
      position: 'bottom-right'
    },
    {
      id: '5',
      text: 'Continuous platform support and system evolution',
      position: 'bottom-left'
    },
    {
      id: '6',
      text: 'Integration-ready across enterprise environments',
      position: 'middle-left'
    }
  ],
  description: "This approach reflects Safal’s positioning as a technology consulting company focused on structured system delivery.",
};

export const productAdvantagesData: PlatformAdvantagesData = {
  title: 'Product Development Advantages',
  centerText: 'Advantages',
  advantages: [
    {
      id: '1',
      text: 'Rapid prototyping and iterative development',
      position: 'top-left'
    },
    {
      id: '2',
      text: 'Full-stack expertise from concept to deployment',
      position: 'top-right'
    },
    {
      id: '3',
      text: 'Continuous product optimization and evolution',
      position: 'middle-right'
    },
    {
      id: '4',
      text: 'Scalable architecture for growth',
      position: 'bottom-right'
    },
    {
      id: '5',
      text: 'Agile methodology aligned with market demands',
      position: 'bottom-left'
    },
    {
      id: '6',
      text: 'Technology stack flexibility and modularity',
      position: 'middle-left'
    }
  ],
  description: "Built on proven methodologies that accelerate time-to-market while maintaining code quality and system reliability."
};

export const structuredIndustrialExecutionData: PlatformAdvantagesData = {
  title: 'Structured Industrial Execution',
  centerText: 'Advantages',
  advantages: [
    {
      id: '1',
      text: 'Expertise as an industrial automation company',
      position: 'top-left'
    },
    {
      id: '2',
      text: 'Proven delivery of industrial automation solutions',
      position: 'top-right'
    },
    {
      id: '3',
      text: 'Strong IT-OT system integration capability',
      position: 'middle-right'
    },
    {
      id: '4',
      text: 'Scalable architecture for industrial environments',
      position: 'bottom-right'
    },
    {
      id: '5',
      text: 'Engineering-driven system design approach',
      position: 'bottom-left'
    },
    {
      id: '6',
      text: 'Focus on reliability and operational control',
      position: 'middle-left'
    }
  ],
  description: ""
};


export const StructuredAIImplementation: PlatformAdvantagesData = {
  title: 'Structured AI Implementation',
  centerText: 'Advantages',
  advantages: [
    {
      id: '1',
      text: 'Proven expertise as an AI development company and AI implementation consultant',
      position: 'top-left'
    },
    {
      id: '2',
      text: 'Strong delivery of scalable AI implementation services',
      position: 'top-right'
    },
    {
      id: '3',
      text: 'Integration of AI with existing enterprise systems',
      position: 'middle-right'
    },
    {
      id: '4',
      text: 'Focus on execution, not experimentation',
      position: 'bottom-right'
    },
    {
      id: '5',
      text: 'Alignment between data, systems, and decision-making',
      position: 'bottom-left'
    },
    {
      id: '6',
      text: 'Long-term value through structured AI adoption',
      position: 'middle-left'
    }
  ],
  description: ""
};

export const WhysafalAccounting: PlatformAdvantagesData = {
  title: 'Why SAFAL Accounting',
  centerText: 'Advantages',
  advantages: [
    {
      id: '1',
      text: 'Expertise as an industrial automation company',
      position: 'top-left'
    },
    {
      id: '2',
      text: 'Scalable architecture for industrial environments',
      position: 'top-right'
    },
    {
      id: '3',
      text: 'Engineering-driven system design approach',
      position: 'middle-right'
    },
    {
      id: '4',
      text: 'Focus on reliability and operational control',
      position: 'bottom-right'
    },
    {
      id: '5',
      text: 'Strong IT-OT system integration capability',
      position: 'bottom-left'
    },
    {
      id: '6',
      text: 'Proven delivery of industrial automation solutions',
      position: 'middle-left'
    }
  ],
  description: ""
};


export const StructuredCreativityScalableExecution: PlatformAdvantagesData = {
  title: 'Structured Creativity. Scalable Execution.',
  centerText: 'Advantages',
  advantages: [
    {
      id: '1',
      text: 'Integrated approach combining branding, design, and digital marketing',
      position: 'top-left'
    },
    {
      id: '2',
      text: 'System-driven execution aligned with business objectives',
      position: 'top-right'
    },
    {
      id: '3',
      text: 'Consistent design frameworks across all brand touchpoints',
      position: 'middle-right'
    },
    {
      id: '4',
      text: 'Technology-backed delivery ensuring scalability',
      position: 'bottom-right'
    },
    {
      id: '5',
      text: 'Performance-focused marketing and optimization',
      position: 'bottom-left'
    },
    {
      id: '6',
      text: 'Long-term brand and digital support',
      position: 'middle-left'
    }
  ],
  description: ""
};