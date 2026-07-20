import { baseUrl } from '@/utils/baseUrl';
import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';

export default function TermsConditionsPage() {
  const heroData = {
    title: <strong>Terms & Conditions</strong>,
    description: "Welcome to Safal. By accessing or using this website, you agree to comply with and be bound by the following Terms & Conditions. Please read these terms carefully before using our website or engaging with any of our services. If you do not agree with these terms, please refrain from using this website.",
    imageSrc: `${baseUrl}/images/banner-images/Corporate-Governance.webp`,
    imageAlt: "Terms & Conditions Hero Graphic",
  };

  return (
    <main>
      <InnerPageHero 
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      
      <section className="mt_80 mb_80">
        <div className="container-1600">
          <div style={{ maxWidth: '1000px', margin: '0 auto', fontFamily: 'var(--font-body)', color: 'var(--black-111)' }}>
            
            <h2 className="title_40 mt_40 mb_20">Acceptance of Terms</h2>
            <p className="para_16 mb_30">Your access to and use of this website constitutes your acceptance of these Terms & Conditions, together with our Privacy Policy and any additional policies referenced herein. These terms apply to all visitors, users, clients, partners, applicants, and any other individuals interacting with the website.</p>

            <h2 className="title_40 mt_40 mb_20">About Safal</h2>
            <p className="para_16 mb_15">Safal provides technology consulting, enterprise software solutions, ERP implementation, low-code platforms, digital transformation services, branding, creative services, digital marketing, technology staffing, financial and business advisory, accounting solutions, industrial automation, and other related professional services.</p>
            <p className="para_16 mb_30">All information presented on this website is intended to provide a general overview of our capabilities and services.</p>

            <h2 className="title_40 mt_40 mb_20">Use of the Website</h2>
            <p className="para_16 mb_15">You agree to use this website only for lawful purposes and in accordance with these Terms & Conditions.</p>
            <p className="para_16 mb_15">You shall not:</p>
            <ul className="para_16 mb_15" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Use the website in any manner that violates applicable laws or regulations.</li>
              <li className="mb_10">Attempt to gain unauthorized access to any part of the website, servers, or connected systems.</li>
              <li className="mb_10">Introduce malicious software, viruses, or harmful code.</li>
              <li className="mb_10">Copy, distribute, reproduce, or commercially exploit any content without prior written permission.</li>
              <li className="mb_10">Interfere with the website&apos;s security, functionality, or availability.</li>
            </ul>
            <p className="para_16 mb_30">Safal reserves the right to suspend or terminate access if any misuse is identified.</p>

            <h2 className="title_40 mt_40 mb_20">Intellectual Property</h2>
            <p className="para_16 mb_15">Unless otherwise stated, all content available on this website, including text, graphics, designs, logos, icons, software, videos, illustrations, images, case studies, documents, user interface elements, branding assets, and other materials, is the exclusive property of Safal or its licensors.</p>
            <p className="para_16 mb_15">No content may be copied, reproduced, modified, published, distributed, or used for commercial purposes without prior written consent.</p>
            <p className="para_16 mb_30">Unauthorized use may result in legal action.</p>

            <h2 className="title_40 mt_40 mb_20">Service Information</h2>
            <p className="para_16 mb_15">Descriptions of services, technologies, methodologies, industries, products, and solutions are provided for informational purposes only.</p>
            <p className="para_16 mb_15">The availability, scope, pricing, timelines, and deliverables of any service are subject to individual project discussions, contractual agreements, technical assessments, and business requirements.</p>
            <p className="para_16 mb_30">Nothing on this website shall be interpreted as a legally binding service commitment or guarantee unless expressly agreed upon through a written contract.</p>

            <h2 className="title_40 mt_40 mb_20">Client Engagement</h2>
            <p className="para_16 mb_15">Any proposal, quotation, statement of work, project scope, implementation plan, or commercial agreement shared by Safal shall be governed by its respective contractual terms.</p>
            <p className="para_16 mb_30">Project execution, timelines, milestones, responsibilities, payment schedules, and deliverables will be defined separately under mutually executed agreements.</p>

            <h2 className="title_40 mt_40 mb_20">Career Opportunities</h2>
            <p className="para_16 mb_15">The Careers section of this website allows candidates to explore employment and internship opportunities within Safal.</p>
            <p className="para_16 mb_15">Submission of an application does not guarantee employment, interviews, or selection. Safal reserves the right to review, shortlist, verify, or reject applications at its sole discretion.</p>
            <p className="para_16 mb_30">Applicants are responsible for ensuring that all information submitted is accurate and complete.</p>

            <h2 className="title_40 mt_40 mb_20">Third-Party Links</h2>
            <p className="para_16 mb_15">This website may contain links to third-party websites or external resources for informational convenience.</p>
            <p className="para_16 mb_15">Safal does not endorse, control, or assume responsibility for the content, policies, services, or practices of any third-party websites.</p>
            <p className="para_16 mb_30">Users access such websites at their own discretion and risk.</p>

            <h2 className="title_40 mt_40 mb_20">User Submissions</h2>
            <p className="para_16 mb_15">Any information submitted through contact forms, inquiry forms, career applications, newsletters, or other communication channels must be truthful and lawful.</p>
            <p className="para_16 mb_15">Users agree not to submit:</p>
            <ul className="para_16 mb_15" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">False or misleading information</li>
              <li className="mb_10">Confidential information belonging to third parties</li>
              <li className="mb_10">Malicious content or software</li>
              <li className="mb_10">Content that infringes intellectual property rights</li>
              <li className="mb_10">Offensive, defamatory, or unlawful material</li>
            </ul>
            <p className="para_16 mb_30">Safal reserves the right to remove or disregard inappropriate submissions.</p>

            <h2 className="title_40 mt_40 mb_20">Confidentiality</h2>
            <p className="para_16 mb_15">Information voluntarily submitted through this website will be handled in accordance with our Privacy Policy.</p>
            <p className="para_16 mb_30">However, users should avoid transmitting confidential business information, proprietary data, passwords, or sensitive financial information through general contact forms unless specifically requested through secure communication channels.</p>

            <h2 className="title_40 mt_40 mb_20">Disclaimer</h2>
            <p className="para_16 mb_15">The information provided on this website is published in good faith for general informational purposes.</p>
            <p className="para_16 mb_15">While Safal makes reasonable efforts to maintain accurate and current information, we make no warranties or representations regarding:</p>
            <ul className="para_16 mb_15" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Accuracy</li>
              <li className="mb_10">Completeness</li>
              <li className="mb_10">Reliability</li>
              <li className="mb_10">Availability</li>
              <li className="mb_10">Suitability</li>
              <li className="mb_10">Timeliness</li>
            </ul>
            <p className="para_16 mb_30">Information may be updated, modified, or removed without prior notice.</p>

            <h2 className="title_40 mt_40 mb_20">Limitation of Liability</h2>
            <p className="para_16 mb_15">To the fullest extent permitted by applicable law, Safal shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from or related to:</p>
            <ul className="para_16 mb_15" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Use or inability to use the website</li>
              <li className="mb_10">Website interruptions</li>
              <li className="mb_10">Errors or omissions</li>
              <li className="mb_10">Technical failures</li>
              <li className="mb_10">Unauthorized access</li>
              <li className="mb_10">Data loss</li>
              <li className="mb_10">Reliance upon website information</li>
            </ul>
            <p className="para_16 mb_30">Users access and use the website entirely at their own risk.</p>

            <h2 className="title_40 mt_40 mb_20">Indemnification</h2>
            <p className="para_16 mb_30">You agree to indemnify and hold harmless Safal, its directors, employees, affiliates, consultants, partners, and representatives from any claims, liabilities, losses, damages, expenses, or legal costs arising from your violation of these Terms & Conditions or misuse of the website.</p>

            <h2 className="title_40 mt_40 mb_20">Privacy</h2>
            <p className="para_16 mb_15">Your use of this website is also governed by our Privacy Policy, which explains how personal information is collected, processed, stored, and protected.</p>
            <p className="para_16 mb_30">By using this website, you acknowledge that you have read and understood our Privacy Policy.</p>

            <h2 className="title_40 mt_40 mb_20">Changes to These Terms</h2>
            <p className="para_16 mb_15">Safal reserves the right to revise, modify, or update these Terms & Conditions at any time without prior notice.</p>
            <p className="para_16 mb_30">Revisions become effective immediately upon publication on this website. Continued use of the website after updates constitutes acceptance of the revised terms.</p>

            <h2 className="title_40 mt_40 mb_20">Governing Law</h2>
            <p className="para_16 mb_15">These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of the jurisdiction in which Safal operates.</p>
            <p className="para_16 mb_30">Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts of that jurisdiction.</p>

            <h2 className="title_40 mt_40 mb_20">Contact Information</h2>
            <p className="para_16 mb_15">For any questions regarding these Terms & Conditions or the use of this website, please contact:</p>
            <p className="para_16 mb_15">
              <strong>Safal</strong><br />
              Email: <a href="mailto:info@safal.com" style={{ color: 'var(--red)', textDecoration: 'underline' }}>[Insert Email Here]</a><br />
              Website: <a href="#" style={{ color: 'var(--red)', textDecoration: 'underline' }}>[Insert Website URL Here]</a>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
