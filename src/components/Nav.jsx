import { useEffect } from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from '../utils/DarkModeContext';
import "../styles/images.css";
import "../styles/animation.css";

export default function MainNav({updateBackgroundColor}) {

	const { isDarkMode, toggleDarkMode } = useDarkMode();

	useEffect(() => {
		updateBackgroundColor();
	}, [isDarkMode, updateBackgroundColor]);

	const handleDarkModeToggle = () => {
		toggleDarkMode();
		updateBackgroundColor();
	}

	useEffect(() => {
		const links = document.querySelectorAll(".link-bounce");
		links.forEach((item) => {
			const handleMouseEnter = () => {
				item.classList.add("animate-bounce");
				const handleAnimationEnd = () => {
					item.classList.remove("animate-bounce");
				};
				item.addEventListener("animationend", handleAnimationEnd, { once: true });
			};
			item.addEventListener("mouseenter", handleMouseEnter);
			return () => {
				item.removeEventListener("mouseenter", handleMouseEnter);
				item.removeEventListener("animationend");
			};
		});
	}, []);

	return (
		<header>
			<Navbar bg={isDarkMode ? "dark" : "light"} data-bs-theme={isDarkMode ? "dark" : "light"} expand="lg" className="nav-fixed">
				<Container>
					<Navbar.Brand href="/">
						<Image src="/cs-logo-removebg-preview.png" className="img-icon" />
					</Navbar.Brand>
					<Navbar.Brand href="/" className="link-bounce">
						Connor Swanson
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/" className="link-scale">
								Home
							</Nav.Link>
							<Nav.Link href="/about" className="link-scale">
								About
							</Nav.Link>
							<Nav.Link href="/resume" className="link-scale">
								Resume
							</Nav.Link>
							<Nav.Link href="/contact" className="link-scale">
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Brand className={`link-color-${isDarkMode ? 'w' : 'b'}`} onClick={handleDarkModeToggle}>
						<FontAwesomeIcon icon={faCircleHalfStroke} />
					</Navbar.Brand>
				</Container>
			</Navbar>
		</header>
	);
}
