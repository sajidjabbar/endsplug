import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
	blue_flag,
	cambridge,
	european_union,
	germany,
	greek,
	logo,
	navbar_cart,
	navbar_chat,
	navbar_notification,
	norway,
	uk,
	usa,
	vietnam,
	profile_img,
	msg1,
	msg2,
	msg3,
	msg4,
	msg5,
	con1,
	con2,
	con3,
	con4,
	con5,
	no1,
	no2,
	notification_img,
	no3,
	no4,
	no5,
} from "../constant";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [notification, setnotification] = useState(false);
	const handleopenmsg = () => {
		setOpen(true);
	};
	const handleclosemsg = () => {
		setOpen(false);
	};
	const handleopennoti = () => {
		setnotification(true);
	};
	const handleclosenoti = () => {
		setnotification(false);
	};
	const messsage = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	const messages_profile = [
		{
			id: 1,
			name: "Christopher",
			profile: msg1,
			is_active: true,
		},
		{
			id: 2,
			name: "Reese",
			profile: msg2,
			is_active: true,
		},
		{
			id: 3,
			name: "Christopher",
			profile: msg3,
			is_active: true,
		},
		{
			id: 4,
			name: "Laura",
			profile: msg4,
			is_active: true,
		},
		{
			id: 5,
			name: "Maldo",
			profile: msg5,
			is_active: true,
		},
		{
			id: 6,
			name: "Christopher",
			profile: msg1,
			is_active: true,
		},
		{
			id: 5,
			name: "Reese",
			profile: msg2,
			is_active: true,
		},
	];
	const Conversation = [
		{
			id: 1,
			name: "Herman Pope",
			msg: "Hey! How's it going?",
			time: "04:04AM",
			img: con1,
			total_msg: 3,
		},
		{
			id: 2,
			name: "Sue Caldwell",
			msg: "What kind of music do you like? ",
			time: "08:58PM",
			img: con2,
			total_msg: 1,
		},
		{
			id: 3,
			name: "Ada Reyes",
			msg: "Sounds good to me!",
			time: "11:33PM",
			img: con3,
			total_msg: 0,
		},
		{
			id: 4,
			name: "Hallie Sandoval",
			msg: "Hi Tina. How's your night going?",
			time: "06:58PM",
			img: con4,
			total_msg: 0,
		},
		{
			id: 5,
			name: "Dean Warren",
			msg: "What did you do over the weekend?",
			time: "09:43PM",
			img: con5,
			total_msg: 0,
		},
	];
	return (
		<>
			<header id="header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-5">
							<div className="logo-and-search-wrapper">
								<div className="logo-warpper">
									<Link to="/">
										<img src={logo} className="img-fluid" />
									</Link>
								</div>
								<div className="search-wrapper">
									<form>
										<input
											className="form-control"
											placeholder="Search"
											type="text"
										/>
										<button className="btn">
											<i className="fa fa-search"></i>
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-1"></div>
						<div className="col-lg-6 align-self-center">
							<div className="navbar-profile-icon-wrapper">
								<div className="navbar-wrapper">
									<ul className="navbar-nav mr-auto">
										<li className="nav-item">
											<Link className="nav-link" to="/">
												Home
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="/products">
												My Product
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="/market-place">
												Merch
											</Link>
										</li>
									</ul>
								</div>
								<div className="navbar-icon-wrapper">
									<div className="icon-wrapper">
										<ul className="navbar-nav mr-auto">
											<li className="nav-item">
												<Link className="nav-link" to="#">
													<img src={navbar_cart} className="img-fluid" />
													<span className="count">2</span>
												</Link>
											</li>
											<li className="nav-item">
												<button
													onMouseEnter={handleopenmsg}
													className="nav-link"
													to="javascript:void(0)"
												>
													<img src={navbar_chat} className="img-fluid" />
													<span className="count">2</span>
												</button>
											</li>
											<li className="nav-item">
												<button
													onMouseEnter={handleopennoti}
													className="nav-link"
													to="#"
												>
													<img
														src={navbar_notification}
														className="img-fluid"
													/>
													<span className="count">2</span>
												</button>
											</li>
										</ul>
									</div>
								</div>
								<div className="language-icon-wrapper">
									<div className="lang-wrapper">
										<ul className="navbar-nav mr-auto">
											<li className="nav-item dropdown language-list">
												<a
													className="nav-link dropdown-toggle"
													href="#"
													id="navbarDropdown"
													role="button"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
												>
													<img src={usa} className="img-fluid" />
												</a>
												<div
													className="dropdown-menu"
													aria-labelledby="navbarDropdown"
												>
													<a className="dropdown-item" href="#">
														<img src={uk} className="img-fluid" />
													</a>
													<a className="dropdown-item" href="#">
														<img src={blue_flag} className="img-fluid" />
													</a>
													<a className="dropdown-item" href="#">
														<img src={vietnam} className="img-fluid" />
													</a>
													<a className="dropdown-item" href="#">
														<img src={germany} className="img-fluid" />
													</a>
													<a className="dropdown-item" href="#">
														<img src={norway} className="img-fluid" />
													</a>
													<a className="dropdown-item" href="#">
														<img src={greek} className="img-fluid" />
													</a>
													<a className="dropdown-item" href="#">
														<img src={cambridge} className="img-fluid" />
													</a>
													<a className="dropdown-item" href="#">
														<img src={european_union} className="img-fluid" />
													</a>
												</div>
											</li>
											<li className="nav-item dropdown">
												<a
													className="nav-link dropdown-toggle"
													href="#"
													id="navbarDropdown"
													role="button"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false"
												>
													<img src={profile_img} className="img-fluid" />{" "}
													<span>Darrell Bailey</span>
												</a>
												<div
													className="dropdown-menu"
													aria-labelledby="navbarDropdown"
												>
													<div className="profile-dropdown">
														<div className="profile">
															<figure>
																<img
																	src={profile_img}
																	alt=""
																	className="img-fluid"
																/>
															</figure>
															<div className="name">
																<h4>Darrell Bailey</h4>
																<p>
																	<Link to="/user-profile">
																		View My Profile
																	</Link>
																</p>
															</div>
														</div>
														<ul className="list">
															<li>
																<Link to="/wallet">Money</Link>
															</li>
															<li>
																<Link to="/privacy">Earned Nugs</Link>
															</li>
															<li>
																<Link to="/products">My Products</Link>
															</li>
															<li>
																<Link to="/market-place">Market place</Link>
															</li>
															<li>
																<Link to="/">Help & Feedback</Link>
															</li>
															<li>
																<Link to="#">Notification Settings</Link>
															</li>
															<li>
																<Link to="#">Follows</Link>
															</li>
															<li>
																<Link to="#">Blocked List</Link>
															</li>
															<li>
																<Link to="#">Privacy Settings</Link>
															</li>
															<li>
																<Link to="#">Polices</Link>
															</li>
															<li>
																<Link to="#">Log Out</Link>
															</li>
														</ul>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								{/* Messages header starts here */}
								{open == true ? (
									<div
										onMouseLeave={handleclosemsg}
										className="header-messages-wrapper"
									>
										<div className="heading-wrapper">
											<h6>Messages</h6>
										</div>
										<div className="messsages-profile-wrapper">
											<div className="stori-wrappper">
												<Slider {...messsage}>
													{messages_profile.map((data, index) => {
														return (
															<div key={index} className="profile-wrp">
																<button className="msg-btn">
																	<figure>
																		<img src={data?.profile} alt="" />
																		{data?.is_active ? (
																			<div className="online"></div>
																		) : (
																			<div className="offline"></div>
																		)}
																	</figure>
																	<div className="name-wrapper">
																		<h6>{data?.name}</h6>
																	</div>
																</button>
															</div>
														);
													})}
												</Slider>
											</div>
										</div>
										<div className="messages-wrapper">
											{Conversation.map((data, index) => {
												return (
													<div key={index} className="single-msg-wrapper">
														<div className="img-wrapper">
															<figure>
																<img src={data?.img} alt="" />
																{data?.total_msg == 0 ? (
																	""
																) : (
																	<span className="totalmsg">
																		{" "}
																		{data?.total_msg}{" "}
																	</span>
																)}
															</figure>
														</div>
														<div className="mg-content-wrapper">
															<div className="msg-name-wrapper">
																<h6>{data?.name}</h6>
																<span>{data?.time}</span>
															</div>
															<div className="msg-wrappper">
																<p>{data?.msg}</p>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								) : (
									""
								)}
								{/* Messages header ends here */}
								{/* Notifications starts here */}
								{notification == true ? (
									<div
										onMouseLeave={handleclosenoti}
										className="notification-card-wrapper"
									>
										<div className="notification-heading-wrapper">
											<h6>Notifications</h6>
										</div>
										<div className="notifications-wrapper">
											<div className="single-notification-wrapper">
												<div className="img-wrapper">
													<figure>
														<img src={no1} alt="" />
													</figure>
												</div>
												<div className="notification-content-wrapper">
													<div className="head-wrapper">
														<h5>Jimmy Nilson followed you</h5>
														<span>28 minutes ago</span>
													</div>
													<div className="btn-wrapper">
														<button className="btn">Follow</button>
													</div>
												</div>
											</div>
											<div className="single-notification-wrapper">
												<div className="img-wrapper">
													<figure>
														<img src={no2} alt="" />
													</figure>
												</div>
												<div className="notification-content-wrapper">
													<div className="head-wrapper">
														<h5>Katie Malone liked 3 your photos</h5>
														<span>2 hours ago</span>
													</div>
													<div className="btn-wrapper">
														<figure>
															<img src={notification_img} alt="" />
														</figure>
													</div>
												</div>
											</div>
											<div className="single-notification-wrapper">
												<div className="img-wrapper">
													<figure>
														<img src={no3} alt="" />
													</figure>
												</div>
												<div className="notification-content-wrapper">
													<div className="head-wrapper">
														<h5>
															Ola Gonzales react for story "Killin’ chillin" to
															your timeline
														</h5>
														<span>2 hours ago</span>
													</div>
													<div className="btn-wrapper"></div>
												</div>
											</div>
											<div className="single-notification-wrapper">
												<div className="img-wrapper">
													<figure>
														<img src={no4} alt="" />
													</figure>
												</div>
												<div className="notification-content-wrapper">
													<div className="head-wrapper">
														<h6>@gorlova commented on photo</h6>
														<h5>
															The Luxury Of Traveling With Yacht Charter
															Companies
														</h5>
														<span>2 hours ago</span>
													</div>
													<div className="btn-wrapper"></div>
												</div>
											</div>
											<div className="single-notification-wrapper">
												<div className="img-wrapper">
													<figure>
														<img src={no5} alt="" />
													</figure>
												</div>
												<div className="notification-content-wrapper">
													<div className="head-wrapper">
														<h5>Austin Gonzales added 5 photos</h5>
														<span>2 hours ago</span>
													</div>
													<div className="btn-wrapper"></div>
												</div>
											</div>
										</div>
									</div>
								) : (
									""
								)}

								{/* Notifications ends here */}
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
