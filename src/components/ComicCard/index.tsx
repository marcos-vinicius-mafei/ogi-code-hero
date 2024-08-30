import { MarvelComic } from '../../../@types/general';
import './styles.css';

interface ComicCardProps {
	comic: MarvelComic;
}

function ComicCard({ comic: { title, thumbnail } }: ComicCardProps) {
	return (
		<div className="comic-card">
			<h4>{title}</h4>
			<img
				src={`${thumbnail.path}.${thumbnail.extension}`}
				alt={`${title} comic cover`}
			/>
		</div>
	);
}

export default ComicCard;
