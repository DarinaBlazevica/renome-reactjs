import "./Hamburger.scss";

const Hamburger = ({toggleBurger, hamburgerStyle}) => { 

    return(
    <div className="top-nav__hamburger" onClick={toggleBurger}>
        <div className={hamburgerStyle}></div>
        <div className={hamburgerStyle}></div>
        <div className={hamburgerStyle}></div>
    </div>
    )
}
export default Hamburger;