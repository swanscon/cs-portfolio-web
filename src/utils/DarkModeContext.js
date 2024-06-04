import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedMode = localStorage.getItem("darkMode") === "true";
		setIsDarkMode(savedMode);
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
