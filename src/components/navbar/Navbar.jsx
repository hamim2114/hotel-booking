import "./navbar.css"
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {useThemeUpdate, useTheme} from '../../context/DarkModeContext'
import {MdDarkMode,MdOutlineDarkMode} from 'react-icons/md'

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const setDarkMode = useThemeUpdate();
  const darkTheme = useTheme();
  console.log(darkTheme)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link href="/" style={{color:'inherit', textDecoration:'none'}}>
          <span className="logo">Hamim booking</span>
        </Link>
        <div className="navItems">
          <span onClick={setDarkMode}>{darkTheme ? <MdDarkMode/> : <MdOutlineDarkMode/>}</span>
        </div>
        {user ? user.username : <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>}
        
      </div>
    </div>
  )
}

export default Navbar