import Heading from "../../atoms/Heading/Heading";
import Subheading from "../../atoms/Subheading/Subheading";
import AboutImg from "../../molecules/AboutImg/AboutImg";
import "./About.scss";

const About = ({ data }) => {
  return (
    <div className="about">
      <AboutImg />
      <div className="about-text-container">
        <Heading  data = {data.about.title}/>
        <Subheading data ={data.about.subTitle}/>
        <p className="about__paragraph">{data.about.text}</p>
      </div>
    </div>
  );
};
export default About;
