import about_img_1 from "./assets/images/about_img_1.png";
import about_img_2 from "./assets/images/about_img_2.png";
import data from "./structure.json";

function About() {
  return (
    <div className="about">
      <img className="about__image1" src={about_img_2} alt="house" />
      <img className="about__image2" src={about_img_1} alt="window" />
      <h1 className="about__heading">{data.about.title}</h1>
      <h2 className="about__subheading">{data.about.subTitle}</h2>
      <p className="about__paragraph">{data.about.text}</p>
    </div>
  );
}

export default About;
