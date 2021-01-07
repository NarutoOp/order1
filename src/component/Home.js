import React, { Component } from "react";
import banner1 from "./../images/tvs/banner1.jpg";
import banner2 from "./../images/tvs/banner2.jpg";
import banner3 from "./../images/tvs/banner3.jpg";
import banner4 from "./../images/tvs/banner4.jpg";
import banner5 from "./../images/tvs/banner5.jpg";
import { Carousel } from "react-bootstrap";
import schemeofthemonth from "./../images/tvs/schemeofthemonth.jpg";
import achievement from "./../images/tvs/achievement.jpg";
import helpline from "./../images/tvs/helpline.jpg";
import inquiry from "./../images/tvs/inquiry.jpg";
import servicebooking from "./../images/tvs/servicebooking.jpg";
import testdrive from "./../images/tvs/testdrive.jpg";

import { Modal, Button } from "react-bootstrap";

export default class Home extends Component {
	state = {
		isOpen: false,
	};

	openModal = () => this.setState({ isOpen: true });
	closeModal = () => this.setState({ isOpen: false });

	render() {
		return (
			<>
				<Carousel>
					<Carousel.Item>
						<img className="d-block w-100" src={banner1} />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={banner2} />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={banner3} />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={banner4} />
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={banner5} />
					</Carousel.Item>
				</Carousel>
				<span className="heading">WELCOME TO KS TVS</span>
				<div className="flex-grid mt-3">
					<img src={schemeofthemonth} onClick={this.openModal} />

					<img src={testdrive} onClick={this.openModal} />

					<img src={servicebooking} onClick={this.openModal} />

					<img src={inquiry} onClick={this.openModal} />

					<img src={helpline} onClick={this.openModal} />

					<img src={achievement} onClick={this.openModal} />
				</div>

				<Modal show={this.state.isOpen} onHide={this.closeModal}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Woohoo, you're reading this text in a modal!
					</Modal.Body>
					{/* <Modal.Footer> */}
					{/* 	<Button variant="secondary" onClick={this.closeModal}> */}
					{/* 		Close */}
					{/* 	</Button> */}
					{/* </Modal.Footer> */}
				</Modal>
			</>
		);
	}
}
