
import './App.css';
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

function App() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className>
      <div className="head">
        <div className="logo">
          <a href="#">COINFLIP</a>
        </div>
        <div className='div-container-nav'> 
        <nav className="navbar" ref={navRef}>
          <button className='nav-btn' onClick={showNavbar}>
            <IoIosArrowRoundForward/>
          </button>
          <a href="#">Buy / Sell</a>
          <a href="#">Grow</a>
          <a href="#">Markets</a>
          <a href="#">Business</a>
          <a href="#">Support</a>
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavbar} >
          <FaBars />
        </button>
        </div>
        <div className="navlink" >
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
      <div className="content">
        <div className='content-center'>
          <h1 className="title">We make crypto clear and simple</h1>
          <h3 className="description"> Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</h3>
        </div>
        <button className="btn-getstarted">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
