import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import TopNavigation from "../TopNavigation/TopNavigation";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import React from "react";

const Wrapper = (props) => {
  const { data } = props;

  return (
    <div className="wrapper">
      <TopNavigation
        TopNav={data.topnav}
        NavigationMenu={data.menu}
        Cart={data.cartMenu}
      />
      <Carousel CarouselSlider={data.carousel} />
      <About About={data.about} />
      <Gallery Gallery={data.gallery} />
      <Footer Footer={data.footer} />
    </div>
  );
};
export default Wrapper;
