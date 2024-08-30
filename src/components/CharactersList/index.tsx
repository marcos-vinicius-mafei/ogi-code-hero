import { useCharacters } from '../../providers';
import CharacterCard from '../CharacterCard';
import './styles.css';

function CharactersList() {
	const {
		charactersList: { data, isLoading },
		detailsModal: { openModal },
	} = useCharacters();

	return (
		<div className="characters-list">
			{isLoading ? (
				// TODO: create skeleton
				<h2>Loading</h2>
			) : (
				data.map((character) => (
					<CharacterCard
						character={character}
						key={character.id}
						onClick={() => openModal(character)}
					/>
				))
			)}
		</div>
	);
}

export default CharactersList;
