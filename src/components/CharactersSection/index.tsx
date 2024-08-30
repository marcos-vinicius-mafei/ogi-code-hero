import './styles.css';
import CharactersList from '../CharactersList';
import { useCharacters } from '../../providers';
import NoCharactersResults from '../NoCharactersResults';

function CharactersSection() {
	const {
		charactersList: { data, isLoading },
	} = useCharacters();

	return (
		<section className="characters-section">
			{!data.length && !isLoading ? (
				<NoCharactersResults />
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
