import SpiderThink from '../../assets/spider-think.png';
import './styles.css';

function NoCharactersResults() {
	return (
		<div className="no-results-wrapper">
			<div className="no-characters-results">
				<img
					src={SpiderThink}
					alt="No results found image - Spider-Man Thinking"
				/>
				<h2>Nenhum personagem encontrado</h2>
				<p>
					Não encontramos nenhum personagem com o termo que você pesquisou.
					Tente novamente com outro nome ou verifique a ortografia.
				</p>
			</div>
		</div>
	);
}

export default NoCharactersResults;
