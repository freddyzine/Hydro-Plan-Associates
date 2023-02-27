import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import logo from '../logo2.png';

const Navbar = () => {
return (
	<>
	<Nav>
		<div class="logo2">
			<img src={logo} className="App-logo2" alt="logo" />
		</div>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Homepage
		</NavLink>
        <NavLink to="/about" activeStyle>
			About
		</NavLink>
		
		<NavLink to="/projects" activeStyle>
			Projects
		</NavLink>
		
        <NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
