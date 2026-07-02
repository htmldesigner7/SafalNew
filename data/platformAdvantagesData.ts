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
      text: 'Integration-ready across enterprise environments',
      position: 'top-right'
    },
    {
      id: '3',
      text: 'Continuous platform support and system evolution',
      position: 'middle-right'
    },
    {
      id: '4',
      text: 'Structured system design supporting scalability',
      position: 'bottom-right'
    },
    {
      id: '5',
      text: 'Implementation aligned with measurable business outcomes',
      position: 'bottom-left'
    },
    {
      id: '6',
      text: 'Flexible architecture aligned to operational structures',
      position: 'middle-left'
    }
  ],
  description: ""
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
