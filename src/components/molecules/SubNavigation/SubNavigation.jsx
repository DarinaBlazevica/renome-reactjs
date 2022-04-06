const SubNavigation = (props) => {
  return (
    <div className="subnavigation">     
      <nav className="top-nav__sub-navigation" id="sub-nav">
        <a className="top-nav__sub-navigation--back" id="sub-nav-back" href="#">
          <button className="top-nav__sub-navigation--backbtn" id="btn__back">
            <img
              src="./svg_icons/angle-left-solid-black.svg"
              alt="back button"
            />
          </button>
          <p>Back</p>
        </a>
        <a href="#">One Page</a>
        <a href="#">Portfolio</a>
        <a href="#">Shortcodes</a>
      </nav>
    </div>
  );
};
export default SubNavigation;
