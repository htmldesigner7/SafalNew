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
    imageSrc: "/images/blogs-inner.webp",
    imageAlt: "Technology Staffing Hero",
  },
  talent: {
    title: "Technology Talent",
    description1: "We connect you with the most talented tech professionals globally. Our rigorous vetting process ensures you get top-tier engineers, designers, and managers for your specific needs.",
    description2: "Whether you&apos;re looking to scale your team quickly or need specialized skills for a critical project, our extensive network and expertise allow us to deliver perfectly matched candidates.",
    imageSrc: "/images/blogs-inner.webp",
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
