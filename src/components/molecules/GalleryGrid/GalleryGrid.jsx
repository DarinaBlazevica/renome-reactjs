import "./GalleryGrid.scss";

const GalleryGrid = (props) => {
  return (
    <div className="gallery__images">
      {props.galleryGrid.map((item, i) => (
        <div key={i}>
          <img src={item.path} alt="galleryimg" />
        </div>
      ))}
    </div>
  );
};
export default GalleryGrid;
