import "./index.css"
import app from "../../assets/app.svg"
import Oval from "../../assets/Oval.svg"
import Shape from "../../assets/Shape.svg"
import TV from "../../assets/tv.svg"
import Bookmark from "../../assets/Bookmark.svg"
import Logo from "../../assets/Path.svg"
import Search from "../../assets/search.svg"
import { NavLink, Link } from "react-router-dom"

function MainLayout({children}) {

  function handleKeyUp(e) {
    let value = e.target.value;
    if(value.length > 3){
      console.log(value);
    } 
  }

  return (
  <div className="layout-wrapper">
    <div className="sidebar">
      <div className="menus">
        <Link to="/"><img className="first-logo" src={Logo} alt="logo" /></Link>
        <NavLink to="/"><img src={app} alt="app" /></NavLink>
        <NavLink to="/movies"><img src={Shape} alt="Movie" /></NavLink>
        <NavLink to="/series"><img src={TV} alt="tv" /></NavLink>
        <NavLink to="/bookmarks"><img src={Bookmark} alt="bookmark" /></NavLink>
      </div>
        <div className="user"><img src={Oval} alt="user icon" /></div>
    </div>
    <div className="main">
      <header className="header">
        <div className="search">
          <label htmlFor="search">
            <img src={Search} alt="alo" />
          </label>
          <input onKeyUp={handleKeyUp} className="search-field" placeholder="Search for movies or TV series" type="text" id="search" />
        </div>
      </header>
      <div className="content">{children}</div>
    </div>
  </div>
  )
}

export default MainLayout