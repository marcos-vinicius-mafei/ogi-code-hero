import './styles.css';
import Pagination from '../Pagination';
import { useCharacters } from '../../providers';

function PageSelector() {
	const {
		charactersList: { pagination },
	} = useCharacters();

	return (
		<div className="page-selector-container">
			<Pagination {...pagination} />
		</div>
	);
}

export default PageSelector;
