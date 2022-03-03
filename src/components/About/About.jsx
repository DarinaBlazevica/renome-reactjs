import img1 from "../../assets/images/about_img_1.png";
import img2 from "../../assets/images/about_img_2.png";
import "./About.scss";

const About = ({ data }) => {
  return (
    <div className="about">
     <div className="about-image-container">
        <img className="about__image2" id="house" src={img2} alt="house" />
        <img className="about__image1" id="window" src={img1} alt="window" />
      </div>
      <div className="about-text-container">
        <h1 className="about__heading">{data.about.title}</h1>
        <h2 className="about__subheading">{data.about.subTitle}</h2>
        <p className="about__paragraph">{data.about.text}</p>
      </div>
    </div>
  );
};

export default About;
