import { useEffect, useState } from "react";
import { Button, Container, Image, Row } from "react-bootstrap";
import { useDarkMode } from "../utils/DarkModeContext";

export default function HomePage() {
	const { isDarkMode } = useDarkMode();

	//connorswanson.dev
	const [animate, setAnimate] = useState(false);
	const [imageHover, setImageHover] = useState(false);
	const [welcomeLoop, setWelcomeLoop] = useState("Welcome!");
	const [intervalId, setIntervalId] = useState(null);

	const welcomeMessages = [
		"¡Bienvenido!",
		"欢迎!",
		"ようこそ!",
		"환영합니다!",
		"स्वागत है!",
		"Welcome!",
	];

	useEffect(() => {
		setAnimate(true);
		if (imageHover) {
			let index = 0;
			const id = setInterval(() => {
				setWelcomeLoop(welcomeMessages[index]);
				index = (index + 1) % welcomeMessages.length;
			}, 4000); // Change text every 4 seconds
			setIntervalId(id);
		} else {
			clearInterval(intervalId);
			setWelcomeLoop("Welcome!");
		}

		return () => clearInterval(intervalId); // Clear interval on unmount
		// eslint-disable-next-line
	}, [imageHover]);

	const onButtonClick = () => {
		const pdfUrl = "Connor-Swanson-Resume.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "Connor-Swanson-Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleImageHover = () => {
		setImageHover(!imageHover);
		if (imageHover) {
			//at 4s, setWelcomeLoop("¡Bienvenido!")
			//at 8s, setWelcomeLoop("欢迎!")
			//at 12s, setWelcomeLoop("ようこそ!")
			//at 16s, setWelcomeLoop("환영합니다!")
			//at 20s, setWelcomeLoop("स्वागत है!")
		} else {
			//setWelcomeLoop("Welcome")
		}
	};

	return (
		<div className={isDarkMode ? "dark-mode-web" : "web-page"}>
			<Container className={isDarkMode ? "dark-mode-content" : "main-content"}>
				<Row className="center-horizontal">
					<Image
						src="/Connor001-sq.jpg"
						className={`img-small img-round img-blur image-wrapper fade-in ${
							animate ? "visible0" : ""
						}`}
						onMouseEnter={handleImageHover}
						onMouseLeave={handleImageHover}
					/>
					{imageHover && (
						<div className="welcome-container">
							<div className="welcome-text">{welcomeLoop}</div>
						</div>
					)}
				</Row>
				<Row className="center-horizontal">
					<div className={`fade-in-drop ${animate ? "visible1" : ""}`}>
						<h1>Connor Swanson</h1>
					</div>
					<h4 className={`fade-in-drop ${animate ? "visible2" : ""}`}>
						Full-Stack Software Developer
					</h4>
					<p className={`fade-in-drop ${animate ? "visible3" : ""}`}>
						<i className={isDarkMode ? "text-grey" : ""}>
							Java - Spring Framework - Python - JavaScript - React - SQL -
							Microservices
						</i>
					</p>
				</Row>
				<Row className="center-horizontal">
					<Button
						className={`section-btn fade-in ${animate ? "visible4" : ""} ${isDarkMode ? "btn-dark" : ""}`}
						onClick={onButtonClick}
					>
						Download CV
					</Button>
				</Row>
			</Container>
		</div>
	);
}
