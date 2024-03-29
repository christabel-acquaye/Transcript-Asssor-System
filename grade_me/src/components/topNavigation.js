import React, { Component } from "react";
import {
	MDBNavbar,
	MDBNavbarBrand
	// MDBNavbarNav,
	// MDBNavbarToggler,
	// MDBCollapse,
	// MDBNavItem,
	// MDBNavLink,
	// MDBIcon
} from "mdbreact";

class TopNavigation extends Component {
	state = {
		collapse: false
	};

	onClick = () => {
		this.setState({
			collapse: !this.state.collapse
		});
	};

	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	};

	render() {
		return (
			<MDBNavbar className="flexible-navbar" light expand="md" scrolling>
				<MDBNavbarBrand href="/" />
				<div className="d-flex justify-content-between" style={{ width: "100%" }}>
					<div>Search</div>
					<div>John Doe</div>
				</div>
			</MDBNavbar>
		);
	}
}

export default TopNavigation;
