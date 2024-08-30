import { useEffect, useRef, useState } from 'react';
import { useCharacters } from '../../providers';
import ComicCard from '../ComicCard';
import { CloseIcon } from '../Icons';
import './styles.css';
import { buildMarvelAPIUrl } from '../../helpers';
import { MarvelApiResponse, MarvelComic } from '../../../@types/general';
import { useBlockScroll, useOutsideClick } from '../../hooks';
import ComicCardSkeleton from '../ComicCardSkeleton';

function DetailsModal() {
	const {
		detailsModal: { characterDetails, closeModal, isModalVisible },
	} = useCharacters();

	const modalRef = useRef(null);

	const [isLoading, setIsLoading] = useState(true);
	const [comics, setComics] = useState<MarvelComic[]>([]);

	const [modalWrapperClass, setModalWrapperClass] = useState('hidden');
	const [modalContainerClass, setModalContainerClass] = useState('hidden');

	useOutsideClick(modalRef, () => onClose());

	useBlockScroll(isModalVisible);

	useEffect(() => {
		if (isModalVisible) {
			setModalWrapperClass('wrapper-visible');
			setModalContainerClass('modal-visible');
		}
	}, [isModalVisible]);

	useEffect(() => {
		if (characterDetails?.id === undefined) return;
		setComics([]);
		setIsLoading(true);
		fetch(buildMarvelAPIUrl(`characters/${characterDetails.id}/comics`))
			.then((response) => response.json())
			.then(({ data }: MarvelApiResponse<MarvelComic>) => {
				setComics(data.results || []);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [characterDetails?.id]);

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
			<div className={`modal-container ${modalContainerClass}`} ref={modalRef}>
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
						{!isLoading && !comics.length ? (
							<h3>Esse personagem não tem participações nos quadrinhos</h3>
						) : (
							<div className="comics-list">
								{isLoading
									? Array.from({ length: 10 }).map((_, index) => (
											<ComicCardSkeleton key={index} />
										))
									: comics.map((comic) => (
											<ComicCard comic={comic} key={comic.id} />
										))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailsModal;
