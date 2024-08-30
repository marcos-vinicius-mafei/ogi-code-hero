import './styles.css';

interface SkeletonProps {
	className?: string;
}

function Skeleton({ className }: SkeletonProps) {
	return <div className={`skeleton ${className}`} />;
}

export default Skeleton;
