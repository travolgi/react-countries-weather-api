import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './theme';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import CardCountries from './pages/CardCountries';
import Country from './pages/Country';
import ErrorMessage from './components/ErrorMessage';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
	const [theme, setTheme] = useLocalStorage('theme', 'light'),
			isDarkTheme = theme === 'dark',
			toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');
		
	const API_URL = 'https://restcountries.com/v2/';

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header theme={theme} toggleTheme={toggleTheme} />
			<main>
				<Routes>
					<Route path="/" element={<CardCountries API_URL={API_URL} />} />
					<Route path="/:code" element={<Country API_URL={API_URL} />} />
					<Route path="/*" element={<ErrorMessage />} />
				</Routes>
			</main>
			<ScrollToTop />
		</ThemeProvider>
	);
}