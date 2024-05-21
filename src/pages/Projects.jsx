import { Card, Col, Container, NavLink } from "react-bootstrap";

export default function ProjectsPage() {
	return (
		<div>
			<Container className="main-content">
				<h1>Projects</h1>
				<Col>
					<Card>
						<Card.Title>TABLFG</Card.Title>
						<Card.Subtitle>Codebase, Etc.</Card.Subtitle>
						<Card.ImgOverlay></Card.ImgOverlay>
						<Card.Body>Description</Card.Body>
						<Card.Footer>
							<NavLink to="/">Link</NavLink>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Title>Tree Top Insurance</Card.Title>
						<Card.Subtitle>Codebase, Etc.</Card.Subtitle>
						<Card.ImgOverlay></Card.ImgOverlay>
						<Card.Body>Description</Card.Body>
						<Card.Footer>
							<NavLink to="/">Link</NavLink>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Title>Elden Ring Equip Load Calculator</Card.Title>
						<Card.Subtitle>Codebase, Etc.</Card.Subtitle>
						<Card.ImgOverlay></Card.ImgOverlay>
						<Card.Body>Description</Card.Body>
						<Card.Footer>
							<NavLink to="/">Link</NavLink>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Title>FOMORE</Card.Title>
						<Card.Subtitle>Codebase, Etc.</Card.Subtitle>
						<Card.ImgOverlay></Card.ImgOverlay>
						<Card.Body>Description</Card.Body>
						<Card.Footer>
							<NavLink to="/">Link</NavLink>
						</Card.Footer>
					</Card>
				</Col>
			</Container>
		</div>
	);
}
