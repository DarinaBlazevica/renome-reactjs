import "./About.scss";

const About = (props) => {
  return (
    <div className="about">
      <div className="about-image-container">
        <img
          className="about__image2"
          src={props.data.about.aboutImages[0].path}
          alt="about"
        />
        <img
          className="about__image1"
          src={props.data.about.aboutImages[1].path}
          alt="about"
        />
      </div>
      <div className="about-text-container">
        <h1 className="heading">{props.data.about.title}</h1>
        <h2 className="subheading">{props.data.about.subTitle}</h2>
        <p className="about__paragraph">{props.data.about.text}</p>
      </div>
    </div>
  );
};
export default About;
