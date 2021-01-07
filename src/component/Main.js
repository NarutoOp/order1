import React, { Component } from "react";
import "./Home.css";
import { Grid, Typography } from "@material-ui/core";
import logo from "./../images/tvs/logo.png";
import Home from "./Home";
import TabNav from "./TabNav";
import Tab from "./Tab";

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "HOME",
		};
	}

	setSelected = (tab) => {
		this.setState({ selected: tab });
	};
	render() {
		return (
			<>
				<Grid
					container
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<Grid class="header_left">
						<img src={logo} />
					</Grid>
					<Grid item class="header_right">
						<Typography
							color="error"
							variant="h6"
							style={{ fontWeight: 600 }}
						>
							KS Motors Pvt. Ltd.
						</Typography>
					</Grid>
				</Grid>
				<br></br>
				<Grid className="menu-main">
					<TabNav
						tabs={[
							"HOME",
							"ABOUT US",
							"PRODUCT",
							"SERVICES",
							"BRANCHES",
							"FINANCE",
							"INSURANCE",
							"EXCHANGE",
							"ACCESSORIES",
							"FEEDBACK",
							"CAREERS",
							"CONTACT US",
						]}
						selected={this.state.selected}
						setSelected={this.setSelected}
					>
						<Tab isSelected={this.state.selected === "HOME"}>
							<Home />
						</Tab>
						<Tab isSelected={this.state.selected === "ABOUT US"}>
							<p>Hello 2</p>
						</Tab>
						<Tab isSelected={this.state.selected === "PRODUCT"}>
							<p>Hello 3</p>
						</Tab>
					</TabNav>
				</Grid>
				<Grid className="footer">
					<div className="bottom-nav">
						<TabNav
							tabs={[
								"HOME",
								"ABOUT US",
								"PRODUCT",
								"SERVICES",
								"BRANCHES",
								"FINANCE",
								"INSURANCE",
								"EXCHANGE",
								"ACCESSORIES",
								"FEEDBACK",
								"CAREERS",
								"CONTACT US",
							]}
							selected={this.state.selected}
							setSelected={this.setSelected}
						/>
						<div className="my-logo">
							Powered by:
							<span style={{ color: "red" }}>NarutoOP</span>
						</div>
					</div>
				</Grid>
			</>
		);
	}
}
