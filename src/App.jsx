import About from "./components/organisms/About/About";
import Gallery from "./components/organisms/Gallery/Gallery";
import Footer from "./components/organisms/Footer/Footer";
import Carousel from "./components/organisms/Carousel/Carousel";
import TopNavigation from "./components/organisms/TopNavigation/TopNavigation";
import data from "./structure.json";
import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <TopNavigation TopNav={data.topnav} NavigationMenu={data.menu} Cart={data.cartMenu}/>
      <Carousel CarouselSlider={data.carousel} />
      <About About={data.about} />
      <Gallery Gallery ={data.gallery} />
      <Footer Footer={data.footer} />
    </div>
  );
};
export default App;
