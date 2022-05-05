import "./About.scss";

const About = (props) => {
  const { About } = props;
  return (
    <div className="about">
      <div className="about-image-container">
        <img
          className="about__image2"
          src={About.aboutImages[0].path}
          alt={About.aboutImages[0].alt}
        />
        <img
          className="about__image1"
          src={About.aboutImages[1].path}
          alt={About.aboutImages[1].alt}
        />
      </div>
      <div className="about-text-container">
        <h1 className="heading">{About.title}</h1>
        <h2 className="subheading">{About.subTitle}</h2>
        <p className="about__paragraph">{About.text}</p>
      </div>
    </div>
  );
};
export default About;
