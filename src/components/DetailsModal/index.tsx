import { useCharacters } from '../../providers';
import ComicCard from '../ComicCard';
import { CloseIcon } from '../Icons';
import './styles.css';

function DetailsModal() {
	const {
		detailsModal: { characterDetails, closeModal, isModalVisible },
	} = useCharacters();

	return (
		<div
			className={`modal-wrapper ${isModalVisible ? 'wrapper-visible' : 'wrapper-hidden'}`}
		>
			<div
				className={`modal-container ${isModalVisible ? 'modal-visible' : 'modal-hidden'}`}
			>
				<div className="close-container">
					<button onClick={closeModal}>
						<CloseIcon />
					</button>
				</div>
				<div className="modal-content">
					<div className="modal-info main">
						<img
							src="https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
							alt="character name"
						/>
						<h2>3D Man</h2>
					</div>
					<div className="modal-info">
						<h3>Descrição</h3>
						<p>
							The Green Goblin is on a Spider-DNA-stealing rampage through
							multiple dimensions…this time running afoul of the Medieval Age’s
							Spyder-Knight!
						</p>
					</div>
					<div className="modal-info">
						<h3>Participações</h3>
						<div className="comics-list">
							<ComicCard />
							<ComicCard />
							<ComicCard />
							<ComicCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailsModal;
