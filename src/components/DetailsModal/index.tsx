import { useEffect, useState } from 'react';
import { useCharacters } from '../../providers';
import ComicCard from '../ComicCard';
import { CloseIcon } from '../Icons';
import './styles.css';

function DetailsModal() {
	const {
		detailsModal: { characterDetails, closeModal, isModalVisible },
	} = useCharacters();

	const [modalWrapperClass, setModalWrapperClass] = useState('hidden');
	const [modalContainerClass, setModalContainerClass] = useState('hidden');

	useEffect(() => {
		if (isModalVisible) {
			setModalWrapperClass('wrapper-visible');
			setModalContainerClass('modal-visible');
		}
	}, [isModalVisible]);

	function onClose() {
		closeModal();
		setModalWrapperClass('wrapper-hidden');
		setModalContainerClass('modal-hidden');
	}

	if (!characterDetails) {
		return null;
	}

	const { name, thumbnail, description } = characterDetails;

	return (
		<div className={`modal-wrapper ${modalWrapperClass}`}>
			<div className={`modal-container ${modalContainerClass}`}>
				<div className="close-container">
					<button onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<div className="modal-content">
					<div className="modal-info main">
						<img
							src={`${thumbnail.path}.${thumbnail.extension}`}
							alt={`${name}'s image`}
						/>
						<h2>{name}</h2>
					</div>
					{description && (
						<div className="modal-info">
							<h3>Descrição</h3>
							<p>{description}</p>
						</div>
					)}
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
