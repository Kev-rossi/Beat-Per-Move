import './Navbar.css';
import profil from './../assets/randomprofile.png';
import burger from './../assets/burger.png';

const Navbar = () => {

  return(
    <div className="header-container">
        <img src={burger} alt="menuburger" className="burger"/>
      <h1 className="logo">BeatPerMove</h1>
    <img src={profil} alt="profil" className="profil"/>
    </div>
  )
}

export default Navbar;