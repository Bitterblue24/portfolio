import React from 'react';
import '../App.css';

const Recommendations = () => {
return (

	<div id="recommendations">

		<h2>Recommendations</h2>
		<div style="clear:both;"></div>
		<div class="all_recommendations" id="all_recommendations">

			<div class="recommendation">
				<span>&#8220;</span>
				Arpita is a very quick learner and quickly grasps key concepts of Web development.
				She got a great attitude & she is an excellent team player.
				She has a curious mind and asks the right question.
				She takes initiative within a team and has potentials to lead the team.
				<span>&#8221;</span>
			</div>
			<div class="recommendation">
				<span>&#8220;</span>
				Being able to work with Saachi has been an awesome experience.
				She is highly knowledgable and always goes the extra step to make sure everything is right.
				For any future projects that need her expertise I would definitely want to work with her again.
				<span>&#8221;</span>
			</div>
			<div class="recommendation">
				<span>&#8220;</span>
				Worked along with Amit during the initial phase of our venture which needed Web development.
				She is a committed resource who has in depth knowledge about the domain.
				She will be an asset for any organisation!
				<span>&#8221;</span>
			</div>
		</div>
	<section id="contact">
			<div class="flex_center">
				<fieldset>
					<legend>Leave a Recommendation</legend>
					
						<br />
					
					<textarea type="text" id="new_recommendation" cols="500" rows="10" placeholder="Message"></textarea>
					<div class="flex_center">
						<button id="recommend_btn" onclick="addRecommendation"> Submit
						</button>
					</div>
				</fieldset>
			</div>
	</section>
		
	</div>
);
};

export default Recommendations;
