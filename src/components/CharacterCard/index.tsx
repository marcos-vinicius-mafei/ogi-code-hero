import { MarvelCharacter } from '../../../@types/general';
import './styles.css';

interface CharacterCardProps {
	character: MarvelCharacter;
	onClick: () => void;
}

function CharacterCard({
	character: { name, series, events, thumbnail },
	onClick,
}: CharacterCardProps) {
	return (
		<button onClick={onClick}>
			<div className="character-card">
				<div className="card-column main">
					<img
						src={`${thumbnail.path}.${thumbnail.extension}`}
						// TODO use actual character name from props
						alt="name of the character image"
					/>
					<p>{name}</p>
				</div>
				<div className="card-column">
					{series.items && series.items.length ? (
						series.items.map((item, index) => (
							<p key={`${item.name}-${index}`}>{item.name}</p>
						))
					) : (
						<p>No Series</p>
					)}
				</div>
				<div className="card-column">
					{events.items && events.items.length ? (
						events.items.map((item, index) => (
							<p key={`${item.name}-${index}`}>{item.name}</p>
						))
					) : (
						<p>No Events</p>
					)}
				</div>
			</div>
		</button>
	);
}

export default CharacterCard;
