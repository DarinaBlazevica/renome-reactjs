import AboutImg from "../../molecules/AboutImg/AboutImg";
import AboutText from "../../molecules/AboutText/AboutText"
import "./About.scss";

const About = (props) => {
  return ( 
    <div className="about"> 
      <AboutImg image = {props.data.about.aboutImages}/>     
      <AboutText aboutContent = {props.data.about}/>
    </div>
  );
};
export default About;
