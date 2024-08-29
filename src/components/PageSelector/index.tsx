import './styles.css';
import { Chevron, DoubleChevron } from '../Chevrons';

function PageSelector() {
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
			<div className="page-selector">
				<button className="page-selector-button active" disabled>
					1
				</button>
				<button className="page-selector-button">2</button>
				<button className="page-selector-button">3</button>
				<button className="page-selector-button">4</button>
				<button className="page-selector-button">5</button>
			</div>
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
