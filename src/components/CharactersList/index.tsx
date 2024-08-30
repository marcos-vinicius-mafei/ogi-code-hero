import { useCharacters } from '../../providers';
import CharacterCard from '../CharacterCard';
import Skeleton from '../Skeleton';
import './styles.css';

function CharactersList() {
	const {
		charactersList: { data, isLoading },
		detailsModal: { openModal },
	} = useCharacters();

	return (
		<div className="characters-list">
			{isLoading
				? Array.from({ length: 10 }).map((_, index) => <Skeleton key={index} />)
				: data.map((character) => (
						<CharacterCard
							character={character}
							key={character.id}
							onClick={() => openModal(character)}
						/>
					))}
		</div>
	);
}

export default CharactersList;
