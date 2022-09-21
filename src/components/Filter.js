import React from "react";

const Filter = () => {
	return (
		<>
			<div class="sidebar">
				<div class="heading">
					<h3>Apply Filters</h3>
				</div>
				<div class="search">
					<form action="">
						<input type="text" placeholder="Search" class="form-control" />
						<button class="searchBtn" type="submit">
							<i class="fa fa-search" aria-hidden="true"></i>
						</button>
					</form>
				</div>
				<div class="filter">
					<div class="box">
						<div class="title">
							<h4>Brands</h4>
						</div>
						<ul class="list">
							<li>
								<label for="species1">Lorem</label>
								<input type="checkbox" id="species1" class="form-check-input" />
							</li>
							<li>
								<label for="species2">Lorem</label>
								<input type="checkbox" id="species2" class="form-check-input" />
							</li>
						</ul>
					</div>
					<div class="box">
						<div class="title">
							<h4>Color</h4>
						</div>
						<ul class="list">
							<li>
								<label for="species1">Black</label>
								<input type="checkbox" id="species1" class="form-check-input" />
							</li>
							<li>
								<label for="species2">White</label>
								<input type="checkbox" id="species2" class="form-check-input" />
							</li>
						</ul>
					</div>
					<div class="box">
						<div class="title">
							<h4>Size</h4>
						</div>
						<ul class="list">
							<li>
								<label for="color1">Large</label>
								<input type="checkbox" id="color1" class="form-check-input" />
							</li>
							<li>
								<label for="color2">Medium</label>
								<input type="checkbox" id="color2" class="form-check-input" />
							</li>
							<li>
								<label for="color2">Small</label>
								<input type="checkbox" id="color2" class="form-check-input" />
							</li>
						</ul>
					</div>
					<div class="price-range">
						<div class="title">
							<h4>Price</h4>
						</div>
						<div class="input-group">
							<div class="form-group">
								<label for="From">From</label>
								<input type="text" id="From" class="form-control" />
							</div>
							<div class="seprator"></div>
							<div class="form-group">
								<label for="To">To</label>
								<input type="text" id="To" class="form-control" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;
