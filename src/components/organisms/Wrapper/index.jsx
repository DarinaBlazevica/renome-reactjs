import About from "../About";
import Carousel from "../Carousel";
import TopNavigation from "../TopNavigation";
import Gallery from "../Gallery";
import Footer from "../Footer";
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
