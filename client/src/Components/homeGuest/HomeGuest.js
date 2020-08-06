import React from "react";
import logo from './assets/logo.png'
import img1 from './assets/portfolio-img1.jpg'
import img2 from './assets/portfolio-img2.jpg'
import img3 from './assets/portfolio-img3.jpg'
import img4 from './assets/portfolio-img4.jpg'
import img5 from './assets/portfolio-img5.jpg'
import img6 from './assets/portfolio-img6.jpg'
import img7 from './assets/portfolio-img7.jpg'
import about from './assets/about-img.jpg'
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import './HomeGuest.css'

const HomeGuest = () => {
  return (
    <div className='homeGuest'>
		<Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Form inline>
        <Link to="/login">
          <Button variant="outline-light">Log in</Button>
        </Link>
        <Link to="/register">
          <Button variant="outline-light">Sign Up</Button>
        </Link>
      </Form>
    </Navbar>
      
 {/* home section  */}
<div id="home">
	<div className="container">
		<div className="row">
			<div className="col-md-5 col-sm-3"></div>
			<div className="col-md-7 col-sm-9">
				<h3>welcome to</h3>
				<h1>Onetel Design Studio</h1>
			</div>
		</div>
	</div>
</div>
 {/* divider section  */}
<div className="divider">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-sm-6">
				<div className="divider-wrapper divider-one">
					<i className="fa fa-laptop"></i>
					<h2>Responsive</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="divider-wrapper divider-two">
					<i className="fa fa-mobile"></i>
					<h2>Easy to use</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
				</div>
			</div>
			<div className="col-md-4 col-sm-12">
				<div className="divider-wrapper divider-three">
					<i className="fa fa-life-ring"></i>
					<h2>Quick Support</h2>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
				</div>
			</div>
		</div>
	</div>
</div>
 {/* about section  */}
<div id="about">
	<div className="container">
		<div className="row">
			<div className="col-md-6 col-sm-12">
				<img src={about} className="img-responsive" alt="about img"/>
			</div>
			<div className="col-md-6 col-sm-12 about-des">
				<h2>Startup Business</h2>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.</p>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
				<a href="about.html" className="btn btn-default">LEARN MORE</a>
			</div>
		</div>
	</div>
</div>
{/* portfolio section  */}
<div id="portfolio">
	<div className="container">
		<div className="row">
			<div className="col-md-offset-2 col-md-8 col-sm-12">
				<h2>Recent Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
			</div>
         </div>
         
         <div className="row mt30">
            
			<div className="col-md-4 col-sm-4 col-xs-6">
				<img src={img1} alt="portfolio img"/>
			</div>
			<div className="col-md-4 col-sm-4 col-xs-6">
				<img src={img2} alt="portfolio img"/>
			</div>
			<div className="col-md-4 col-sm-4 col-xs-6">
				<img src={img3} alt="portfolio img"/>
			</div>
            
			<div className="col-md-3 col-sm-6 col-xs-6">
				<img src={img4} alt="portfolio img"/>
			</div>
			<div className="col-md-3 col-sm-6 col-xs-6">
				<img src={img5} alt="portfolio img"/>
			</div>
			<div className="col-md-3 col-sm-6 col-xs-6">
				<img src={img6} alt="portfolio img"/>
			</div>
			<div className="col-md-3 col-sm-6 col-xs-12">
				<img src={img7} alt="portfolio img"/>
</div>
			<div className="col-md-12 col-sm-12"> 
				<a rel="nofollow"  className="btn btn-default">View More</a>
			</div>
		</div>
	</div>
</div>		
 {/* footer section  */}
<footer>
	<div className="container">
		<div className="row">
        
			<div className="col-md-5 col-sm-4">
				<img src={logo} className="img-responsive" alt="logo"/>
				<p>Onetel is free Bootstrap v3.3.5 HTML5 layout from 
                <a rel="nofollow" href="http://www.facebook.com/templatemo" target="_parent">templatemo</a> website.
                Feel free to use it for your website.</p>
				<p><i className="fa fa-phone"></i> 010-020-0340</p>
				<p><i className="fa fa-envelope-o"></i> info@company.com</p>
              <p><i className="fa fa-globe"></i> www.company.com</p>
			</div>

			<div className="col-md-3 col-sm-4">
				<h3>Useful Links</h3>
				<p><a href="#">HTML5 Templates</a></p>
				<p><a href="#">CSS3 Tricks</a></p>
				<p><a href="#">Design Blog</a></p>
				<p><a href="#">Animations</a></p>
			</div>
            
			<div className="col-md-4 col-sm-4 newsletter">
				<h3>Newsletter</h3>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
				<div className="input-group">
           	    	<form action="#" method="post">
                        <input name="email" type="email" placeholder="Enter your email" className="form-control" />
                    	<button type="submit" name="submit" className="btn email">Submit</button>
                  	</form>
				 </div>
			</div>
            
		</div>
	</div>
</footer>
    </div>
    
  );
};

export default HomeGuest
