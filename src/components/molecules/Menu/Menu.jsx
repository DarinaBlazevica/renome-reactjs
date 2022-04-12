import "./Menu.scss";

const Menu = ({ menu, showMenu, openSubMenu }) => {
  const setMenuContent = (item, i) => {
    if (item.title === "Search") {
      return (
        <a key={i}>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            title="Type in a category"
          />
          <img className="search-icon" src={item.path} alt="search-bar" />
        </a>
      );
    } else if (item.title === "Features") {
      return (
        <a
          className="menu__feature"
          href={item.url}
          key={i}
          onClick={openSubMenu}
        >
          {item.title}
          <button type="button" className="menu-feature__btn">
            <img src={item.path} alt="features-button" />
          </button>
        </a>
      );
    } else {
      return (
        <a href={item.url} key={i}>
          {item.title}
        </a>
      );
    }
  };
  return (
    <div className={showMenu}>
      {menu.map((item, i) => {
        return setMenuContent(item, i);
      })}
    </div>
  );
};
export default Menu;
