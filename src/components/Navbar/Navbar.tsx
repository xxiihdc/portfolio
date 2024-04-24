import React, { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => (
  <div className="Navbar" data-testid="Navbar">
			<div className="header-area">
			    <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
			        <div className="container">

			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i className="fa fa-bars"></i>
			                </button>
			                <a className="navbar-brand" href="index.html">browny</a>
			            </div>

			            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li className=" smooth-menu active"></li>
			                    <li className=" smooth-menu"><a href="#education">education</a></li>
			                    <li className="smooth-menu"><a href="#skills">skills</a></li>
			                    <li className="smooth-menu"><a href="#experience">experience</a></li>
			                    <li className="smooth-menu"><a href="#profiles">profile</a></li>
			                    <li className="smooth-menu"><a href="#portfolio">portfolio</a></li>
			                    <li className="smooth-menu"><a href="#clients">clients</a></li>
			                    <li className="smooth-menu"><a href="#contact">contact</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			</div>
  </div>
);

export default Navbar;
