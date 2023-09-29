import React from 'react'
import Img from '../../assets/img/profile2.png'
import './navbar.css'


const Navbar = () => {
  return (
    <div> 
      <header>
        <img src={Img}></img>
        <nav>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
        </ul>
        </nav>
        
<button>
    <span className="circle1"></span>
    <span className="circle2"></span>
    <span className="circle3"></span>
    <span className="circle4"></span>
    <span className="circle5"></span>
    <span className="text">Contact Me</span>
</button>
{/* <div id="mobile">
        
        </div> */}
      </header>

      
    
    </div>
  )
}

export default Navbar