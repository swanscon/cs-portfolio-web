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
			document.body.style.backgroundImage = 'url("/pf-bg-dark.png")';
		} else {
			document.body.style.backgroundImage = 'url("/pf-bg-light.png")';
		}
	};

	return (
		<div id="root">
			<MainNav updateBackgroundColor={updateBackgroundColor} />
			<div className="main-content-container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/resume" element={<ResumePage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
