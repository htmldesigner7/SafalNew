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
  description: <>True innovation is responsible by design. Safal integrates sustainability into system architecture, optimizing resources, reducing waste, and improving efficiency at scale.<br/><br/>Our approach aligns technology with long-term environmental and operational impact.</>,
  listItems: [
    {
      boldText: "Blue Layer:",
      text: "Digital efficiency through optimized system performance"
    },
    {
      boldText: "Green Layer:",
      text: "Resource intelligence and waste reduction"
    },
    {
      boldText: "Orange Layer:",
      text: "Scalable infrastructure built for long-term sustainability"
    }
  ],
  imageSrc: "/images/blogs-inner.webp", // Replace with actual 3-leaves image
  imageAlt: "Sustainable Leaves"
};


export const SingularData: SustainableContent = {
  title: <>Diverse Minds.<br />Singular Impact.</>,
  description: <>
  <p>We do not believe in isolated brilliance. Modern enterprise challenges demand the convergence of multiple disciplines.</p>
  <p>At Safal, we integrate engineering, data intelligence, design thinking, and strategic insight into a unified execution model. By combining diverse perspectives into a single, cohesive system, we create solutions that are not just effective but exponentially powerful.</p>
  </>,
  imageSrc: "/images/Values-&-Culture/Diverse-Minds.webp",
  imageAlt: "Sustainable Leaves"
};


export const internshipsMentorshipData: SustainableContent = {
  title: <>Learn from the Architects.</>,
  description: <>
  <p>Mastery is not taught—it is absorbed.</p>
  <p>Our mentorship model places you alongside experienced operators, where you learn how decisions are made, how systems are built, and how global-scale execution happens daily.</p>
  <p>You don’t just understand theory—you internalize the frameworks that drive enterprise outcomes.</p>
  </>,
  imageSrc: "",
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
      <p style={{ marginTop: 0 }}>As a <b>startup product development company,</b> Ideaz Ventures has contributed to building digital products across industries, from early-stage MVPs to scalable platforms.</p>
      <p>Each product reflects structured execution, scalable architecture, and alignment between product vision and technology systems.</p>
    </>
  ),
  imageSrc: "/images/Startup-Product-Development-&-Consulting/Products-Built-for-Scale-and-Adoption.webp", // Fallback sketch image, user can replace
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
  title: <>Governing the Digital Frontier</>,
  description: (
    <>
      <p style={{ marginTop: 0 }}>
        As we build advanced enterprise systems, industrial automation frameworks, and AI-driven platforms, governance becomes inseparable from innovation.
      </p>
      <p>
        Our Ethics & Compliance structure ensures that every solution we deploy respects data privacy, operates within regulatory frameworks, and contributes responsibly to the markets we engage with.
      </p>
      <p>We don’t treat governance as a checkpoint, it is embedded into how we design, build, and scale.</p>
    </>
  ),
  imageSrc: "/images/Corporate-Governance/governance/Governing-the-Digital-Frontier.webp",
  imageAlt: "Governing the Digital Frontier"
};

