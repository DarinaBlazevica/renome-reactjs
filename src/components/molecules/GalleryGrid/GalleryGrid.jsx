import gallery1 from "../../atoms/assets/images/gallery_img_1.png";
import gallery2 from "../../atoms/assets/images/gallery_img_2.png";
import gallery3 from "../../atoms/assets/images/gallery_img_3.png";
import gallery4 from "../../atoms/assets/images/gallery_img_4.png";
import gallery5 from "../../atoms/assets/images/gallery_img_5.png";
import gallery6 from "../../atoms/assets/images/gallery_img_6.png";
import "./GalleryGrid.scss";

const GalleryGrid =()=> {
    return (
    <div className="gallery__images">
        <img src={gallery1} alt="gallery image 1" />
        <img src={gallery3} alt="gallery image 3" />
        <img src={gallery2} alt="gallery image 2" />
        <img src={gallery6} alt="gallery image 6" />
        <img src={gallery5} alt="gallery image 5" />
        <img src={gallery4} alt="gallery image 4" />
      </div>
    );
}
export default GalleryGrid;