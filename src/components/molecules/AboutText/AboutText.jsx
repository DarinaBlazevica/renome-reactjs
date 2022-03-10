const AboutText = (props) => {
  return (
    <div className="about-text-container">
      <h1 className="heading">{props.aboutContent.title}</h1>
      <h2 className="subheading">{props.aboutContent.subTitle}</h2>
      <p className="about__paragraph">{props.aboutContent.text}</p>
    </div>
  );
};

export default AboutText;
