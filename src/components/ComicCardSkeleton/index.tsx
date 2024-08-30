import Skeleton from '../Skeleton';
import './styles.css';

function ComicCardSkeleton() {
	return (
		<div className="comic-skeleton">
			<div>
				<Skeleton className="comic-title-skeleton" />
				<Skeleton className="comic-title-skeleton" animationDelay={200} />
			</div>
			<Skeleton className="comic-cover-skeleton" animationDelay={400} />
		</div>
	);
}

export default ComicCardSkeleton;
