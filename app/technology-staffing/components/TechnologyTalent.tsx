import Image from 'next/image';
import './TechnologyTalent.css';

const pageData = {
  hero: {
    title: (
      <>
        <strong>Connecting You with <br />
          <span>Top Tech Talent</span></strong>
      </>
    ),
    description: "We provide comprehensive technology staffing solutions to help you build high-performing teams.",
    imageSrc: "/images/Industrial-Automation-&-IoT/Technology-Aligned-Implementation.webp",
    imageAlt: "Technology Staffing Hero",
  },
  talent: {
    title: "Technology Talent, Delivered with Structure",
    description1: "Safal is an IT staffing company delivering technology staffing services aligned with business requirements, project timelines, and technical environments.",
    description2: "Through structured technology recruitment services and IT staff augmentation services, organizations can access qualified talent without compromising on quality or speed.",
    imageSrc: "/images/Technology-Staffing/Technology-Talent.webp",
    imageAlt: "Tech Talent Graphic",
  }
};

export default function TechnologyTalent() {
  const data = pageData.talent;

  return (
    <section className="mt_80">
      <div className="container-1600">
       <div className="talent_container">
         <div className="talent_content">
          <h2 className='title_60'>{data.title}</h2>
          <p>{data.description1}</p>
          <p>{data.description2}</p>
        </div>
        
        <div className="talent_image_wrapper">
          <Image 
            src={data.imageSrc} 
            alt={data.imageAlt} 
            width={800} 
            height={500} 
            className="talent_image"
          />
        </div>
       </div>
      </div>
    </section>
  );
}
