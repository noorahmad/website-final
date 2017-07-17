import React from 'react'

const Navbar = () => 

<header id="header" className="alt">
	<h1><a href="index.html">Noor Ahmad</a></h1>
		<nav id="nav">
			<ul>
				<li className="special">
					<a href="#menu" className="menuToggle"><span>Menu</span></a>
					<div id="menu">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="#one" className="more scrolly">About Me</a></li>
							<li><a href="#two" className="more scrolly">Portfolio</a></li>
							<li><a href="#three" className="more scrolly">Competencies</a></li>
							<li><a href="#footer" className="more scrolly">Contact</a></li>
						</ul>
					</div>
				</li>
			</ul>
		</nav>
</header>

export default Navbar