import SocialMedia from "../../molecules/SocialMedia/SocialMedia";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer>
      <div className="contact">
        <h1 className="contact__follow-us">{props.footer.followUs}</h1>
        <SocialMedia socialMedia={props.footer.socialMedia} />
        <p className="renome">{props.footer.title}</p>
        <p className="contact__copyright">{props.footer.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;
