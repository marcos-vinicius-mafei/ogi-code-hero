import './styles.css';
import CharactersList from '../CharactersList';
import { useCharacters } from '../../providers';

function CharactersSection() {
	const {
		charactersList: { data, isLoading },
	} = useCharacters();

	return (
		<section className="characters-section">
			{!data.length && !isLoading ? (
				// TODO: create No Results Card
				<h2>No Results</h2>
			) : (
				<>
					<div className="labels-container">
						<p>Personagem</p>
						<p className="mobile-hidden">Séries</p>
						<p className="mobile-hidden">Eventos</p>
					</div>
					<CharactersList />
				</>
			)}
		</section>
	);
}

export default CharactersSection;
