import './styles.css';
import Chevron from '../../assets/chevron.svg';
import DoubleChevron from '../../assets/double-chevron.svg';

function PageSelector() {
	return (
		<div className="page-selector-container">
			<div className="backward-chevrons">
				<button className="chevron-button backward-chevron">
					<img src={DoubleChevron} />
				</button>
				<button className="chevron-button backward-chevron">
					<img src={Chevron} />
				</button>
			</div>
			<div className="page-selector">
				<button className="page-selector-button active" disabled>
					1
				</button>
				<button className="page-selector-button">2</button>
				<button className="page-selector-button">3</button>
			</div>
			<div className="foward-chevrons">
				<button className="chevron-button foward-chevron">
					<img src={Chevron} />
				</button>
				<button className="chevron-button foward-chevron">
					<img src={DoubleChevron} />
				</button>
			</div>
		</div>
	);
}

export default PageSelector;
