import React from 'react'
import Img from '../../assets/img/profile2.png'
import './navbar.css'


const Navbar = () => {
  return (
    <div> 
      <header>
        <img src={Img}></img>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
        </ul>
        
<button>
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">Contact Me</span>
</button>
      </header>
    </div>
  )
}

export default Navbar