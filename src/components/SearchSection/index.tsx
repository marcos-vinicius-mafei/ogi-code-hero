import './styles.css';
import SearchInput from '../SearchInput';

function SearchSection() {
	return (
		<section className="search-section">
			<h1>Busca de personagens</h1>
			<div className="column-container">
				<h3>Nome do personagem</h3>
				<SearchInput />
			</div>
		</section>
	);
}

export default SearchSection;
