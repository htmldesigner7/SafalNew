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


export const StructuredIndependent: SustainableContent = {
  title: <>Structured, Independent, and Insight-Led</>,
  description: "",
  listItems: [
    {
      boldText: "",
      text: "Strong expertise in business and financial advisory services"
    },
    {
      boldText: "",
      text: "Delivery of structured financial advisory services aligned with compliance"
    },
    {
      boldText: "",
      text: "Data-driven approach to decision support and evaluation"
    }
    ,
    {
      boldText: "",
      text: "Experience across valuation, audit, and transaction scenarios"
    }

    ,
    {
      boldText: "",
      text: "Independent advisory with objective financial insights"
    }

    ,
    {
      boldText: "",
      text: "Focus on long-term value creation and risk management"
    }
  ],
  imageSrc: "/images/blogs-inner.webp", // Replace with actual 3-leaves image
  imageAlt: "Sustainable Leaves"
};

export const productsBuiltForScaleData: SustainableContent = {
  title: "Products Built for Scale and Adoption",
  description: (
    <>
      <p style={{ marginTop: 0 }}>As a startup product development company, Ideaz Ventures has contributed to building digital products across industries, from early-stage MVPs to scalable platforms.</p>
      <p>Each product reflects structured execution, scalable architecture, and alignment between product vision and technology systems.</p>
    </>
  ),
  imageSrc: "/images/ourstory.webp", // Fallback sketch image, user can replace
  imageAlt: "Products Built for Scale"
};

export const governingDigitalFrontierData: SustainableContent = {
  title: <>Governing the<br />Digital Frontier.</>,
  description: (
    <>
      <p style={{ marginTop: 0 }}>
        As we engineer the future of autonomous logistics, proprietary ERP frameworks, and predictive AI, we carry the profound responsibility of shaping ethical technology. The Safal Ethics & Compliance Committee actively audits our R&D incubations and enterprise deployments. We ensure our algorithms are free of bias, our data architectures respect global human privacy rights, and our digital ecosystems serve to elevate, rather than exploit, the markets we touch.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Ut velit leo amet suscipit elementum dolor. Leo egestas sit sit pellentesque scelerisque ultricies. Sit viverra sapien tincidunt egestas nunc dictumst urna. Aliquam elit sagittis id eu consectetur diam amet. Fringilla arcu nullam nunc aliquam sed. Euismod vulputate nullam cum potenti ac. Cursus nullam feugiat morbi lorem a. Sit nisi arcu commodo eget eget eros. Eu.
      </p>
    </>
  ),
  imageSrc: "/images/climbing_stones.png",
  imageAlt: "Governing the Digital Frontier"
};




export const GoverningDigitalFrontierData: SustainableContent = {
  title: <>Governing the222<br />Digital Frontier.</>,
  description: (
    <>
      <p style={{ marginTop: 0 }}>
        As we engineer the future of autonomous logistics, proprietary ERP frameworks, and predictive AI, we carry the profound responsibility of shaping ethical technology. The Safal Ethics & Compliance Committee actively audits our R&D incubations and enterprise deployments. We ensure our algorithms are free of bias, our data architectures respect global human privacy rights, and our digital ecosystems serve to elevate, rather than exploit, the markets we touch.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Ut velit leo amet suscipit elementum dolor. Leo egestas sit sit pellentesque scelerisque ultricies. Sit viverra sapien tincidunt egestas nunc dictumst urna. Aliquam elit sagittis id eu consectetur diam amet. Fringilla arcu nullam nunc aliquam sed. Euismod vulputate nullam cum potenti ac. Cursus nullam feugiat morbi lorem a. Sit nisi arcu commodo eget eget eros. Eu.
      </p>
    </>
  ),
  imageSrc: "/images/climbing_stones.png",
  imageAlt: "Governing the Digital Frontier"
};

