import AboutImg from "../../molecules/AboutImg/AboutImg";
import "./About.scss";

const About = (props) => {
  return ( 
    <div className="about"> 
      <AboutImg image = {props.data.about.aboutImages}/>
      <div className="about-text-container">
        <h1 className="heading">{props.data.about.title}</h1>
        <h2 className="subheading">{props.data.about.subTitle}</h2>
        <p className="about__paragraph">{props.data.about.text}</p>
      </div>
    </div>
  );
};
export default About;
