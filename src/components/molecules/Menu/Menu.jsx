import "./Menu.scss";

const Menu = ({menu, showMenu}) => {   
  return (
    <div className={showMenu}>
      <a href={menu.url}>{menu[0].title}
        <img className="search-icon" src={menu[0].path} alt="search" /></a>
      <a href={menu.url}>{menu[1].title}</a>
      <a href={menu.url}>{menu[2].title}</a>
      <a href={menu.url}>{menu[3].title}</a>
      <a href={menu.url}>{menu[4].title}</a>
      <a className = "menu__feature" href={menu.url}>{menu[5].title}
      <button type="button" className="menu-feature__btn">
        <img src={menu[5].path} alt="features button"/>
      </button>
      </a>
      <a href={menu.url}>{menu[6].title}</a>
      <a href={menu.url}>{menu[7].title}</a>
    </div>     
  )
}
export default Menu;