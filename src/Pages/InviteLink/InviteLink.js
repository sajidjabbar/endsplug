import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import $ from "jquery";

const InviteLink = () => {
	useEffect(() => {
		$("#copy").on("click", function (event) {
			console.log(event);
			copyToClipboard(event);
		});

		function copyToClipboard(e) {
			var t = e.target,
				c = t.dataset.copytarget,
				inp = c ? document.querySelector(c) : null;
			console.log(inp);
			if (inp && inp.select) {
				inp.select();
				try {
					document.execCommand("copy");
					inp.blur();
					t.classList.add("copied");
					setTimeout(function () {
						t.classList.remove("copied");
					}, 1500);
				} catch (err) {
					alert("please press Ctrl/Cmd+C to copy");
				}
			}
		}
	}, []);
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			<section className="copy-link">
				<div className="container">
					<div className="heading_wrapper">
						<h2>Copy invite Link</h2>
						<h4>Invite friend earn 1000 nugs.</h4>
					</div>
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<div className="link-box">
								<div id="inviteCode" class="invite-page">
									<input
										id="link"
										value="https://staging.revolutioncredit.com/signupc/VprfEgvNdGuDLdAWBqi7iWAFoxKKpg_yg0hqNGBd2PU?eTypeId=44"
										readonly
									/>
									<div id="copy">
										<i
											class="fa fa-clipboard"
											aria-hidden="true"
											data-copytarget="#link"
										></i>
									</div>
								</div>
								<div className="button-group">
									<button className="btn">Share</button>
								</div>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>
				</div>
			</section>

			{/* <Footer> */}
			<Footer />
			{/* <Footer> */}
		</>
	);
};

export default InviteLink;
