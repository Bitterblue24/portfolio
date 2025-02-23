import React from "react";
import '../App.css';
import voya_sq from '../images/voya_sq.jpeg';
import outlier_logo from '../images/outlier_logo.jpeg';

const About = () => {
return (
	<div class="about">

		<div class="flex-grid">
			<div class="col1">
				<article class="about_article">
					<h2>Education</h2>
					<h3>BA in English, University of Connecticut, 2022</h3>
					<p>When I was 18 years old, chasing my dream of being a writer seemed like a solid life choice. Looking back, it seems like such a privledged mistake. I sill hope to publish someday, but not as a career. </p>

					<h2>Work Experience</h2>
					<img src={voya_sq}class="icon"></img>
					<h3>Communications Specialist, Voya Financial, 2023-2024</h3>
					<p>Working with Voya's technology team was my first introduction to the potential of programming. </p>


					<img src={outlier_logo}class="icon"></img>
					<h3>AI Trainer, Outlier, 2024-2025</h3>
					<p>As a fleelance consutant for Outlier, I used my writing skills to make AI safer and more accurate. </p>
					<a href="https://www.linkedin.com/company/try-outlier/" >Learn more about Outlier</a>
				</article>
			</div>


			
			<div class="col2">
				<article class= "about_intro">
					<h1>Hello World!</h1>
					<p>I recently completed the IBM Full Stack Software Developer Certification Program on Coursera. Here's a bunch of text about me blah de blah blah!
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

export default About;