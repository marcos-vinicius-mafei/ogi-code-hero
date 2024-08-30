import {
	CharactersSection,
	DetailsModal,
	Footer,
	Header,
	SearchSection,
} from './components';
import { CharactersProvider } from './providers';

function App() {
	return (
		<>
			<Header />
			<CharactersProvider>
				<DetailsModal />
				<main>
					<div className="inner-container">
						<SearchSection />
						<CharactersSection />
					</div>
				</main>
				<Footer />
			</CharactersProvider>
		</>
	);
}

export default App;
