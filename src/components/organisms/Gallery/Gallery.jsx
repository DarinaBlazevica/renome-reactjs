import "./Gallery.scss";
import Heading from "../../atoms/Heading/Heading";
import Subheading from "../../atoms/Subheading/Subheading";
import GalleryGrid from "../../molecules/GalleryGrid/GalleryGrid";

const Gallery =( {data} )=> {

    return(
      <div className="gallery">
        <Heading  data = {data.gallery.title}/>
        <Subheading data ={data.gallery.subTitle}/>
        <GalleryGrid data ={data}/>     
      </div>
    );
}
export default Gallery;