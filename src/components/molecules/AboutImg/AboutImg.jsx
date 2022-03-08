import "./AboutImg.scss"

const AboutImg = ({ data }) => {
    return(
    <div className="about-image-container">              
      <img className="about__image2"src={ data.about.aboutImages[1].path} alt="about"/>   
      <img className="about__image1"src={ data.about.aboutImages[0].path} alt="about"/>    
    </div>
    );
}
export default AboutImg;