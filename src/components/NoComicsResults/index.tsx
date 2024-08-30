import SadSpiderMan from '../../assets/spider-sad.png';
import './styles.css';

function NoComicsResults() {
	return (
		<div className="no-comics-wrapper">
			<div className="no-comics-results">
				<img src={SadSpiderMan} alt="Sad Spider-Man" />
				<h3>Ops! Nenhuma Participação Encontrada!</h3>
				<p>
					O Homem-Aranha está triste porque ele não encontrou nenhuma história
					épica aqui. Talvez elas estejam perdidas no multiverso?
				</p>
				<p>
					Explore outros personagens para descobrir mais histórias fascinantes!
				</p>
			</div>
		</div>
	);
}

export default NoComicsResults;
