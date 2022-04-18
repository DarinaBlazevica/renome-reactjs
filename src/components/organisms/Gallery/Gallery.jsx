import GalleryGrid from "../../molecules/GalleryGrid/GalleryGrid";
import "./Gallery.scss";

const Gallery = (props) => {
  const { Gallery } = props;

  return (
    <div className="gallery">
      <h1 className="heading">{Gallery.title}</h1>
      <h2 className="subheading">{Gallery.subTitle}</h2>
      <GalleryGrid galleryGrid={Gallery.galleryImages} />
    </div>
  );
};
export default Gallery;
