import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Help = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Help Sec Start Here */}
			<section className="help-sec">
				<div className="container">
					<div className="heading">
						<h2>Help</h2>
					</div>
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									Frequently asked Questions?
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s.
									</p>
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Frequently asked Questions?
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									Frequently asked Questions?
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</button>
							</h2>
							<div
								id="collapseThree"
								class="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Help Sec End Here */}

			{/* Query Sec Start Here */}
			<section className="query_sec">
				<div className="container">
					<div className="query-box">
						<h3>Does This Answer Your Query</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<div className="button-group">
							<button className="btn yes">Yes</button>
							<button className="btn no">No</button>
						</div>
					</div>
				</div>
			</section>
			{/* Query Sec End Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Help;
