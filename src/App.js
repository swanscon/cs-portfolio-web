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

	return (
		<div className={isDarkMode ? 'dark-mode' : ''}>
			<MainNav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/resume" element={<ResumePage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
