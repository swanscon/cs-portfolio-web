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
import { useDarkMode } from "../utils/DarkModeContext";

export default function ResumePage() {
	const { isDarkMode } = useDarkMode();

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
		<div className={isDarkMode ? "dark-mode-web" : "web-page"}>
			<Container className={isDarkMode ? "dark-mode-content" : "main-content"}>
				<Row className={isDarkMode ? "title-dark" : "section-title"}>
					<h1 className="title-font">Resume</h1>
				</Row>
				<Row className="center-horizontal">
					<Button className={`section-btn ${isDarkMode ? "btn-dark" : ""}`} onClick={onButtonClick}>
						Download CV
					</Button>
				</Row>
				<div className="empty-space-sm" />

				<div className="section">
					<h2  className={isDarkMode ? "title-dark" : "section-title"}>Projects</h2>
					{projects.map((project, index) => (
						<ProjectItem key={index} project={project} />
					))}
				</div>

				<div className="empty-space-sm" />

				<div className="section">
					<h2  className={isDarkMode ? "title-dark" : "section-title"}>Career</h2>
					{career.map((job, index) => (
						<CareerItem key={index} job={job} />
					))}
				</div>

				<div className="empty-space-sm" />

				<div className="section">
					<h2  className={isDarkMode ? "title-dark" : "section-title"}>Education</h2>
					{education.map((edu, index) => (
						<EducationItem key={index} edu={edu} />
					))}
				</div>

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
	const { isDarkMode } = useDarkMode();

	return (
		<Row className="project-item">
			<Col className="project-info">
				<h4>{project.title}</h4>
				<b>{project.role}</b>
				<i className={isDarkMode ? "text-grey" : ""}>{project.year}</i>
				<div className="links-container">
					{project.links.github && (
						<NavLink
							href={project.links.github}
							target="_blank"
							className={`section-btn-sm ${isDarkMode ? "btn-dark" : ""}`}
						>
							<FontAwesomeIcon icon={faGithub} />
						</NavLink>
					)}
					{project.links.live && (
						<NavLink
							href={project.links.live}
							target="_blank"
							className={`section-btn-sm ${isDarkMode ? "btn-dark" : ""}`}
						>
							<FontAwesomeIcon icon={faGlobe} />
						</NavLink>
					)}
					{project.links.gitlab && (
						<NavLink
							href={project.links.gitlab}
							target="_blank"
							className={`section-btn-sm ${isDarkMode ? "btn-dark" : ""}`}
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
	const { isDarkMode } = useDarkMode();

	return (
		<Row className="career-item">
			<Col className="career-info">
				<h4>{job.company}</h4>
				<b>{job.role}</b>
				<i className={isDarkMode ? "text-grey" : ""}>{job.years}</i>
				<p>{job.description}</p>
			</Col>
		</Row>
	);
}

function EducationItem({ edu }) {
	const { isDarkMode } = useDarkMode();

	return (
		<Row className="education-item">
			<Col className="education-info">
				<h4>{edu.institution}</h4>
				<b>{edu.degree}</b>
				<i className={isDarkMode ? "text-grey" : ""}>{edu.year}</i>
				<p>{edu.description}</p>
			</Col>
		</Row>
	);
}
