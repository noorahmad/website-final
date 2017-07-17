import React from 'react'


const Portfolio = () =>

<section id="two" className="two wrapper alt style2">
	<section className="spotlight">
		<div className="image"><img src={require('../images/pic01.jpg')} alt="" /></div>
		<div className="content">
			<h2>BeatScraper</h2>
			<p>BeatScraper is the latest project I decided to build to familiarize myself with Python and MongoDB. It is a webscraper that scrapes information from the Beatport.com tech house top 100 chart. It gathers information such as Title, Artist, Label, and Release Date; parses the data into JSON, and stores it in a MongoDB. As soon as Ive gathered enough data I hope to analyze it and see the difference in trends before and after Ibiza season.</p>
		</div>
	</section>
	<section className="spotlight">
		<div className="image"><img src={require('../images/pic02.jpg')} alt="" /></div>
		<div className="content">
			<h2>NachOS</h2>
			<p>One of the final projects I worked on in university was the NachOS operating system. NachOS stands for Not Another Completely Heuristic Operating System. My group built a working operating system under the NachOS framework in Java, which implemented synchronization constructs, a priority scheduler, user threads using syscall interface to provide access to file system and I/O, and a network interface with a chat server/client program.</p>
		</div>
	</section>
	<section className="spotlight">
		<div className="image"><img src={require("../images/pic03.jpg")} alt="" /></div>
		<div className="content">
			<h2>Whats Good Mobile Marketplace</h2>
			<p>Developed a mobile marketplace app with my group for a software engineering course. We also entered the app in our universitys mobile app challenge. Although we didnt win in the end, we definitely made a good run. The app served as a mobile marketplace for the university community to buy/sell/trade goods. I was mostly responsible for developing the front and I was given the opportunity to traverse the entire development life cycle from sketching, to wireframes, to mocks, and in the end the final buildout. It was built using Java, SQLite, JDBC, and Android Studio.</p>
		</div>
	</section>
	<section className="spotlight">
		<div className="image"><img src={require("../images/pic06.jpg")} alt="" /></div>
		<div className="content">
			<h2>Fuel Tracking App</h2>
			<p>A personal project that I decided to pursue was a fuel tracking app. I wanted to familiarize myself with Swift and Xcode so I chose to build an app that was used to track and store fuel consumption, as well as calculate different data such as spending on fuel, distance travelled, and miles per gallon, among other things.</p>
		</div>
	</section>
</section>

export default Portfolio