import gallery1 from "../../assets/images/gallery_img_1.png";
import gallery2 from "../../assets/images/gallery_img_2.png";
import gallery3 from "../../assets/images/gallery_img_3.png";
import gallery4 from "../../assets/images/gallery_img_4.png";
import gallery5 from "../../assets/images/gallery_img_5.png";
import gallery6 from "../../assets/images/gallery_img_6.png";
import "./Gallery.scss";

const Gallery =({data})=> {

    return(
        <div className="gallery">
        <h1 className="gallery__heading">{data.gallery.title}</h1>
        <h2 className="gallery__subheading">{data.gallery.subTitle}</h2>
        <div className="gallery__images">
          <img src={gallery1} alt="gallery image 1" />
          <img src={gallery3} alt="gallery image 3" />
          <img src={gallery2} alt="gallery image 2" />
          <img src={gallery6} alt="gallery image 6" />
          <img src={gallery5} alt="gallery image 5" />
          <img src={gallery4} alt="gallery image 4" />
        </div>
      </div>
    );
}
export default Gallery;