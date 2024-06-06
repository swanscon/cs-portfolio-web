import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as Logos from '../assets/logos';
import { useDarkMode } from "../utils/DarkModeContext";

export default function AboutPage() {
	const { isDarkMode } = useDarkMode();
	
	const handleScrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<div className={isDarkMode ? "dark-mode-web" : "web-page"}>
			<Container className={isDarkMode ? "dark-mode-content" : "main-content"}>
				<Row className="center-horizontal">
					<h1 className={`title-font ${isDarkMode ? "title-dark" : "section-title"}`}>About Connor</h1>
				</Row>
				<div className="empty-space-sm" />
				<Row>
					
					<Col className={`section-about ${isDarkMode ? "section-dark" : ""}`}>
						<p>
							Connor began his developer journey all the way back at the age of 9,
							putting together a simple Sonic the Hedgehog&#8482; fan page using
							Macromedia Dreamweaver! &#40;Note, this was all the way back in
							2002!&#41; Since then, he has rediscovered that childhood passion to
							create and explore the limits of design, experimentation, and structural
							development as he took to completing a 19-week Advanced Software
							Engineering course through Hack Reactor and spent 8 months as a Web
							Developer Mentee with Aston Technologies Inc. These experiences, in
							addition with his drive for success, have helped usher Connor into a
							raring-to-go all-in-one coder seeking further opportunities to expand
							his skillset and reach new heights!
						</p>
					</Col>
					
				</Row>
				<Row className="center-horizontal">
					<NavLink to="/resume" className={`section-btn ${isDarkMode ? "btn-dark" : ""}`} style={{textDecoration: 'none'}} onClick={handleScrollToTop} >Check out my Resumé!</NavLink>
				</Row>
				<Row className="center-horizontal">
					<h2 className="text-section">Technical Proficiencies</h2>
				</Row>
				<div className="empty-space-sm" />
				<Row className="center-horizontal">
					<Col className="section-grid" alt="Java" title="Java">
						<Image src={Logos.JavaLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Python" title="Python">
						<Image src={Logos.PythonLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="JavaScript" title="JavaScript">
						<Image src={Logos.JavaScriptLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="TypeScript" title="TypeScript">
						<Image src={Logos.TypeScriptLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="HTML" title="HTML">
						<Image src={Logos.HtmlLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="CSS" title="CSS">
						<Image src={Logos.CssLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="SQL" title="SQL">
						<Image src={Logos.SqlLogo} className="img-icon-sm" />
					</Col>
				</Row>
				<Row className="center-horizontal">
					<Col className="section-grid" alt="Spring Framework" title="Spring Framework">
						<Image src={Logos.SpringLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="MySQL" title="MySQL">
						<Image src={Logos.MySQLLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="MSSQL" title="MSSQL">
						<Image src={Logos.MsSQLLogo} className="img-icon scale-lg" />
					</Col>
					<Col className="section-grid" alt="PostgreSQL" title="PostgreSQL">
						<Image src={Logos.PostgresLogo} className="img-icon-md" />
					</Col>
					<Col className="section-grid" alt="MongoDB" title="MongoDB">
						<Image src={Logos.MongoLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="h2 Database" title="h2 Database">
						<Image src={Logos.h2Logo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Redis" title="Redis">
						<Image src={Logos.RedisLogo} className="img-icon" />
					</Col>
				</Row>
				<Row className="center-horizontal">
					<Col className="section-grid" alt="Django" title="Django">
						<Image src={Logos.DjangoLogo} className="img-icon-sm" />
					</Col>
					<Col className="section-grid" alt="FastAPI" title="FastAPI">
						<Image src={Logos.FastLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="React" title="React">
						<Image src={Logos.ReactLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Vue.js" title="Vue.js">
						<Image src={Logos.VueLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Redux" title="Redux">
						<Image src={Logos.ReduxLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Node.js" title="Node.js">
						<Image src={Logos.NodeLogo} className="img-icon-md" />
					</Col>
					<Col className="section-grid" alt="Hibernate" title="Hibernate">
						<Image src={Logos.HibernateLogo} className="img-icon-md" />
					</Col>
				</Row>
				<Row className="center-horizontal">
					<Col className="section-grid" alt="Jest" title="Jest">
						<Image src={Logos.JestLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="pyTest" title="pyTest">
						<Image src={Logos.PytestLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Postman" title="Postman">
						<Image src={Logos.PostmanLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Apache Kafka" title="Apache Kafka">
						<Image src={Logos.KafkaLogo} className="img-icon-sm" />
					</Col>
					<Col className="section-grid" alt="RabbitMQ" title="RabbitMQ">
						<Image src={Logos.RabbitLogo} className="img-icon-md" />
					</Col>
					<Col className="section-grid" alt="oAuth" title="oAuth">
						<Image src={Logos.OauthLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Netflix Eureka" title="Netflix Eureka">
						<Image src={Logos.NetflixLogo} className="img-icon-pad" />
					</Col>
				</Row>
				<Row className="center-horizontal">
					<Col className="section-grid" alt="Docker" title="Docker">
						<Image src={Logos.DockerLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="GitHub" title="GitHub">
						<Image src={Logos.GitHubLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="GitLab" title="GitLab">
						<Image src={Logos.GitLabLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Maven" title="Maven">
						<Image src={Logos.MavenLogo} className="img-icon" />
					</Col>
					<Col className="section-grid" alt="Jenkins" title="Jenkins">
						<Image src={Logos.JenkinsLogo} className="img-icon-sm" />
					</Col>
					<Col className="section-grid" alt="Prometheus" title="Prometheus">
						<Image src={Logos.PrometheusLogo} className="img-icon-md" />
					</Col>
					<Col className="section-grid" alt="Grafana" title="Grafana">
						<Image src={Logos.GrafanaLogo} className="img-icon-md" />
					</Col>
				</Row>
			</Container>
			<div className="empty-space" />
		</div>
	);
}
