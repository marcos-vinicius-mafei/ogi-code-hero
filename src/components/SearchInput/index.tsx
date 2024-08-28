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
			<img src={searchIcon} alt="Magnifying glass icon" />
		</div>
	);
}

export default SearchInput;
