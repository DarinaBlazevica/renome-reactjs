
import "./GalleryGrid.scss";

const GalleryGrid = ({ data }) => {
    return (  
      <div className="gallery__images">
          {data.gallery.galleryImages.map((item,i) =>
          <div key={i}>
            <img src={item.path} alt="galleryimg" />
          </div>
          )}
        </div>
    );
    
}
export default GalleryGrid;