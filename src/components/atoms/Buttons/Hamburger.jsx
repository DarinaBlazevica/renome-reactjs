import "./Hamburger.scss";

const Hamburger = ({toggleMenu, hamburgerStyle}) => {  
    return(
    <div className="top-nav__hamburger" onClick={toggleMenu}>
        <div className={hamburgerStyle}></div>
        <div className={hamburgerStyle}></div>
        <div className={hamburgerStyle}></div>
    </div>
    )
}
export default Hamburger;