import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import "../../assets/css/WalletDashboard.css";
import { BankLogo, CardSim, CardSlash } from "../../constant";
import { ATMCard } from "atm-card-react";

const Payment = () => {
	const [number, setNumber] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [holder, setHolder] = useState("");
	const [cvv, setCvv] = useState("");
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			<section className="wallet-dashboard-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<Sidebar />
						</div>
						<div className="col-lg-9">
							<div className="heading">
								<h3>Attached Card</h3>
							</div>
							<div className="row">
								<div className="col-lg-4">
									<div className="saved-card">
										<label className="switch">
											<input type="checkbox" hidden name="CardRadio" />
											<span className="slider"></span>
											<h5 className="status">Active</h5>
										</label>
										<ATMCard
											year={year}
											month={month}
											cvv={cvv}
											number={number}
											holderName={holder}
											bankLogo={
												<h1
													style={{
														fontFamily: "nexa-bold",
														color: "white",
													}}
												>
													Credit card
												</h1>
											}
											lifted
											onChange={(data) => {
												setNumber(data.number);
												setCvv(data.cvv);
												setMonth(data.month);
												setYear(data.year);
												setHolder(data.holder);
											}}
										/>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="saved-card">
										<label className="switch">
											<input type="checkbox" hidden name="CardRadio" />
											<span className="slider"></span>
											<h5 className="status">Active</h5>
										</label>
										<ATMCard
											year={year}
											month={month}
											cvv={cvv}
											number={number}
											holderName={holder}
											bankLogo={
												<h1
													style={{
														fontFamily: "nexa-bold",
														color: "white",
													}}
												>
													Credit card
												</h1>
											}
											lifted
											onChange={(data) => {
												setNumber(data.number);
												setCvv(data.cvv);
												setMonth(data.month);
												setYear(data.year);
												setHolder(data.holder);
											}}
										/>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="total-balance">
										<div className="balance">
											<h4>Balance</h4>
											<h2>$350.00 </h2>
										</div>
										<div className="button-group">
											<button className="btn peach-btn">Withdraw</button>
											<button className="btn blue-btn">Deposite money</button>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="button-group">
										<button className="add-new-card">Add new card</button>
									</div>
								</div>
							</div>
							<div className="my-transaction">
								<div className="title">
									<h4>My Transaction</h4>
								</div>
								<div className="all-transaction">
									<div className="transaction-box">
										<p className="comment">Earn By Referral</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
										</p>
									</div>
									<div className="transaction-box">
										<p className="comment">Earn By Referral</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
										</p>
									</div>
									<div className="transaction-box">
										<p className="comment">Earn By Referral</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
										</p>
									</div>
									<div className="transaction-box">
										<p className="comment">Earn By Referral</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
										</p>
									</div>
									<div className="see-more">
										<a href="#">see more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Payment;
