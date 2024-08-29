import './styles.css';

function PageSelector() {
	return (
		<div className="page-selector">
			<button className="page-selector-button active" disabled>
				1
			</button>
			<button className="page-selector-button">2</button>
			<button className="page-selector-button">3</button>
		</div>
	);
}

export default PageSelector;
