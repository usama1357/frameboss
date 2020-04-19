import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './header.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import usericon from '../assets/header/user-account-icon.svg'
import carticon from '../assets/header/cart-icon.svg'


export default function Navbar() {

  return(
    <div className="navbar">
    <h2>FRAMEBOSS</h2>
      <Nav>
      <NavItem className="services">
        <NavLink className="dropdown dropdown1" href="#">Services<span><ExpandMoreIcon/></span></NavLink>
        <div class="dropdown-services">
          <a href="#">Gifts</a>
          <a href="#">Diploma Framing</a>
          <a href="#">Jersey Framing</a>
          <a href="#">Canvas Framing</a>
          <a href="#">Instagram Framing</a>
          <a href="#">Designer's Choice Framing</a>
          <a href="#">Gallery Wall Framing</a>
          <a href="#">Business Framing</a>
          <a href="#">Art and Vendor Framing</a>
        </div>
      </NavItem >
      <NavItem className="frames">
        <NavLink href="#" className="dropdown dropdown2" >Frames<span><ExpandMoreIcon/></span></NavLink>
        <div class="dropdown-frames">
          <a href="#">Our Frames</a>
          <a href="#">What we frame</a>
        </div>
      </NavItem>
      <NavItem >
        <NavLink className="link" href="#">Blog</NavLink>
      </NavItem>
      <NavItem className="link">
        <NavLink className="link" href="#">Contact Us</NavLink>
      </NavItem>

      <NavItem className="usericon">
      <img src={usericon} alt="user icon"></img>
      </NavItem>
      <NavItem className="carticon">
      <img src={carticon} alt="user icon"></img>
      </NavItem>
      </Nav>
    </div>
  )

}
