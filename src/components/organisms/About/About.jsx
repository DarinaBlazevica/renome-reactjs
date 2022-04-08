import "./About.scss";

const About = (props) => {
  const {about} = props;
  return (
    <div className="about">
      <div className="about-image-container">
        <img
          className="about__image2"
          src={about.aboutImages[0].path}
          alt="about"
        />
        <img
          className="about__image1"
          src={about.aboutImages[1].path}
          alt="about"
        />
      </div>
      <div className="about-text-container">
        <h1 className="heading">{about.title}</h1>
        <h2 className="subheading">{about.subTitle}</h2>
        <p className="about__paragraph">{about.text}</p>
      </div>
    </div>
  );
};
export default About;
