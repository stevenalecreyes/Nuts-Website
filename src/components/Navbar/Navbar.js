import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo.png';
import cart_icon from '../Assets/cart_icon.png';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

	const[menu, setMenu] = useState("home");

	return (
		<div className='Navbar'>
			<div className='nav-logo'>
				<img src={logo} alt="" width="100" height="100"/>
				<p>JC Healthier Choice</p> 
			</div>
			<ul className='nav-menu'>
				<li onClick={()=>{setMenu('home')}}><Nav.Link style={{ textDecoration: 'none' }} as={NavLink} to='/'>Home</Nav.Link>{menu==='home'?<hr/>:<></>}</li>
				<li onClick={()=>{setMenu('products')}}><Nav.Link style={{ textDecoration: 'none' }} as={NavLink} to='/products'>Products</Nav.Link>{menu==='products'?<hr/>:<></>}</li>
				<li onClick={()=>{setMenu('cart')}}><Nav.Link style={{ textDecoration: 'none' }} as={NavLink} to='/cart'>Cart</Nav.Link>{menu==='cart'?<hr/>:<></>}</li>
				<li onClick={()=>{setMenu('register')}}><Nav.Link style={{ textDecoration: 'none' }} as={NavLink} to='/register'>Register</Nav.Link>{menu==='register'?<hr/>:<></>}</li>
			</ul>
			<div className='nav-login-cart'>
				<Nav.Link style={{ textDecoration: 'none' }} as={NavLink} to='/login'><button>Login</button></Nav.Link>
				<Nav.Link style={{ textDecoration: 'none' }} as={NavLink} to='cart'><img src={cart_icon} alt="" /></Nav.Link>
				<div className='nav-cart-count'>0</div>
			</div>

		</div>
	)
} 