import img1 from "../../atoms/assets/images/about_img_1.png";
import img2 from "../../atoms/assets/images/about_img_2.png";
import "./AboutImg.scss"

const AboutImg =()=> {
    return(
    <div className="about-image-container">
        <img className="about__image2" id="house" src={img2} alt="house" />
        <img className="about__image1" id="window" src={img1} alt="window" />
      </div>
    );
}
export default AboutImg;