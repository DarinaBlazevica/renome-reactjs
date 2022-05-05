import "./GalleryGrid.scss";

const GalleryGrid = (props) => {
  const { galleryGrid } = props;

  return (
    <div className="gallery__images">
      {galleryGrid.map((item, i) => (
        <img key={i} src={item.path} alt={item.alt} />
      ))}
    </div>
  );
};
export default GalleryGrid;
