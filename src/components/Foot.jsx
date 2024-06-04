import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
	return (
		<footer>
			<Navbar className="bg-body-tertiary nav-foot">
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
