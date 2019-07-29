import React from 'react';
import './footer.css';
import logo from './logo.png';
import ReactDOM from 'react-dom';

import StickyFooter from 'react-sticky-footer';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
	render(){
		return (
		<div className='Footer'>
	
		<StickyFooter 
		    bottomThreshold={50}

		    normalStyles={{
		    backgroundColor: "#99999",
		    padding: "2rem"
		    }}
		    stickyStyles={{
		    backgroundColor: "rgba(255,255,255,.8)",
		    padding: "1rem"
		    }}
		><img src={logo} alt=''/> 
	
		</StickyFooter>
		<div className='SocialIcon'>
		 	<SocialIcon url="https://www.instagram.com/ariellatayar/?hl=fr"  /> ariellatayar  
		 	<SocialIcon url="https://www.facebook.com/Ariella-Tayar-Event-Production-305904053498555/" /> Ariella Waitzman-Tayar  
		 	Tel: +972 (0) 50-5377307 
		 	
		 	Email: ariellatours@gmail.com

		 	
		</div>
	</div>
	);
	}
}
export default Footer;