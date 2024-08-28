import './styles.css';
import CharactersList from '../CharactersList';

function CharactersSection() {
	return (
		<section className="characters-section">
			<div className="labels-container">
				<p>Personagem</p>
				<p className="mobile-hidden">Séries</p>
				<p className="mobile-hidden">Eventos</p>
			</div>
			<CharactersList />
		</section>
	);
}

export default CharactersSection;
