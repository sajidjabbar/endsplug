import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/Checkout.css";
import { CartProduct1, VisaCard } from "../../constant";

const Checkout = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* <!-- Checkout Start Here --> */}
			<section class="checkout">
				<div class="container">
					<form action="/thank-you">
						<div class="row">
							<div class="col-lg-6">
								<div class="first-top-bar">
									<h3>Shipment Details</h3>
								</div>
								<div class="saved-address">
									<div class="title">
										<h5>Use Saved Addresses</h5>
									</div>
									{/* <!-- Saved Address --> */}
									<label class="container">
										<input type="radio" checked="checked" name="radio" />
										<span class="checkmark">
											<div class="select-address">
												<div class="selection">
													<i class="fa fa-check" aria-hidden="true"></i>
												</div>
												<div class="radio-btn">
													<span></span>
												</div>
												<div class="address-detail">
													<div class="top">
														<h5>
															<span class="property">Country:</span>
															<span class="value">United States</span>
														</h5>
														<h5>
															<span class="property pl-4">State:</span>
															<span class="value">Texas</span>
														</h5>
													</div>
													<h5>
														<span class="property">Address:</span>
														<span class="value">
															10515 Fox Ave Fairdale, Kentucky(KY), 40118
														</span>
													</h5>
													<h5 class="last">
														<span class="property">Phone:</span>
														<span class="value">+44-123-456-789</span>
													</h5>
													<div class="button-group">
														<button class="btn default disabled">
															Default
														</button>
													</div>
												</div>
											</div>
										</span>
									</label>
									{/* <!-- Saved Address --> */}
								</div>
								<div class="add-new-address">
									<label class="container">
										{" "}
										Add New Address
										<input type="radio" name="radio" />
										<span class="checkmark"></span>
									</label>
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<label for="method">Select a Region</label>
												<select id="method" class="form-control">
													<option selected>Select</option>
													<option>Select1</option>
													<option>Select2</option>
													<option>Select3</option>
												</select>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="FullName">Full name</label>
												<input type="text" id="FullName" class="form-control" />
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="Phone">Phone</label>
												<input type="tel" id="Phone" class="form-control" />
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="Postal">Postal code</label>
												<input type="text" id="Postal" class="form-control" />
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="Town">Town City</label>
												<input type="text" id="Town" class="form-control" />
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<label for="Address">Address</label>
												<input type="text" id="Address" class="form-control" />
											</div>
										</div>
										<div class="col-md-12">
											<div class="checkbox">
												<input
													type="checkbox"
													class="form-check-input"
													id="check"
												/>
												<label for="check">Save Shipping Details</label>
											</div>
										</div>
									</div>
								</div>
								<div class="payment-details">
									<div class="heading">
										<h3>Payment Details</h3>
									</div>
									<div class="saved-payment-method">
										<h5>Use Saved Payments</h5>
										{/* <!-- Saved payments Method --> */}
										<label class="container">
											<input
												type="radio"
												checked="checked"
												name="payment-radio"
											/>
											<span class="checkmark">
												<div class="card-details">
													<div class="radio-btn">
														<span></span>
													</div>
													<div class="visa-card">
														<div class="img-box">
															<figure>
																<img src={VisaCard} alt="No Image Found" />
															</figure>
														</div>
														<div class="input-box">
															<input
																id="card-number"
																value="**********1239"
																type="text"
																readonly
															/>
														</div>
													</div>
													<div class="extra-btn">
														<button class="btn default disabled">
															Default
														</button>
														<div class="selection">
															<i class="fa fa-check" aria-hidden="true"></i>
														</div>
													</div>
												</div>
											</span>
										</label>

										<label class="container second-card">
											<input type="radio" name="payment-radio" />
											<span class="checkmark">
												<div class="card-details">
													<div class="radio-btn">
														<span></span>
													</div>
													<div class="visa-card">
														<div class="img-box">
															<figure>
																<img src={VisaCard} alt="No Image Found" />
															</figure>
														</div>
														<div class="input-box">
															<input
																id="card-number"
																value="**********1239"
																type="text"
																readonly
															/>
														</div>
													</div>
													<div class="extra-btn">
														<button class="btn default disabled">
															Default
														</button>
														<div class="selection">
															<i class="fa fa-check" aria-hidden="true"></i>
														</div>
													</div>
												</div>
											</span>
										</label>

										<div class="add-new-method">
											<label class="container">
												{" "}
												Add New Payment
												<input
													type="radio"
													checked="checked"
													name="payment-radio"
												/>
												<span class="checkmark"></span>
											</label>
											<div class="form-group">
												<input
													type="text"
													placeholder="Write Your Card Number"
													class="form-control"
												/>
											</div>
											<div className="button-group">
												<button className="btn">Add Card</button>
											</div>
										</div>
										{/* <div class="card-type">
											<label class="container">
												<input type="radio" checked="checked" name="radio" />
												<span class="checkmark">
													<figure>
														<img src="img/pymnt1.png" class="img-fluid" />
													</figure>
												</span>
											</label>
											<label class="container">
												<input type="radio" name="radio" />
												<span class="checkmark">
													<figure>
														<img src="img/pymnt2.png" class="img-fluid" />
													</figure>
												</span>
											</label>
											<label class="container">
												<input type="radio" name="radio" />
												<span class="checkmark">
													<figure>
														<img src="img/pymnt3.png" class="img-fluid" />
													</figure>
												</span>
											</label>
											<label class="container">
												<input type="radio" name="radio" />
												<span class="checkmark">
													<figure>
														<img src="img/pymnt4.png" class="img-fluid" />
													</figure>
												</span>
											</label>
											<label class="container">
												<input type="radio" name="radio" />
												<span class="checkmark">
													<figure>
														<img src="img/pymnt5.png" class="img-fluid" />
													</figure>
												</span>
											</label>
										</div> */}
										{/* <!-- Saved payments Method --> */}
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="second-top-bar">
									<div class="title pb-4">
										<h3>Shipment Details</h3>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control"
											placeholder="Enter Promo Code"
										/>
										<button type="button">APPLY</button>
									</div>
								</div>
								<div class="cart-product-detail">
									<div class="title">
										<h3>Products Details</h3>
									</div>
									<div class="checkout-products">
										<div class="products">
											<div class="abt-product">
												<div class="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div class="pro-dtl">
													<h5 class="name">Whisper Coneflower</h5>
													<ul class="variations">
														<li>
															<span class="size">X3</span>
															<span class="size">2XL</span>
															<span class="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div class="product-price">
												<h4 class="price">$158.07 </h4>
											</div>
										</div>
										<div class="products">
											<div class="abt-product">
												<div class="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div class="pro-dtl">
													<h5 class="name">Whisper Coneflower</h5>
													<ul class="variations">
														<li>
															<span class="size">X3</span>
															<span class="size">2XL</span>
															<span class="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div class="product-price">
												<h4 class="price">$158.07 </h4>
											</div>
										</div>
										<div class="products">
											<div class="abt-product">
												<div class="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div class="pro-dtl">
													<h5 class="name">Whisper Coneflower</h5>
													<ul class="variations">
														<li>
															<span class="size">X3</span>
															<span class="size">2XL</span>
															<span class="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div class="product-price">
												<h4 class="price">$158.07 </h4>
											</div>
										</div>
										<div class="products">
											<div class="abt-product">
												<div class="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div class="pro-dtl">
													<h5 class="name">Whisper Coneflower</h5>
													<ul class="variations">
														<li>
															<span class="size">X3</span>
															<span class="size">2XL</span>
															<span class="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div class="product-price">
												<h4 class="price">$158.07 </h4>
											</div>
										</div>
										<div class="products">
											<div class="abt-product">
												<div class="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div class="pro-dtl">
													<h5 class="name">Whisper Coneflower</h5>
													<ul class="variations">
														<li>
															<span class="size">X3</span>
															<span class="size">2XL</span>
															<span class="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div class="product-price">
												<h4 class="price">$158.07 </h4>
											</div>
										</div>
										<div class="products">
											<div class="abt-product">
												<div class="img-box">
													<figure>
														<img src={CartProduct1} alt="123" />
													</figure>
												</div>
												<div class="pro-dtl">
													<h5 class="name">Whisper Coneflower</h5>
													<ul class="variations">
														<li>
															<span class="size">X3</span>
															<span class="size">2XL</span>
															<span class="size">Sliver</span>
														</li>
													</ul>
												</div>
											</div>
											<div class="product-price">
												<h4 class="price">$158.07 </h4>
											</div>
										</div>
									</div>
									<div class="pricing-details">
										<div class="item-total">
											<h4 class="property">Item Total :</h4>
											<h4 class="value">$50</h4>
										</div>
										<div class="item-total">
											<h4 class="property">Shipment & Delivery</h4>
											<h4 class="value">$0</h4>
										</div>
										<div class="item-total">
											<h4 class="property">Promo Applied :</h4>
											<h4 class="value">-$0</h4>
										</div>
									</div>

									<div class="order-total">
										<h3 class="property">Order Total</h3>
										<h3 class="value">$45</h3>
									</div>
								</div>
							</div>
						</div>
						<div class="border-last"></div>
						<div class="confirm-orderDv">
							<div class="checkbox">
								<input
									type="checkbox"
									class="form-check-input"
									id="for-checkbox"
								/>
								<label for="for-checkbox">
									Proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</label>
							</div>
							<div class="button-group">
								<button type="submit">Confirm Order</button>
							</div>
						</div>
					</form>
				</div>
			</section>
			{/* <!-- Checkout End Here --> */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Checkout;
