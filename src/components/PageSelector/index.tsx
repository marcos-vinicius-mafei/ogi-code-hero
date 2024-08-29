import './styles.css';
import { Chevron, DoubleChevron } from '../Chevrons';
import Pagination from '../Pagination';
import { useCharacters } from '../../providers';

function PageSelector() {
	const {
		charactersList: { pagination },
	} = useCharacters();

	return (
		<div className="page-selector-container">
			<div className="backward-chevrons">
				<button className="chevron-button backward-chevron">
					<DoubleChevron />
				</button>
				<button className="chevron-button backward-chevron">
					<Chevron />
				</button>
			</div>
			<Pagination {...pagination} />
			<div className="foward-chevrons">
				<button className="chevron-button foward-chevron">
					<Chevron />
				</button>
				<button className="chevron-button foward-chevron">
					<DoubleChevron />
				</button>
			</div>
		</div>
	);
}

export default PageSelector;
