import About from "./components/organisms/About/About";
import Gallery from "./components/organisms/Gallery/Gallery";
import Footer from "./components/organisms/Footer/Footer";
import Carousel from "./components/organisms/Carousel/Carousel";
import TopNavigation from "./components/organisms/TopNavigation/TopNavigation";
import data from "./structure.json";
import "./App.scss";
import SubNavigation from "./components/molecules/SubNavigation/SubNavigation";

const App = () => {
  return (
    <div className="wrapper">
      <TopNavigation topnav={data.topnav} menu={data.menu} />
      <Carousel carousel={data.carousel} />
      <About about={data.about} />
      <Gallery gallery={data.gallery} />
      <Footer footer={data.footer} />
    </div>
  );
};
export default App;
