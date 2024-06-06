import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		const savedMode = localStorage.getItem("darkMode");
		if (savedMode === null) {
			// No saved mode, default to dark mode
			setIsDarkMode(true);
			localStorage.setItem("darkMode", true); // Optionally save the default to localStorage
		} else {
			setIsDarkMode(savedMode === "true");
		}
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem("darkMode", newMode);
			return newMode;
		});
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};
