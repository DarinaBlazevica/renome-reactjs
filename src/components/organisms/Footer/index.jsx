import SocialMedia from "../../molecules/SocialMedia";
import "./Footer.scss";

const Footer = (props) => {
  const { Footer } = props;
  return (
    <footer>
      <div className="contact">
        <h1 className="contact__follow-us">{Footer.followUs}</h1>
        <SocialMedia socialMedia={Footer.socialMedia} />
        <p className="renome">{Footer.title}</p>
        <p className="contact__copyright">{Footer.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;
