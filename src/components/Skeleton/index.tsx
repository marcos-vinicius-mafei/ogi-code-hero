import './styles.css';

interface SkeletonProps {
	className?: string;
	animationDelay?: number;
}

function Skeleton({ className, animationDelay }: SkeletonProps) {
	return (
		<div
			className={`skeleton ${className}`}
			style={{
				animationDelay:
					animationDelay !== undefined ? `${animationDelay}ms` : undefined,
			}}
		/>
	);
}

export default Skeleton;
