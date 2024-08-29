import { CharactersSection, Footer, Header, SearchSection } from './components';

function App() {
	return (
		<>
			<Header />
			<main>
				<div className="inner-container">
					<SearchSection />
					<CharactersSection />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
