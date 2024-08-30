import Skeleton from '../Skeleton';
import './styles.css';

function ComicCardSkeleton() {
	return (
		<div className="comic-skeleton">
			<div>
				<Skeleton className="comic-title-skeleton" />
				<Skeleton className="comic-title-skeleton" />
			</div>
			<Skeleton className="comic-cover-skeleton" />
		</div>
	);
}

export default ComicCardSkeleton;
