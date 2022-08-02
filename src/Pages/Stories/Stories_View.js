import React, { useEffect, useState } from "react";
import Stories, { WithHeader } from "react-insta-stories";
const Stories_View = () => {
	const [currentId, setCurrentId] = useState(0);
	return (
		<section className="stories-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-lg-3"></div>
					<div className="col-lg-6">
						<div style={{ display: "flex", flexDirection: "row" }}>
							<p
								onClick={() => {
									setCurrentId((currentId) => currentId - 1);
								}}
								style={{ color: "white" }}
							>
								next
							</p>
							<Stories
								currentIndex={currentId}
								loop
								keyboardNavigation
								defaultInterval={3000}
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
							<p
								onClick={() => {
									setCurrentId((currentId) => currentId + 1);
								}}
								style={{ color: "white" }}
							>
								next
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
	"https://example.com/pic.jpg",
	{
		url: "https://example.com/pic2.jpg",
		duration: 5000,
		header: {
			heading: "Mohit Karekar",
			subheading: "Posted 30m ago",
			profileImage: "https://picsum.photos/100/100",
		},
	},
	"https://example.com/pic.jpg",
	{
		url: "https://example.com/pic2.jpg",
		duration: 5000,
		header: {
			heading: "Mohit Karekar",
			subheading: "Posted 30m ago",
			profileImage: "https://picsum.photos/100/100",
		},
	},
	"https://example.com/pic.jpg",
	{
		url: "https://example.com/pic2.jpg",
		duration: 5000,
		header: {
			heading: "Mohit Karekar",
			subheading: "Posted 30m ago",
			profileImage: "https://picsum.photos/100/100",
		},
	},
];

export default Stories_View;
