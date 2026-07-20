import { baseUrl } from '@/utils/baseUrl';
import { ImageCardsData } from './endToEndProductData';


export const appliedAiData: ImageCardsData = {
  title: "Applied AI Systems",
  cards: [
    {
      id: "enterprise-ai",
      title: "Enterprise AI",
      description: "Deployment of enterprise AI solutions across systems, workflows, and operational environments.",
      imageSrc: `${baseUrl}/images/AI-&-Emerging-Technology/Enterprise-AI.webp`,
      imageAlt: "Enterprise AI"
    },
    {
      id: "process-automation",
      title: "Process Automation",
      description: "Automation of repetitive processes using AI and machine learning services to improve efficiency and consistency.",
      imageSrc: `${baseUrl}/images/AI-&-Emerging-Technology/Process-Automation.webp`,
      imageAlt: "Process Automation"
    },
    {
      id: "data-intelligence",
      title: "Data Intelligence",
      description: "Extraction of actionable insights from enterprise data to support decision-making and performance optimization.",
      imageSrc: `${baseUrl}/images/AI-&-Emerging-Technology/Data-Intelligence.webp`,
      imageAlt: "Data Intelligence"
    }
  ]
};


export const StructuredFinancialWorkflows: ImageCardsData = {
  title: "Structured Financial Workflows",
  cards: [
    {
      id: "order-to-cash",
      title: "Order to Cash (O2C)",
      description: "Delivery of structured O2C services including invoicing, receivables management, collections, and cash application with defined process control.",
      imageSrc: `${baseUrl}/images/financial-accounting-solutions/Order-to-Cash-(O2C).webp`,
      imageAlt: "Order to Cash"
    },
    {
      id: "procure-to-pay",
      title: "Procure to Pay (P2P)",
      description: "Management of procurement, vendor payments, and expense workflows within controlled accounting systems.",
      imageSrc: `${baseUrl}/images/financial-accounting-solutions/Procure-to-Pay-(P2P).webp`,
      imageAlt: "Procure to Pay"
    },
    {
      id: "record-to-report",
      title: "Record to Report (R2R)",
      description: " Financial reporting, reconciliation, and closing processes aligned with accounting standards and compliance frameworks.",
      imageSrc: `${baseUrl}/images/financial-accounting-solutions/Record-to-Report-(R2R).webp`,
      imageAlt: "Record to Report"
    }
  ]
};


export const StandardizedControlledExecution: ImageCardsData = {
  title: "Standardized and Controlled Execution",
  cards: [
    {
      id: "automation",
      title: "Automation",
      description: "Reduced manual intervention through structured systems.",
      imageSrc: `${baseUrl}/images/financial-accounting-solutions/Automation.webp`,
      imageAlt: "Automation"
    },
    {
      id: "accuracy",
      title: "Accuracy",
      description: "Controlled processes ensuring financial data integrity.",
      imageSrc: `${baseUrl}/images/financial-accounting-solutions/Accuracy.webp`,
      imageAlt: "Accuracy"
    },
    {
      id: "compliance",
      title: "Compliance",
      description: "Alignment with regulatory and reporting requirements.",
      imageSrc: `${baseUrl}/images/financial-accounting-solutions/Compliance.webp`,
      imageAlt: "Compliance"
    }
  ]
};

