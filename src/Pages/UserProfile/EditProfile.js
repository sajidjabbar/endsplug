import React from "react";
import "../../assets/css/profile.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EditUserInfo from "./EditUserInfo";
import UserInfo from "./UserInfo";

const EditProfile = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			<section className="edit-profile">
				<div className="container">
					<div className="topbar">
						<EditUserInfo />
					</div>
					<div className="row align-items-center">
						<div className="col-md-1"></div>
						<div className="col-md-10">
							<div className="edit-profile-form">
								<form action="/user-profile">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Name</label>
												<input
													type="text"
													value="Darrell Bailey"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Username</label>
												<input
													type="text"
													value="Darrell007"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Favorite Strand</label>
												<input
													type="text"
													value="D.O.B"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Country</label>
												<input
													type="text"
													value="Gender (Optional)"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Website</label>
												<input
													type="text"
													value="Ents-plug.com"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Bio</label>
												<input
													type="text"
													value="Male"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Email</label>
												<input
													type="email"
													value="Yourname@mail.com"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Phone</label>
												<input
													type="text"
													value="+123 456 7899"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Password</label>
												<input
													type="password"
													value="12345678"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="button-group form-group">
												<button className="btn" type="submit">
													Save
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-md-1"></div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default EditProfile;
