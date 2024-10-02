import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ResumePage from "./pages/Resume";
import ContactPage from "./pages/Contact";
import MainNav from "./components/Nav";
import Footer from "./components/Foot";
import "./styles/images.css";
import "./styles/main.css";
import { useDarkMode } from "./utils/DarkModeContext";

function App() {
	const { isDarkMode } = useDarkMode();

	const updateBackgroundColor = () => {
		if (isDarkMode) {
			document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/pf-bg-dark.png)`;
		} else {
			document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/pf-bg-light.png)`;
		}
	};

	return (
		<div id="root">
			<MainNav updateBackgroundColor={updateBackgroundColor} />
			<div className="main-content-container">
				<Routes>
					<Route path="/cs-portfolio-web/" element={<HomePage />} />
					<Route path="/cs-portfolio-web/about" element={<AboutPage />} />
					<Route path="/cs-portfolio-web/resume" element={<ResumePage />} />
					<Route path="/cs-portfolio-web/contact" element={<ContactPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
