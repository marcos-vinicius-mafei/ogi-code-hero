import { useCharacters } from '../../providers';
import CharacterCard from '../CharacterCard';
import './styles.css';

function CharactersList() {
	const {
		charactersList: { data, isLoading },
	} = useCharacters();

	return (
		<div className="characters-list">
			{isLoading ? (
				// TODO: create skeleton
				<h2>Loading</h2>
			) : !data && !isLoading ? (
				// TODO: create No Results Card
				<h2>No Results</h2>
			) : (
				data.map((character) => (
					<CharacterCard character={character} key={character.id} />
				))
			)}
		</div>
	);
}

export default CharactersList;
