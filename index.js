import React from 'react';
import '../App.css';
import headshot2 from '../images/headshot2.jpeg';

const Home = () => {
return (
	<div id="Home">
<div class="flex-grid">
			<div class="col1">
				<img src={headshot2}class="headshot2"></img>
			</div>
			<div class="col2">
				<article class= "intro">
					<h1>Hello World!</h1>
					<p>I recently completed the IBM Full Stack Software Developer Certification Program on Coursera. Below there is a list of the skills I learned as well as my full resume. Please ejoy, explore, and something my career portfolio.
					</p>
				</article>

				<details name="exclusive" open>
					<summary>Languages</summary>
					<article class="about_list_items">
						<p>HTML</p>
						<p>CSS</p>
						<p>JavaScript</p>
						<p>Python</p>
					</article>
				</details>

				<details name="exclusive" open>
					<summary>Frameworks</summary>
					<article class="about_list_items">
						<p>React</p>
						<p>Express</p>
						<p>Node.js</p>
						<p>Flask</p>
						<p>Jupyter</p>
					</article>
				</details>

				<details name="exclusive">
					<summary >Courses</summary>
					<article class="about_list_items">
						<p>Introduction to Software Engineering</p>
						<p>Cloud Achitecture</p>
						<p>Introduction to HTML, CSS, & JavaScript</p>
						<p>Getting Started with Git & Github</p>
						<p>Developing Front-End Applications with React</p>
						<p>Developing Back-End Apps with Node.js & Express</p>
						<p>Python for Data Science, AI, & Development</p>
						<p>Developing AI Applications with Python and Flask</p>
					</article>
				</details>

				<details name="exclusive">
					<summary>Resume</summary>
					<article class="about_list_items">
					<p>content</p>
					</article>
				</details>
				
			</div>
		</div>


</div>

);
};

export default Home;