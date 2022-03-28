const ImageContainer = (props) => {

    return (
    <div className="carousel_slider">
        {props.carouselImages.map((slides, i) => (
        <div key={i}>
          <img src={slides.path} alt="galleryimg" />
        </div>
      ))}
    </div>
    )
}
export default ImageContainer;