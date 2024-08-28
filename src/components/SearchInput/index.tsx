import './styles.css';
import searchIcon from '../../assets/search-icon.svg';

function SearchInput() {
	return (
		<div className="input-container">
			<input
				type="text"
				placeholder="Search"
				className="search-input"
				onChange={(e) => console.log(e.target.value)}
			/>
			<img src={searchIcon} />
		</div>
	);
}

export default SearchInput;
