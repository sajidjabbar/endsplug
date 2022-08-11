import React from "react";
import "../../assets/css/welcome.css";
import { auth_logo } from "../../constant";

const Welcome = () => {
	return (
		<>
			{/* welcome sec starts here */}
			<section className="welcome-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">
							<div className="auth-logo-wrapper">
								<figure>
									<img src={auth_logo} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>
			</section>
			{/* welcome sec starts here */}
		</>
	);
};

export default Welcome;
