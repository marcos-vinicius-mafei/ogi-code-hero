import Logo from '../../assets/logo-objective.svg';
import './styles.css';

function Header() {
	return (
		<header>
			<img src={Logo} />
			<div className="candidate-container">
				<div className="info-container">
					<p className="candidate-name">Marcos Vinícius Mafei Machado</p>
					<p>Teste de Front-end</p>
				</div>
				<div className="candidate-abbr">
					<p>MV</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
