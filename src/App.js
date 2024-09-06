import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SEO from './components/SEO';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Preloader from './components/Preloader';

function App() {
	return (
		<>
			{/* <Preloader /> */}

			<Navbar />
			<Hero />

			<MainSection />
			<SEO />
			<Footer />
		</>
	);
}

export default App;
