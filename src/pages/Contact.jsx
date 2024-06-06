import { useState } from "react";
import { Col, Row, Container, Form, NavLink, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import AlertComponent from "../components/Alert";
import { useDarkMode } from "../utils/DarkModeContext";

export default function ContactPage() {
	const { isDarkMode } = useDarkMode();

	const [alertVisible, setAlertVisible] = useState(false);
	const [alertMessage, setAlertMessage] = useState("Sending message...");
	const [alertColor, setAlertColor] = useState("alert-grey");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setAlertColor("alert-grey");
		setAlertMessage("Sending message...");
		setAlertVisible(true);

		try {
			setLoading(true);
			const response = await fetch("https://formsubmit.co/ajax/swanscon@gmail.com", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setAlertMessage("Your message has been sent successfully!");
				setAlertColor("alert-blue");
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: "",
				});
			} else {
				setAlertMessage("Failed to send the message. Please try again later.");
				setAlertColor("alert-red");
			}
		} catch (error) {
			setAlertMessage("Failed to send the message. Please try again later.");
			setAlertColor("alert-red");
			console.error("Error during form submission:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleAlertClose = () => {
		setAlertVisible(false);
		setAlertColor("alert-grey");
		setAlertMessage("Sending message...");
	};

	return (
		<div className={isDarkMode ? "dark-mode-web" : "web-page"}>
			<AlertComponent
				visible={alertVisible}
				message={alertMessage}
				onClose={handleAlertClose}
				alertColor={alertColor}
			/>
			<Container className={isDarkMode ? "dark-mode-content" : "main-content"}>
				<h1 className={isDarkMode ? "title-dark" : "section-title"}>Contact</h1>
				<Row>
					<Col className={`section-main ${isDarkMode ? "section-dark" : ""}`}>
						<div className="empty-space-sm" />
						<Form onSubmit={handleSubmit}>
							<Form.Group>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Phone</Form.Label>
								<Form.Control
									type="text"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									required
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Message</Form.Label>
								<Form.Control
									as="textarea"
									rows={4}
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</Form.Group>

							<div className="empty-space-sm" />
							<div className="center-horizontal">
								<Button
									type="submit"
									className={`section-btn ${isDarkMode ? "btn-dark" : ""}`}
									disabled={loading}
								>
									{loading ? "Sending..." : "Send"}
								</Button>
							</div>
							<div className="empty-space-sm" />
							<p className="center-horizontal text-grey">
								If I do not reply within 10 business-days please see Contact Info
								provided.
							</p>
						</Form>
					</Col>
					<div className="empty-space-sm" />
					<Row className="center-horizontal">
						<ul>
							<li>
								<b>Email: </b>swanscon@gmail.com
							</li>
							<li>
								<b>Phone: </b>763-213-6583
							</li>
							<li>
								<b>Location: </b>Minneapolis, MN
							</li>
							<div className="empty-space-sm" />
							<li>
								<Row className="center-horizontal">
									<NavLink
										href="https://linkedin.com/in/connor-m-swanson"
										className={`center-horizontal section-btn-sm ${
											isDarkMode ? "btn-dark" : ""
										}`}
										target="_blank"
									>
										<FontAwesomeIcon icon={faLinkedin} />
									</NavLink>

									<NavLink
										href="https://github.com/swanscon"
										className={`center-horizontal section-btn-sm ${
											isDarkMode ? "btn-dark" : ""
										}`}
										target="_blank"
									>
										<FontAwesomeIcon icon={faGithub} />
									</NavLink>
								</Row>
							</li>
						</ul>
					</Row>
					<div className="empty-space-sm" />
				</Row>
			</Container>
		</div>
	);
}
