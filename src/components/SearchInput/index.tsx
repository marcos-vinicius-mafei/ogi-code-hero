import './styles.css';
import SearchIcon from '../../assets/search-icon.svg';

function SearchInput() {
	return (
		<div className="input-container">
			<input
				type="text"
				placeholder="Search"
				className="search-input"
				onChange={(e) => console.log(e.target.value)}
			/>
			<img src={SearchIcon} alt="Magnifying glass icon" />
		</div>
	);
}

export default SearchInput;
