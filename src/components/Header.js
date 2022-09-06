import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
	Leaf,
	liveStream,
	NewFollower1,
	NewFollower2,
	NewFollower3,
	NewFollower4,
	NewFollower5,
	Nug1,
	Nug2,
	Nug3,
	Stream1,
	StreamerImg,
	weedEmoji,
	WeedIcon,
	StoryBack1,
	StoryBack3,
	StoryBack2,
	StoryBack4,
	StoryBack5,
	Coin,
	WinnerImg,
} from "../constant";

const Header = () => {
	const navigate = useNavigate();
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
											<Link className="nav-link" to="#">
												Home
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="#">
												My Product
											</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="#">
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
												<Link className="nav-link" to="#">
													<img src={navbar_chat} className="img-fluid" />
													<span className="count">2</span>
												</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="#">
													<img
														src={navbar_notification}
														className="img-fluid"
													/>
													<span className="count">2</span>
												</Link>
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
											<li className="nav-item dropdown profile-dropdown">
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
																<Link to="#">Money</Link>
															</li>
															<li>
																<Link to="#">Earned Nugs</Link>
															</li>
															<li>
																<Link to="#">My Products</Link>
															</li>
															<li>
																<Link to="#">Market place</Link>
															</li>
															<li>
																<Link to="#">Help & Feedback</Link>
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
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Analytics Modal Start Here */}
			<div
				className="modal fade"
				id="analyticsModal"
				tabIndex="-1"
				aria-labelledby="analyticsModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="close">
							<button className="close-btn" data-bs-dismiss="modal">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="34.479"
									height="34.479"
									viewBox="0 0 34.479 34.479"
								>
									<path
										id="Icon_metro-cross"
										data-name="Icon metro-cross"
										d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
										transform="translate(-2.571 -1.928)"
										fill="#fff"
									/>
								</svg>
							</button>
						</div>
						<div className="modal-body">
							<div className="analytics-box">
								<div className="heading-wrapper">
									<span className="icon">
										<img src={WeedIcon} alt="" className="img-fluid" />
									</span>
									<h3>Broadcast Analytics</h3>
									<span className="icon">
										<img src={WeedIcon} alt="" />
									</span>
								</div>
								<div className="streamer-detail">
									<figure className="streamer-img">
										<img src={StreamerImg} alt="" />
									</figure>
									<h4 className="name">Chritine karla</h4>
									<ul className="total-stream-time">
										<li>
											<span className="hour">03</span>
											<br />
											<span className="value">Hours</span>
										</li>
										<li className="seprator">:</li>
										<li>
											<span className="hour">22</span>
											<br />
											<span className="value">Minutes</span>
										</li>
										<li className="seprator">:</li>
										<li>
											<span className="hour">59</span>
											<br />
											<span className="value">Seconds</span>
										</li>
									</ul>
									<div className="new-followers">
										<h4 className="title">New Followers</h4>
										<ul className="new">
											<li>
												<img src={NewFollower1} alt="" className="img-fluid" />
											</li>
											<li>
												<img src={NewFollower2} alt="" className="img-fluid" />
											</li>
											<li>
												<img src={NewFollower3} alt="" className="img-fluid" />
											</li>
											<li>
												<img src={NewFollower4} alt="" className="img-fluid" />
											</li>
											<li>
												<img src={NewFollower5} alt="" className="img-fluid" />
											</li>
										</ul>
										<div className="count">
											<h4 className="follower-count">+32 New Followers</h4>
										</div>
									</div>
									<div className="nugs-earned">
										<h4 className="title">Nuggs Earned</h4>
										<ul className="nuggs">
											<li>
												<div className="icon">
													<img src={Nug1} alt="" className="img-fluid" />
												</div>
												<h5>
													Likes
													<br />
													<span>470</span>
												</h5>
											</li>
											<li>
												<div className="icon">
													<img src={Nug2} alt="" className="img-fluid" />
												</div>
												<h5>
													Shares
													<br />
													<span>71</span>
												</h5>
											</li>
											<li>
												<div className="icon">
													<img src={Nug3} alt="" className="img-fluid" />
												</div>
												<h5>
													Nugs
													<br />
													<span>600</span>
												</h5>
											</li>
										</ul>
									</div>
									<div className="highest-view">
										<h4>HIGHEST VIEW</h4>
										<h4 className="total">23.76k</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Analytics Modal End Here */}

			{/* Add Streamer Modal Start Here */}
			<div
				className="modal fade"
				id="addStreamerModal"
				tabIndex="-1"
				aria-labelledby="addStreamerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="close">
							<button className="close-btn" data-bs-dismiss="modal">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21.567"
									height="21.567"
									viewBox="0 0 21.567 21.567"
								>
									<g
										id="Group_7797"
										data-name="Group 7797"
										transform="translate(-46.716 -49.661)"
									>
										<rect
											id="Rectangle_125"
											data-name="Rectangle 125"
											width="27"
											height="3.5"
											rx="1.75"
											transform="translate(49.191 49.661) rotate(45)"
											fill="#fff"
										/>
										<rect
											id="Rectangle_126"
											data-name="Rectangle 126"
											width="27"
											height="3.5"
											rx="1.75"
											transform="translate(46.717 68.753) rotate(-45)"
											fill="#fff"
										/>
									</g>
								</svg>
							</button>
						</div>
						<div className="modal-body">
							<div className="add-streamer-box">
								<div className="sarch-bar">
									<div className="form-group">
										<input
											type="text"
											placeholder="Search"
											className="form-control"
										/>
									</div>
									<button className="btn" type="submit">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14.774"
											height="14.774"
											viewBox="0 0 14.774 14.774"
										>
											<g
												id="Icon_feather-search"
												data-name="Icon feather-search"
												transform="translate(0.5 0.5)"
											>
												<path
													id="Path_692"
													data-name="Path 692"
													d="M16.56,10.53A6.03,6.03,0,1,1,10.53,4.5,6.03,6.03,0,0,1,16.56,10.53Z"
													transform="translate(-4.5 -4.5)"
													fill="none"
													stroke="#fff"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1"
												/>
												<path
													id="Path_693"
													data-name="Path 693"
													d="M28.254,28.254l-3.279-3.279"
													transform="translate(-14.686 -14.686)"
													fill="none"
													stroke="#fff"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1"
												/>
											</g>
										</svg>
									</button>
								</div>
								<div className="all-streamer">
									<label className="streamer-container">
										<input type="radio" hidden checked name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower1}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Ashley Hamilton</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower2}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Hugo Marsh</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower3}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Manuel Vargas</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower4}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Jenny Hubbard</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower5}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Andre Barnett</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower1}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Ashley Hamilton</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower2}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Hugo Marsh</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower3}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Manuel Vargas</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower4}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Jenny Hubbard</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower5}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Andre Barnett</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower1}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Ashley Hamilton</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower2}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Hugo Marsh</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower3}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Manuel Vargas</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower4}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Jenny Hubbard</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower5}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Andre Barnett</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower1}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Ashley Hamilton</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower2}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Hugo Marsh</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower3}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Manuel Vargas</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower4}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Jenny Hubbard</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
									<label className="streamer-container">
										<input type="radio" hidden name="StreamerRadio" />
										<span className="checkmark">
											<div className="streamer-box">
												<div className="left">
													<figure>
														<img
															src={NewFollower5}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<h4>Andre Barnett</h4>
												</div>
												<div className="right">
													<span className="dot"></span>
												</div>
											</div>
										</span>
									</label>
								</div>
								<div className="button-group">
									<button className="btn" data-bs-dismiss="modal">
										Done
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Add Streamer Modal End Here */}

			{/* Bordcast Modal */}
			<div
				className="modal fade"
				id="BrodcastModal"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="BrodcastModal"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="stream-setting">
								<div className="heading-wrapper">
									<span className="icon">
										<img src={WeedIcon} alt="" className="img-fluid" />
									</span>
									<h3 className="txt">Broadcast Settings</h3>
									<span className="icon">
										<img src={WeedIcon} alt="" className="img-fluid" />
									</span>
								</div>
								<form action="">
									<div className="form-group">
										<input
											type="text"
											placeholder="Type Stream Title"
											className="form-control"
										/>
									</div>
									<div className="add-stream">
										<button
											type="button"
											className="btn"
											data-bs-dismiss="modal"
											data-bs-toggle="modal"
											data-bs-target="#addStreamerModal"
										>
											<svg
												xmlns="http	://www.w3.org/2000/svg"
												width="10.058"
												height="10.058"
												viewBox="0 0 10.058 10.058"
											>
												<g
													id="Icon_feather-plus"
													data-name="Icon feather-plus"
													transform="translate(-6.5 -6.5)"
												>
													<path
														id="Path_690"
														data-name="Path 690"
														d="M18,7.5v8.058"
														transform="translate(-6.471)"
														fill="none"
														stroke="#fff"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
													/>
													<path
														id="Path_691"
														data-name="Path 691"
														d="M7.5,18h8.058"
														transform="translate(0 -6.471)"
														fill="none"
														stroke="#fff"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
													/>
												</g>
											</svg>
											Add Streamer
										</button>
									</div>
									<ul className="toggle-setting">
										<li>
											<span>
												<ruby>Comments</ruby>
												<img src={Leaf} alt="" className="img-fluid" />
											</span>
											<label className="switch">
												<input type="checkbox" />
												<span className="slider"></span>
											</label>
										</li>
										<li>
											<span>
												<ruby>Mute</ruby>
												<img src={Leaf} alt="" className="img-fluid" />
											</span>
											<label className="switch">
												<input type="checkbox" />
												<span className="slider"></span>
											</label>
										</li>
										<li>
											<span>
												<ruby>Rotate camera</ruby>
												<img src={Leaf} alt="" className="img-fluid" />
											</span>
											<label className="switch">
												<input type="checkbox" />
												<span className="slider"></span>
											</label>
										</li>
										<li>
											<span>
												<ruby>Video</ruby>
												<img src={Leaf} alt="" className="img-fluid" />
											</span>
											<label className="switch">
												<input type="checkbox" />
												<span className="slider"></span>
											</label>
										</li>
										<li>
											<span>
												<ruby>Turn on flash</ruby>
												<img src={Leaf} alt="" className="img-fluid" />
											</span>
											<label className="switch">
												<input type="checkbox" />
												<span className="slider"></span>
											</label>
										</li>
										<li>
											<span>
												<ruby>Nug Jar</ruby>
												<img src={Leaf} alt="" className="img-fluid" />
											</span>
											<label className="switch">
												<input type="checkbox" />
												<span className="slider"></span>
											</label>
										</li>
									</ul>
									<div className="button-group">
										<button
											data-bs-dismiss="modal"
											type="button"
											onClick={() => navigate("/live-stream")}
										>
											START SESSION
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bordcast Modal */}

			{/* Bordcast Modal */}
			<div
				className="modal fade"
				id="AddStory"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="AddStory"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="story-box">
								<div className="heading-wrapper">
									<h4>Add Story</h4>
									<button className="close" data-bs-dismiss="modal">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="17.138"
											height="17.138"
											viewBox="0 0 17.138 17.138"
										>
											<path
												id="Icon_metro-cross"
												data-name="Icon metro-cross"
												d="M18.41,14.839h0l-5.2-5.2,5.2-5.2h0a.537.537,0,0,0,0-.757L15.954,1.228a.537.537,0,0,0-.757,0h0L10,6.427l-5.2-5.2h0a.537.537,0,0,0-.757,0L1.585,3.684a.537.537,0,0,0,0,.757h0l5.2,5.2-5.2,5.2h0a.537.537,0,0,0,0,.757l2.456,2.456a.537.537,0,0,0,.757,0h0l5.2-5.2,5.2,5.2h0a.537.537,0,0,0,.757,0L18.41,15.6a.537.537,0,0,0,0-.757Z"
												transform="translate(-1.428 -1.071)"
												fill="#fff"
											/>
										</svg>
									</button>
								</div>
								<form action="">
									<div className="form-group">
										<textarea
											className="form-control"
											placeholder="Start typing"
										></textarea>
									</div>
								</form>
								<div className="bottom-bar">
									<div className="backgrounds">
										<label>Background</label>
										<ul className="backgrounds-color">
											<li>
												<label className="background-container">
													<input
														className="form-check-input"
														type="radio"
														hidden
														checked
														name="Storyradio"
													/>
													<span className="checkmark">
														<figure>
															<img
																src={StoryBack1}
																alt=""
																className="img-fluid"
															/>
														</figure>
													</span>
												</label>
											</li>
											<li>
												<label className="background-container">
													<input
														className="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span className="checkmark">
														<figure>
															<img
																src={StoryBack2}
																alt=""
																className="img-fluid"
															/>
														</figure>
													</span>
												</label>
											</li>
											<li>
												<label className="background-container">
													<input
														className="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span className="checkmark">
														<figure>
															<img
																src={StoryBack3}
																alt=""
																className="img-fluid"
															/>
														</figure>
													</span>
												</label>
											</li>
											<li>
												<label className="background-container">
													<input
														className="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span className="checkmark">
														<figure>
															<img
																src={StoryBack4}
																alt=""
																className="img-fluid"
															/>
														</figure>
													</span>
												</label>
											</li>
											<li>
												<label className="background-container">
													<input
														className="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span className="checkmark">
														<figure>
															<img
																src={StoryBack5}
																alt=""
																className="img-fluid"
															/>
														</figure>
													</span>
												</label>
											</li>
										</ul>
									</div>
									<div className="button-group">
										<button
											className="btn"
											data-bs-toggle="modal"
											data-bs-target="#winnerModal"
										>
											Post
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bordcast Modal */}

			{/* Spinner Coins */}
			<div
				className="modal fade"
				id="SpinnerCoins"
				tabIndex="-1"
				aria-labelledby="SpinnerCoins"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<button className="close" data-bs-dismiss="modal">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="34.479"
									height="34.479"
									viewBox="0 0 34.479 34.479"
								>
									<path
										id="Icon_metro-cross"
										data-name="Icon metro-cross"
										d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
										transform="translate(-2.571 -1.928)"
										fill="#fff"
									/>
								</svg>
							</button>
							<div className="coins-detail">
								<div className="coins">
									<figure>
										<img src={Coin} alt="" className="img-fluid" />
									</figure>
									<h3>20</h3>
								</div>
								<p> Per Spin Fees 20 Coins</p>
								<div className="button-group">
									<button
										className="btn"
										data-bs-toggle="modal"
										data-bs-target="#winnerModal"
										data-bs-dismiss="modal"
									>
										Confirm
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Spinner Coins */}

			{/* Winner Modal */}
			<div
				className="modal fade"
				id="winnerModal"
				tabIndex="-1"
				aria-labelledby="winnerModal"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<button className="close" data-bs-dismiss="modal">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="34.479"
									height="34.479"
									viewBox="0 0 34.479 34.479"
								>
									<path
										id="Icon_metro-cross"
										data-name="Icon metro-cross"
										d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
										transform="translate(-2.571 -1.928)"
										fill="#fff"
									/>
								</svg>
							</button>
							<div className="winner-box">
								<div className="heading">
									<h2>Winner</h2>
								</div>
								<div className="winner-img">
									<figure>
										<img src={WinnerImg} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="name">
									<h4>Rose Armstrong</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Winner Modal */}

			{/* Tier Modal */}
			<div
				className="modal fade"
				id="TierModal"
				tabIndex="-1"
				aria-labelledby="TierModal"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<button className="close" data-bs-dismiss="modal">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="34.479"
									height="34.479"
									viewBox="0 0 34.479 34.479"
								>
									<path
										id="Icon_metro-cross"
										data-name="Icon metro-cross"
										d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
										transform="translate(-2.571 -1.928)"
										fill="#fff"
									/>
								</svg>
							</button>
							<div className="row">
								<div className="col-lg-3"></div>
								<div className="col-lg-6">
									<div className="heading">
										<h3>Tiers System</h3>
									</div>
									<div className="tier-box">
										<h3 className="title">Referrals</h3>
										<table className="table">
											<tr>
												<td>Tier 1</td>
												<td>Consultant</td>
											</tr>
											<tr>
												<td>Tier 2</td>
												<td>Ambassador 1K</td>
											</tr>
											<tr>
												<td>Tier 2</td>
												<td>Content Creator Broadcasters Entrepreneurs</td>
											</tr>
										</table>
									</div>
									<div className="tier-box">
										<h3 className="title">Broadcaster</h3>
										<table className="table">
											<tr>
												<td>Tier 1</td>
												<td>Basic Live</td>
											</tr>
											<tr>
												<td>Tier 2</td>
												<td>Live for 2 hours</td>
											</tr>
											<tr>
												<td>Tier 2</td>
												<td>VIP</td>
											</tr>
										</table>
									</div>
								</div>
								<div className="col-lg-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Tier Modal */}
		</>
	);
};

export default Header;
