import About from "./components/organisms/About/About";
import Gallery from "./components/organisms/Gallery/Gallery";
import Footer from "./components/organisms/Footer/Footer";
import Carousel from "./components/organisms/Carousel/Carousel";
import data from "./structure.json";
import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Carousel carousel={data.carousel} />    
      <About about={data.about} />
      <Gallery gallery={data.gallery} />
      <Footer footer={data.footer} />
 
    </div>
  );
};
export default App;
