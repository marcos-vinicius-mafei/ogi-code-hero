import React, { useState, useEffect } from 'react';
import './styles.css';
import { Chevron, DoubleChevron } from '../Chevrons';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	updateCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	updateCurrentPage,
}) => {
	const [pagesToShow, setPagesToShow] = useState(
		window.innerWidth < 768 ? 3 : 5,
	);

	useEffect(() => {
		const handleResize = () => {
			setPagesToShow(window.innerWidth < 768 ? 3 : 5);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const startPage =
		Math.floor((currentPage - 1) / pagesToShow) * pagesToShow + 1;
	const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

	const pages = Array.from(
		{ length: endPage - startPage + 1 },
		(_, i) => startPage + i,
	);

	return (
		<>
			<div className="backward-chevrons">
				{currentPage >= startPage + 2 && (
					<button
						className="chevron-button backward-chevron"
						onClick={() => updateCurrentPage(startPage)}
					>
						<DoubleChevron />
					</button>
				)}
				{currentPage > 1 && (
					<button
						className="chevron-button backward-chevron"
						onClick={() => updateCurrentPage((current) => current - 1)}
					>
						<Chevron />
					</button>
				)}
			</div>
			<div className="page-selector">
				{pages.map((page) => (
					<button
						onClick={() => updateCurrentPage(page)}
						key={page}
						className={`page-selector-button ${page === currentPage ? 'active' : ''}`}
					>
						{page}
					</button>
				))}
			</div>
			<div className="foward-chevrons">
				{currentPage < totalPages && (
					<button
						className="chevron-button foward-chevron"
						onClick={() => updateCurrentPage((current) => current + 1)}
					>
						<Chevron />
					</button>
				)}
				{currentPage <= endPage - 2 && (
					<button
						className="chevron-button foward-chevron"
						onClick={() => updateCurrentPage(endPage)}
					>
						<DoubleChevron />
					</button>
				)}
			</div>
		</>
	);
};

export default Pagination;
