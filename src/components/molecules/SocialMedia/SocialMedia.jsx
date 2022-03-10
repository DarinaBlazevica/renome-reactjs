import "./SocialMedia.scss"

const SocialMedia = (props) => {
  return (
    <div className="contact__socialmedia">
          {props.socialMedia.map((item,i) =>
          <div key={i}>
            <img src={item.path} alt="socialmedia" />
          </div>
          )}
        </div>
  );
};
export default SocialMedia;
