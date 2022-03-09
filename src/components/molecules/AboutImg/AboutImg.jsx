import "./AboutImg.scss"

const AboutImg = (props) => {
  
  return(
    <div className="about-image-container">              
      <img className="about__image2" src= { props.image[0].path } alt="about"/>  
      <img className="about__image1" src= { props.image[1].path } alt="about"/> 
    </div>
    );
}
export default AboutImg;