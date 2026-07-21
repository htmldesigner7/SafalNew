import { baseUrl } from '@/utils/baseUrl';
import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';

export default function PrivacyPolicyPage() {
  const heroData = {
    title: <strong>Privacy Policy</strong>,
    description: "Safal (\"Safal,\" \"we,\" \"our,\" or \"us\") is committed to protecting your privacy and maintaining the confidentiality of the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you visit our website, engage with our services, submit inquiries, apply for careers, or otherwise interact with us.",
    imageSrc: `${baseUrl}/images/banner-images/Corporate-Governance.webp`,
    imageAlt: "Privacy Policy Hero Graphic",
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
            
            <p className="para_16 mb_40">
              By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy.
            </p>

            <h2 className="title_40 mt_40 mb_20">Information We Collect</h2>
            <p className="para_16 mb_20">We may collect personal and business information through various interactions with our website and services.</p>
            
            <h3 className="title_24 mt_30 mb_15">Personal Information</h3>
            <p className="para_16 mb_15">This may include:</p>
            <ul className="para_16 mb_30" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Full name</li>
              <li className="mb_10">Email address</li>
              <li className="mb_10">Phone number</li>
              <li className="mb_10">Company name</li>
              <li className="mb_10">Job title</li>
              <li className="mb_10">Business address</li>
              <li className="mb_10">Country or location</li>
              <li className="mb_10">Resume or employment information (for career applications)</li>
              <li className="mb_10">Information voluntarily submitted through forms or communications</li>
            </ul>

            <h3 className="title_24 mt_30 mb_15">Business Information</h3>
            <p className="para_16 mb_15">Depending on the nature of your inquiry or engagement, we may also collect:</p>
            <ul className="para_16 mb_30" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Project requirements</li>
              <li className="mb_10">Business objectives</li>
              <li className="mb_10">Technology preferences</li>
              <li className="mb_10">Industry information</li>
              <li className="mb_10">Service interests</li>
              <li className="mb_10">Operational requirements</li>
            </ul>

            <h3 className="title_24 mt_30 mb_15">Technical Information</h3>
            <p className="para_16 mb_15">When you visit our website, certain information may be collected automatically, including:</p>
            <ul className="para_16 mb_30" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">IP address</li>
              <li className="mb_10">Browser type</li>
              <li className="mb_10">Device information</li>
              <li className="mb_10">Operating system</li>
              <li className="mb_10">Pages visited</li>
              <li className="mb_10">Referral source</li>
              <li className="mb_10">Date and time of access</li>
              <li className="mb_10">Website usage behavior</li>
              <li className="mb_10">Cookies and analytics data</li>
            </ul>

            <h2 className="title_40 mt_40 mb_20">How We Use Your Information</h2>
            <p className="para_16 mb_15">Safal uses the information collected to:</p>
            <ul className="para_16 mb_20" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Respond to inquiries and requests</li>
              <li className="mb_10">Provide information about our services</li>
              <li className="mb_10">Deliver technology, consulting, staffing, advisory, and professional services</li>
              <li className="mb_10">Process career applications</li>
              <li className="mb_10">Schedule consultations and meetings</li>
              <li className="mb_10">Improve website performance and user experience</li>
              <li className="mb_10">Understand visitor behavior and website analytics</li>
              <li className="mb_10">Maintain website security</li>
              <li className="mb_10">Comply with legal and regulatory obligations</li>
              <li className="mb_10">Communicate service updates, business information, or relevant announcements where appropriate</li>
            </ul>
            <p className="para_16 mb_30">We only process personal information for legitimate business purposes and applicable legal requirements.</p>

            <h2 className="title_40 mt_40 mb_20">Recruitment and Career Applications</h2>
            <p className="para_16 mb_15">If you apply for employment or internships through our Careers section, we may collect information such as your resume, qualifications, employment history, education, certifications, and other relevant details.</p>
            <p className="para_16 mb_15">This information is used solely for recruitment, candidate evaluation, interview coordination, employment verification, and future hiring opportunities where appropriate.</p>
            <p className="para_16 mb_30">Submission of an application does not guarantee employment or interview selection.</p>

            <h2 className="title_40 mt_40 mb_20">Cookies and Analytics</h2>
            <p className="para_16 mb_15">Our website may use cookies and similar technologies to improve functionality, remember user preferences, analyze website performance, and enhance user experience.</p>
            <p className="para_16 mb_15">Cookies may be used to:</p>
            <ul className="para_16 mb_20" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Improve website navigation</li>
              <li className="mb_10">Understand visitor interactions</li>
              <li className="mb_10">Measure website performance</li>
              <li className="mb_10">Support security and functionality</li>
              <li className="mb_10">Enhance future website improvements</li>
            </ul>
            <p className="para_16 mb_30">Users may disable cookies through their browser settings; however, certain website features may not function as intended.</p>

            <h2 className="title_40 mt_40 mb_20">Information Sharing</h2>
            <p className="para_16 mb_15">Safal does not sell, rent, or trade personal information.</p>
            <p className="para_16 mb_15">Information may be shared only when necessary with:</p>
            <ul className="para_16 mb_20" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Authorized employees and business teams</li>
              <li className="mb_10">Technology partners supporting website operations</li>
              <li className="mb_10">Professional service providers working under confidentiality obligations</li>
              <li className="mb_10">Government or regulatory authorities where legally required</li>
              <li className="mb_10">Legal advisors when necessary to protect our rights or comply with applicable laws</li>
            </ul>
            <p className="para_16 mb_30">Any third parties receiving information are expected to maintain appropriate confidentiality and security standards.</p>

            <h2 className="title_40 mt_40 mb_20">Data Security</h2>
            <p className="para_16 mb_15">Safal maintains reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, disclosure, alteration, misuse, or destruction.</p>
            <p className="para_16 mb_30">While we implement appropriate security measures, no method of internet transmission or electronic storage can be guaranteed to be completely secure.</p>

            <h2 className="title_40 mt_40 mb_20">Data Retention</h2>
            <p className="para_16 mb_15">Personal information is retained only for as long as necessary to:</p>
            <ul className="para_16 mb_20" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Fulfill the purpose for which it was collected</li>
              <li className="mb_10">Provide requested services</li>
              <li className="mb_10">Meet legal or regulatory requirements</li>
              <li className="mb_10">Resolve disputes</li>
              <li className="mb_10">Maintain business records where appropriate</li>
            </ul>
            <p className="para_16 mb_30">Information that is no longer required may be securely deleted or anonymized.</p>

            <h2 className="title_40 mt_40 mb_20">Your Rights</h2>
            <p className="para_16 mb_15">Depending on applicable laws and regulations, you may have the right to:</p>
            <ul className="para_16 mb_20" style={{ listStyleType: 'disc', paddingLeft: '24px' }}>
              <li className="mb_10">Access your personal information</li>
              <li className="mb_10">Request correction of inaccurate information</li>
              <li className="mb_10">Request deletion of personal information</li>
              <li className="mb_10">Withdraw consent where processing is based on consent</li>
              <li className="mb_10">Object to certain processing activities</li>
              <li className="mb_10">Request restriction of processing</li>
              <li className="mb_10">Request information regarding how your data is used</li>
            </ul>
            <p className="para_16 mb_30">Requests may be subject to applicable legal or regulatory limitations.</p>

            <h2 className="title_40 mt_40 mb_20">Third-Party Websites</h2>
            <p className="para_16 mb_15">Our website may contain links to third-party websites, software platforms, or external resources.</p>
            <p className="para_16 mb_30">Safal is not responsible for the privacy practices, security measures, or content of third-party websites. Users are encouraged to review the respective privacy policies of those websites before providing any personal information.</p>

            <h2 className="title_40 mt_40 mb_20">International Data Processing</h2>
            <p className="para_16 mb_15">As Safal works with organizations across multiple industries and regions, information may be processed or accessed by authorized personnel or service providers operating in different jurisdictions, where permitted by applicable law.</p>
            <p className="para_16 mb_30">Appropriate safeguards will be implemented to protect personal information during such processing.</p>

            <h2 className="title_40 mt_40 mb_20">Children&apos;s Privacy</h2>
            <p className="para_16 mb_15">Our website and professional services are intended for business users and individuals over the age required by applicable law.</p>
            <p className="para_16 mb_30">We do not knowingly collect personal information from children. If such information is inadvertently collected, appropriate steps will be taken to remove it promptly.</p>

            <h2 className="title_40 mt_40 mb_20">Changes to This Privacy Policy</h2>
            <p className="para_16 mb_15">Safal may revise this Privacy Policy periodically to reflect changes in legal requirements, business practices, technologies, or services.</p>
            <p className="para_16 mb_30">Any updates will become effective immediately upon publication on this website. Continued use of the website after such updates constitutes acceptance of the revised Privacy Policy.</p>

            <h2 className="title_40 mt_40 mb_20">Contact Us</h2>
            <p className="para_16 mb_15">If you have any questions regarding this Privacy Policy, your personal information, or our privacy practices, please contact us:</p>
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
