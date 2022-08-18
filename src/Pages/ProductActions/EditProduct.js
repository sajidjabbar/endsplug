import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/EditProduct.css";

const EditProduct = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Edit Product Sec Start Here */}
			<section className="eidt-product">
				<div className="container">
					<div className="edit-product-box">
						<div className="heading-wrapper">
							<h3>Edit Product</h3>
						</div>
						<form action="">
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<label>Product title*</label>
										<input
											type="text"
											placeholder="Type here.."
											className="form-control"
										/>
									</div>
								</div>
								<div className="col-md-12">
									<label>Add Product Images</label>
									<div className="input-group">
										<div className="form-group">
											<label htmlFor="pro1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24.765"
													height="24.765"
													viewBox="0 0 24.765 24.765"
												>
													<path
														id="plus"
														d="M18.258,18.258v9.631a1.376,1.376,0,0,1-2.752,0V18.258H5.876a1.376,1.376,0,0,1,0-2.752h9.631V5.876a1.376,1.376,0,0,1,2.752,0v9.631h9.631a1.376,1.376,0,0,1,0,2.752Z"
														transform="translate(-4.5 -4.5)"
														fill="#fff"
														fill-rule="evenodd"
													/>
												</svg>
												<input
													type="file"
													hidden
													className="form-control"
													id="pro1"
												/>
											</label>
										</div>
										<div className="form-group">
											<label htmlFor="pro2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24.765"
													height="24.765"
													viewBox="0 0 24.765 24.765"
												>
													<path
														id="plus"
														d="M18.258,18.258v9.631a1.376,1.376,0,0,1-2.752,0V18.258H5.876a1.376,1.376,0,0,1,0-2.752h9.631V5.876a1.376,1.376,0,0,1,2.752,0v9.631h9.631a1.376,1.376,0,0,1,0,2.752Z"
														transform="translate(-4.5 -4.5)"
														fill="#fff"
														fill-rule="evenodd"
													/>
												</svg>
												<input
													type="file"
													hidden
													className="form-control"
													id="pro2"
												/>
											</label>
										</div>
										<div className="form-group">
											<label htmlFor="pro3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24.765"
													height="24.765"
													viewBox="0 0 24.765 24.765"
												>
													<path
														id="plus"
														d="M18.258,18.258v9.631a1.376,1.376,0,0,1-2.752,0V18.258H5.876a1.376,1.376,0,0,1,0-2.752h9.631V5.876a1.376,1.376,0,0,1,2.752,0v9.631h9.631a1.376,1.376,0,0,1,0,2.752Z"
														transform="translate(-4.5 -4.5)"
														fill="#fff"
														fill-rule="evenodd"
													/>
												</svg>
												<input
													type="file"
													hidden
													className="form-control"
													id="pro3"
												/>
											</label>
										</div>
										<div className="form-group">
											<label htmlFor="pro4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24.765"
													height="24.765"
													viewBox="0 0 24.765 24.765"
												>
													<path
														id="plus"
														d="M18.258,18.258v9.631a1.376,1.376,0,0,1-2.752,0V18.258H5.876a1.376,1.376,0,0,1,0-2.752h9.631V5.876a1.376,1.376,0,0,1,2.752,0v9.631h9.631a1.376,1.376,0,0,1,0,2.752Z"
														transform="translate(-4.5 -4.5)"
														fill="#fff"
														fill-rule="evenodd"
													/>
												</svg>
												<input
													type="file"
													hidden
													className="form-control"
													id="pro4"
												/>
											</label>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label>Product type*</label>
										<select className="form-control">
											<option selected>Select type</option>
											<option>Product 1</option>
											<option>Product 2</option>
											<option>Product 3</option>
										</select>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label>Product Description</label>
										<textarea
											className="form-control"
											placeholder="Minimum 100 words"
										></textarea>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Price*</label>
										<select className="form-control">
											<option selected>Select type</option>
											<option>100</option>
											<option>200</option>
											<option>300</option>
										</select>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Location</label>
										<select className="form-control">
											<option selected>Select type</option>
											<option>California</option>
											<option>Amesterdam</option>
											<option>Tokyo</option>
										</select>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label>Disclaimer*</label>
										<textarea
											placeholder="Disclaimer..."
											className="form-control"
										></textarea>
									</div>
								</div>
								<div className="col-md-12">
									<div className="button-group">
										<button className="btn">Submit & Preview</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			{/* Edit Product Sec End Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default EditProduct;
