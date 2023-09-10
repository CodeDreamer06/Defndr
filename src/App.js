import './app.sass';
import Explainer from './components/Explainer';
import FinalPromo from './components/FinalPromo';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Motive from './components/Motive';
import Navbar from './components/Navbar';

function App() {
	return <main>
		<Navbar />
		<Hero />
		<Motive />
		<Explainer />
		<FinalPromo />
		<Footer />
	</main>
}

export default App;