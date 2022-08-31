import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/wallet.css";

const Wallet = () => {
	const [copySuccess, setCopySuccess] = useState("");
	const textAreaRef = useRef(null);

	function copyToClipboard(e) {
		textAreaRef.current.select();
		document.execCommand("copy");
		// This is just personal preference.
		// I prefer to not show the the whole text area selected.
		e.target.focus();
		setCopySuccess("Copied!");
	}
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Wallet Sec Start Here */}
			<section className="wallet-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<div className="wallet-box">
								<div className="heading-wrapper">
									<h2>My Wallet</h2>
								</div>
								<ul className="prices">
									<li>
										<span className="property">Coin</span>
										<span className="value">2000</span>
									</li>
									<li>
										<span className="property">Nugs</span>
										<span className="value">9872</span>
									</li>
									<li>
										<span className="property">Usd</span>
										<span className="value">$960/-</span>
									</li>
									<li>
										<span className="property">Referral code</span>
										<span className="value">$99/-</span>
									</li>
									<li>
										<span className="property">Store Earnings</span>
										<span className="value">$1000/-</span>
									</li>
									{/* <li>
										<span className="property">Total Balance</span>
										<span className="value">$2060/-</span>
									</li> */}
								</ul>
								<div className="bottom">
									<p>
										<button
											type="button"
											class="btn btn-primary"
											data-bs-toggle="modal"
											data-bs-target="#referalCode"
										>
											Create referral code
										</button>
									</p>
									<p>
										<a href="#">Become an ambassador</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
			</section>
			{/* Wallet Sec End Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}

			{/* Referal Code Modal */}
			<div
				class="modal fade"
				id="referalCode"
				tabindex="-1"
				aria-labelledby="referalCodeLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								x
							</button>
						</div>
						<div class="modal-body">
							<div className="referal">
								<div className="heading">
									<h2>Referral Code</h2>
								</div>
								<div className="form-group">
									<label>Your Referral code is</label>
									<input
										type="text"
										ref={textAreaRef}
										readOnly
										id="referalCode"
										value="15891"
										className="form-control"
									/>
								</div>
								<button
									data-bs-dismiss="modal"
									type="button"
									onClick={copyToClipboard}
								>
									Copy Code
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Referal Code Modal */}
		</>
	);
};

export default Wallet;
