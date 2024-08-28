import CharacterCard from '../CharacterCard';
import './styles.css';

function CharactersList() {
	return (
		<div className="characters-list">
			<CharacterCard />
			<CharacterCard />
		</div>
	);
}

export default CharactersList;
