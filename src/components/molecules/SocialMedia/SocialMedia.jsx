import "./SocialMedia.scss";

const SocialMedia = (props) => {

  const {socialMedia} = props;
  return (
    <div className="contact__socialmedia">
      {socialMedia.map((item, i) => (
        <div key={i}>
          <img src={item.path} alt="socialmedia" />
        </div>
      ))}
    </div>
  );
};
export default SocialMedia;
