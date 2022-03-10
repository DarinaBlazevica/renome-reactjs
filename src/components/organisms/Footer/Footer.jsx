import SocialMedia from "../../molecules/SocialMedia/SocialMedia";
import "./Footer.scss"

const Footer = (props) => {
  return (
    <footer>
      <div className="contact">
        <h1 className="contact__follow-us">{props.data.footer.followUs}</h1> 
        <SocialMedia socialMedia = {props.data.footer.socialMedia}/>
        <p className="renome">{props.data.footer.title}</p>
        <p className="contact__copyright">{props.data.footer.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;
