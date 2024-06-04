import { Container, Navbar } from "react-bootstrap";
import { useDarkMode } from "../utils/DarkModeContext";

export default function Footer() {
	const { isDarkMode } = useDarkMode();

	return (
		<footer>
			<Navbar bg={isDarkMode ? "dark" : "light"} data-bs-theme={isDarkMode ? "dark" : "light"} className="nav-foot">
				<Container>
					<Navbar.Text>&copy; {new Date().getFullYear()} Connor Swanson</Navbar.Text>
					<Navbar.Text className="ms-auto">
						Powered by React & React-Bootstrap
					</Navbar.Text>
				</Container>
			</Navbar>
		</footer>
	);
}
