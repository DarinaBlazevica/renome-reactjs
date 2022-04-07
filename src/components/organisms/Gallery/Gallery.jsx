import GalleryGrid from "../../molecules/GalleryGrid/GalleryGrid";
import "./Gallery.scss";

const Gallery = (props) => {

  const {gallery} = props;
  return (
    <div className="gallery">
      <h1 className="heading">{gallery.title}</h1>
      <h2 className="subheading">{gallery.subTitle}</h2>
      <GalleryGrid galleryGrid={gallery.galleryImages} />
    </div>
  );
};
export default Gallery;
