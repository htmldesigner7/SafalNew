import { ReactNode } from 'react';

export interface SustainableListItem {
  boldText: string;
  text: string;
}

export interface SustainableContent {
  title: ReactNode;
  description: ReactNode;
  listItems: SustainableListItem[];
  imageSrc: string;
  imageAlt: string;
}

export const sustainableData: SustainableContent = {
  title: <>Engineering a<br />Sustainable Tomorrow.</>,
  description: "True innovation cannot come at the expense of our environment. Through our \"Green-Code\" initiative and AI-driven resource allocation, Safal Infosoft actively optimizes software architectures to drastically reduce global energy consumption. We engineer the efficiency required for our partners to definitively achieve their ESG (Environmental, Social, and Governance) targets.",
  listItems: [
    {
      boldText: "Blue Leaf:",
      text: "Digital Efficiency (Reducing server loads)"
    },
    {
      boldText: "Green Leaf:",
      text: "Resource Optimization (IoT for waste reduction)"
    },
    {
      boldText: "Orange Leaf:",
      text: "Sustainable Scaling (Future-proofing infrastructure)"
    }
  ],
  imageSrc: "/images/blogs-inner.webp", // Replace with actual 3-leaves image
  imageAlt: "Sustainable Leaves"
};
