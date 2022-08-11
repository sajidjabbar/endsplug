import React, { useEffect, useState } from "react";
import Stories, { WithHeader } from "react-insta-stories";
import { Main_Story_img, user_profile_img } from "../../constant/index";
import "../../assets/css/stories.css";
const Stories_View = () => {
	const storyContent = {
		width: "auto",
		maxWidth: "100%",
		maxHeight: "100%",
		margin: "auto",
		background: "transparent",
	};
	const [currentId, setCurrentId] = useState(0);
	return (
		<section className="stories-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">
						<div
							className="Story-card"
							style={{ display: "flex", flexDirection: "row" }}
						>
							<p className="previous" style={{ color: "white" }}>
								<button
									onClick={() => {
										setCurrentId((currentId) => currentId - 1);
									}}
								>
									<i className="fa fa-angle-left"></i>
								</button>
							</p>
							<Stories
								currentIndex={currentId}
								loop
								storyStyles={storyContent}
								keyboardNavigation
								defaultInterval={1500}
								stories={stories}
								onStoryEnd={(s, st) => {
									console.log("story ended", s, st);
									setCurrentId((currentId) => currentId + 1);
								}}
								onAllStoriesEnd={(s, st) => {
									console.log("all stories ended", s, st);
									setCurrentId((currentId) => 0);
								}}
								onStoryStart={(s, st) => {
									console.log("story started", s, st);
									setCurrentId((currentId) => currentId + 1 - 1);
								}}
							/>
							<p className="next" style={{ color: "white" }}>
								<button
									onClick={() => {
										setCurrentId((currentId) => currentId + 1);
									}}
								>
									<i className="fa fa-angle-right"></i>
								</button>
							</p>
						</div>
					</div>
					<div className="col-lg-3"></div>
				</div>
			</div>
		</section>
	);
};

const stories = [
	{
		url: Main_Story_img,
		duration: 5000,
		header: {
			heading: "Mohit Karekar",
			subheading: "Posted 30m ago",
			profileImage: user_profile_img,
		},
	},
	{
		url: Main_Story_img,
		duration: 5000,
		header: {
			heading: "Mohit Karekar",
			subheading: "Posted 30m ago",
			profileImage: user_profile_img,
		},
	},
	{
		url: Main_Story_img,
		duration: 5000,
		header: {
			heading: "Mohit Karekar",
			subheading: "Posted 30m ago",
			profileImage: user_profile_img,
		},
	},
];

export default Stories_View;
