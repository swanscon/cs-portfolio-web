import { Container, Row, Col, NavLink, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import JavaLogo from "../assets/java-original.svg";
import KafkaLogo from "../assets/kafka-icon.svg";
import SpringLogo from "../assets/spring.svg";
import ReactLogo from "../assets/react.svg";
import MySqlLogo from "../assets/file-type-mysql.svg";
import DockerLogo from "../assets/docker.svg";
import VueLogo from "../assets/vue.svg";
import JavaScriptLogo from "../assets/javascript-js.svg";
import CssLogo from "../assets/file-type-css.svg";
import HtmlLogo from "../assets/file-type-html.svg";
import PythonLogo from "../assets/python.svg";
import MongoLogo from "../assets/mongodb-original.svg";
import "../styles/resume.css";

export default function ResumePage() {
	const onButtonClick = () => {
		const pdfUrl = "Connor-Swanson-Resume.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "Connor-Swanson-Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="resume-page">
			<Container className="main-content">
				<Row className="section-title">
					<h1>Resume</h1>
				</Row>
				<Row className="center-horizontal">
					<Button className="section-btn" onClick={onButtonClick}>
						Download CV
					</Button>
				</Row>
				<div className="empty-space-sm" />

				<div className="section">
					<h2 className="section-title">Projects</h2>
					{projects.map((project, index) => (
						<ProjectItem key={index} project={project} />
					))}
				</div>

				{/* <Container className="section-main">
					<Row className="center-horizontal">
						<h2 className="text-section">Projects</h2>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>TABLFG</h4>
							</Row>
							<Row>
								<b>Full-Stack Engineer</b>
							</Row>
							<Row>
								<i>2024</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<div>
									<NavLink
										href="https://github.com/swanscon/tablfg"
										className="center-horizontal section-header"
										target="_blank"
									>
										<FontAwesomeIcon icon={faGithub} />
									</NavLink>
									<i className="center-horizontal padding-tb-sm">
										<Image
											src={JavaLogo}
											alt="Java Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={KafkaLogo}
											alt="Kafka Logo"
											className="img-icon-pad margin-lr-sm"
										/>{" "}
										<Image
											src={SpringLogo}
											alt="Spring Logo"
											className="img-icon margin-lr-sm"
										/>{" "}
										<Image
											src={ReactLogo}
											alt="React Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={MySqlLogo}
											alt="MySql Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={DockerLogo}
											alt="Docker Logo"
											className="img-icon-sm margin-lr-sm"
										/>
									</i>
									Event-scheduling microservice-based web application with a
									Java/Spring Boot backend utilizing a gateway and asynchronous
									communication with Kafka, Spring Security, and RESTful API.
								</div>
							</Row>
						</Col>
					</Row>
					<Row className="center-row">
						<Col>◓</Col>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>Equip Load Calculator</h4>
							</Row>
							<Row>
								<b>Front-End Developer</b>
							</Row>
							<Row>
								<i>2023</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<div>
									<Row>
										<Col>
											<NavLink
												href="https://github.com/swanscon/equip-load-calculator"
												className="center-horizontal section-header"
												target="_blank"
											>
												<FontAwesomeIcon icon={faGithub} />
											</NavLink>
										</Col>
										<Col>
											<NavLink
												href="https://swanscon.github.io/equip-load-calculator/"
												className="center-horizontal section-header"
												target="_blank"
											>
												<FontAwesomeIcon icon={faGlobe} />
											</NavLink>
										</Col>
									</Row>
									<i className="center-horizontal padding-tb-sm">
										<Image
											src={VueLogo}
											alt="Vue Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={JavaScriptLogo}
											alt="JavaScript Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={CssLogo}
											alt="Css Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={HtmlLogo}
											alt="Html Logo"
											className="img-icon-sm margin-lr-sm"
										/>
									</i>
									Developed a Vue.js-based application for calculating and
									classifying equipment load for the FromSoftware game Elden
									Ring&#8482; utilizing Vue Router for navigation, Pinia for state
									management, and designing a responsive UI with advanced forms
									and dynamic results presentation.
								</div>
							</Row>
						</Col>
					</Row>
					<Row className="center-row">
						<Col>◓</Col>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>Tree Top Insurance</h4>
							</Row>
							<Row>
								<b>Static Web Developer</b>
							</Row>
							<Row>
								<i>2023</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<div>
									<Row>
										<Col>
											<NavLink
												href="https://github.com/swanscon/treetop-insurance"
												className="center-horizontal section-header"
												target="_blank"
											>
												<FontAwesomeIcon icon={faGithub} />
											</NavLink>
										</Col>
										<Col>
											<NavLink
												href="https://treetop-insurance.pages.dev/"
												className="center-horizontal section-header"
												target="_blank"
											>
												<FontAwesomeIcon icon={faGlobe} />
											</NavLink>
										</Col>
									</Row>
									<i className="center-horizontal padding-tb-sm">
										<Image
											src={ReactLogo}
											alt="React Logo"
											className="img-icon-sm margin-lr-sm section-subheader"
										/>{" "}
										<Image
											src={JavaScriptLogo}
											alt="JavaScript Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={CssLogo}
											alt="Css Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={HtmlLogo}
											alt="Html Logo"
											className="img-icon-sm margin-lr-sm"
										/>
									</i>
									Developed a comprehensive insurance portal using React and React
									Router for streamlined navigation across various insurance
									products and services. Integrated functional components for user
									interactions like obtaining quotes, scheduling appointments, and
									viewing detailed insurance options.
								</div>
							</Row>
						</Col>
					</Row>
					<Row className="center-row">
						<Col>◓</Col>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>FOMORE</h4>
							</Row>
							<Row>
								<b>Full-Stack Engineer</b>
							</Row>
							<Row>
								<i>2022</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<div>
									<NavLink
										href="https://gitlab.com/patcerutti23/fomore"
										className="center-horizontal section-header"
										target="_blank"
									>
										<FontAwesomeIcon icon={faGitlab} />
									</NavLink>
									<i className="center-horizontal">
										<Image
											src={JavaScriptLogo}
											alt="JavaScript Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={PythonLogo}
											alt="Python Logo"
											className="img-icon-sm margin-lr-sm"
										/>{" "}
										<Image
											src={MongoLogo}
											alt="Mongo Logo"
											className="img-icon"
										/>{" "}
										<Image
											src={DockerLogo}
											alt="Docker Logo"
											className="img-icon-sm margin-lr-sm"
										/>
									</i>
									Built a scalable back-end with FastAPI and MongoDB to create an
									itinerary builder that utilizes third- party APIs for search
									functionality and leveraged React and Redux to build a
									user-friendly front-end.
								</div>
							</Row>
						</Col>
					</Row>
				</Container> */}
				<div className="empty-space-sm" />

				<div className="section">
					<h2 className="section-title">Career</h2>
					{career.map((job, index) => (
						<CareerItem key={index} job={job} />
					))}
				</div>

				{/* <Container className="section-main">
					<Row className="center-horizontal">
						<h2 className="text-section">Career</h2>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>Aston Technologies Inc</h4>
							</Row>
							<Row>
								<b>Web Developer Mentee</b>
							</Row>
							<Row>
								<i>2023 - 2024</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<p>
									Completed coursework on modern software architecture. Agile
									methodologies implemented in daily standups and review sessions.
									Built microservice-based applications utilizing asynchronous
									communication and containerization.{" "}
								</p>
							</Row>
						</Col>
					</Row>
					<Row className="center-row">
						<Col>◓</Col>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>Prairie Lutheran Church</h4>
							</Row>
							<Row>
								<b>Sound Board Operator</b>
							</Row>
							<Row>
								<i>2022</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<p>
									Assisted in software research and hardware development for
									large-scale audio productions, developing a deep understanding
									of how technology can be applied to solve complex problems.
								</p>
							</Row>
						</Col>
					</Row>
					<Row className="center-row">
						<Col>◓</Col>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>EPG Companies Inc</h4>
							</Row>
							<Row>
								<b>Control Panel Builder</b>
							</Row>
							<Row>
								<i>2019 - 2020</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<p>
									Assembled panels by reviewing specifications and editing
									documentation, developing a meticulous attention to detail and
									the ability to work accurately and efficiently.
								</p>
							</Row>
						</Col>
					</Row>
					<Row className="center-row">
						<Col>◓</Col>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>Jersey Mike's Subs</h4>
							</Row>
							<Row>
								<b>Shift Leader</b>
							</Row>
							<Row>
								<i>2014 - 2018</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<p>
									Provided customer-facing services while troubleshooting customer
									issues and concerns. Assisted in training of employees and
									maintaining a supportive and efficient workspace.
								</p>
							</Row>
						</Col>
					</Row>
				</Container> */}
				<div className="empty-space-sm" />

				<div className="section">
					<h2 className="section-title">Education</h2>
					{education.map((edu, index) => (
						<EducationItem key={index} edu={edu} />
					))}
				</div>
				{/* <Container className="section-main">
					<Row className="center-horizontal">
						<h2 className="text-section">Education</h2>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>Galvanize Hack Reactor</h4>
							</Row>
							<Row>
								<b>Certificate of Advanced Software Engineering</b>
							</Row>
							<Row>
								<i>2022</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<p>
									Completed an immersive software engineering program focused on
									building working, scalable web applications in a team
									environment.
								</p>
							</Row>
						</Col>
					</Row>
					<Row className="center-row">
						<Col>◓</Col>
					</Row>
					<Row>
						<Col className="border-right text-align-right">
							<Row>
								<h4>Hennepin Technical College</h4>
							</Row>
							<Row>
								<b>Audio Production Specialist AAS Degree</b>
							</Row>
							<Row>
								<i>2015 - 2018</i>
							</Row>
						</Col>
						<Col className="border-left">
							<Row>
								<p>
									Became well versed in Analog/Digital Audio Workstations and
									Signal Processing, developing a strong foundation in technical
									skills and problem-solving.
								</p>
							</Row>
						</Col>
					</Row>
				</Container> */}
			</Container>
			<div className="empty-space" />
		</div>
	);
}

const projects = [
	{
		title: "TABLFG",
		role: "Full-Stack Engineer",
		year: "2024",
		description:
			"Event-scheduling microservice-based web application with a Java/Spring Boot backend utilizing a gateway and asynchronous communication with Kafka, Spring Security, and RESTful API.",
		tech: [JavaLogo, KafkaLogo, SpringLogo, ReactLogo, MySqlLogo, DockerLogo],
		links: {
			github: "https://github.com/swanscon/tablfg",
		},
	},
	{
		title: "Equip Load Calculator",
		role: "Front-End Developer",
		year: "2023",
		description:
			"Developed a Vue.js-based application for calculating and classifying equipment load for the FromSoftware game Elden Ring™ utilizing Vue Router for navigation, Pinia for state management, and designing a responsive UI with advanced forms and dynamic results presentation.",
		tech: [VueLogo, JavaScriptLogo, CssLogo, HtmlLogo],
		links: {
			github: "https://github.com/swanscon/equip-load-calculator",
			live: "https://swanscon.github.io/equip-load-calculator/",
		},
	},
	{
		title: "Tree Top Insurance",
		role: "Static Web Developer",
		year: "2023",
		description:
			"Developed a comprehensive insurance portal using React and React Router for streamlined navigation across various insurance products and services. Integrated functional components for user interactions like obtaining quotes, scheduling appointments, and viewing detailed insurance options.",
		tech: [ReactLogo, JavaScriptLogo, CssLogo, HtmlLogo],
		links: {
			github: "https://github.com/swanscon/treetop-insurance",
			live: "https://treetop-insurance.pages.dev/",
		},
	},
	{
		title: "FOMORE",
		role: "Full-Stack Engineer",
		year: "2022",
		description:
			"Built a scalable back-end with FastAPI and MongoDB to create an itinerary builder that utilizes third- party APIs for search functionality and leveraged React and Redux to build a user-friendly front-end.",
		tech: [JavaScriptLogo, PythonLogo, MongoLogo, DockerLogo],
		links: {
			gitlab: "https://gitlab.com/patcerutti23/fomore",
		},
	},
];

const career = [
	{
		company: "Aston Technologies Inc",
		role: "Web Developer Mentee",
		years: "2023 - 2024",
		description:
			"Completed coursework on modern software architecture. Agile methodologies implemented in daily standups and review sessions. Built microservice-based applications utilizing asynchronous communication and containerization.",
	},
	{
		company: "Prairie Lutheran Church",
		role: "Sound Board Operator",
		years: "2022",
		description:
			"Assisted in software research and hardware development for large-scale audio productions, developing a deep understanding of how technology can be applied to solve complex problems.",
	},
	{
		company: "EPG Companies Inc",
		role: "Control Panel Builder",
		years: "2019 - 2020",
		description:
			"Assembled panels by reviewing specifications and editing documentation, developing a meticulous attention to detail and the ability to work accurately and efficiently.",
	},
	{
		company: "Jersey Mike's Subs",
		role: "Shift Leader",
		years: "2014 - 2018",
		description:
			"Provided customer-facing services while troubleshooting customer issues and concerns. Assisted in training of employees and maintaining a supportive and efficient workspace.",
	},
];

const education = [
	{
		institution: "Galvanize Hack Reactor",
		degree: "Certificate of Advanced Software Engineering",
		year: "2022",
		description:
			"Completed an immersive software engineering program focused on building working, scalable web applications in a team environment.",
	},
	{
		institution: "Hennepin Technical College",
		degree: "Audio Production Specialist AAS Degree",
		year: "2018",
		description:
			"Became well versed in Analog/Digital Audio Workstations and Signal Processing, developing a strong foundation in technical skills and problem-solving.",
	},
];

function ProjectItem({ project }) {
	return (
		<Row className="project-item">
			<Col className="project-info">
				<h4>{project.title}</h4>
				<b>{project.role}</b>
				<i>{project.year}</i>
				<div className="links-container">
					{project.links.github && (
						<NavLink
							href={project.links.github}
							target="_blank"
							className="section-btn-sm"
						>
							<FontAwesomeIcon icon={faGithub} />
						</NavLink>
					)}
					{project.links.live && (
						<NavLink
							href={project.links.live}
							target="_blank"
							className="section-btn-sm"
						>
							<FontAwesomeIcon icon={faGlobe} />
						</NavLink>
					)}
					{project.links.gitlab && (
						<NavLink
							href={project.links.gitlab}
							target="_blank"
							className="section-btn-sm"
						>
							<FontAwesomeIcon icon={faGitlab} />
						</NavLink>
					)}
				</div>
				
			</Col>
			<Col className="project-info">
				<p>{project.description}</p>
			</Col>
			<Col className="project-info">
			<div className="center-horizontal tech-icons">
					{project.tech.map((logo, index) => (
						<Image key={index} src={logo} alt="Tech Logo" className="tech-icon" />
					))}
				</div>
			</Col>
		</Row>
	);
}

function CareerItem({ job }) {
	return (
		<Row className="career-item">
			<Col className="career-info">
				<h4>{job.company}</h4>
				<b>{job.role}</b>
				<i>{job.years}</i>
				<p>{job.description}</p>
			</Col>
		</Row>
	);
}

function EducationItem({ edu }) {
	return (
		<Row className="education-item">
			<Col className="education-info">
				<h4>{edu.institution}</h4>
				<b>{edu.degree}</b>
				<i>{edu.year}</i>
				<p>{edu.description}</p>
			</Col>
		</Row>
	);
}
