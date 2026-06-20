import { ReactNode } from 'react';

export interface SustainableListItem {
  boldText: string;
  text: string;
}

export interface SustainableContent {
  title: ReactNode;
  description: ReactNode;
  listItems?: SustainableListItem[];
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


export const SingularData: SustainableContent = {
  title: <>Diverse Minds.<br />Singular Impact</>,
  description: "We do not believe in isolated brilliance. The complexity of the modern enterprise requires a synthesis of distinct disciplines. As visualized in our structure, we weave together raw engineering, algorithmic data science, elite creative strategy, and deep-tech AI into a single, unbreakable workflow. By merging these localized insights and varied intellectual perspectives, we deliver solutions that are not just functional, but exponentially powerful.",
  imageSrc: "/images/blogs-inner.webp",
  imageAlt: "Sustainable Leaves"
};


export const internshipsMentorshipData: SustainableContent = {
  title: <>Learn from the Architects.</>,
  description: <>True mastery cannot be taught in a lecture hall; it is transferred through proximity to excellence. Our mentorship program intentionally pairs emerging talent with seasoned industry veterans. By working daily with our lead engineers, creatives, and strategists, you absorb the tactical frameworks, the coding standards, and the decision-making models that drive the global digital economy.
    <br />
    Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi tellus hac orci sed etiam phasellus. Tortor vivamus in enim donec
  </>,
  imageSrc: "/images/blogs-inner.webp",
  imageAlt: "Sustainable Leaves"
};