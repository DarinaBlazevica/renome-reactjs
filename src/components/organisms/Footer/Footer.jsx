import SocialMedia from "../../molecules/SocialMedia/SocialMedia";
import "./Footer.scss";

const Footer = (props) => {

  const {footer} = props;
  return (
    <footer>
      <div className="contact">
        <h1 className="contact__follow-us">{footer.followUs}</h1>
        <SocialMedia socialMedia={footer.socialMedia} />
        <p className="renome">{footer.title}</p>
        <p className="contact__copyright">{footer.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;
