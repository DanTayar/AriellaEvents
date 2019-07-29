import React from 'react';
import './navbar.css';
import logo from './logo.png';

import { Link } from 'react-router-dom';


class Navbar extends React.Component {
	render(){
		return (
		<div className='Navbar'>
		<h1> 
		<a href="#home" alt=''>
		<img src={logo} alt='' /> </a>
		</h1>
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#weddingplanner">Wedding Planner</a></li>
			<li><a href="#eventproduction">Event Production</a></li>
			<li><Link to='/gallery'>Gallery</Link></li>
			<li><Link to='/travelagency'>Travel Agency</Link></li>
			<li><a href="#contactus">Contact Us</a></li>

		</ul>

		</div>

	);
	}
}
export default Navbar;