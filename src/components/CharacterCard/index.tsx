import './styles.css';

function CharacterCard() {
	return (
		<button onClick={() => console.log('open details modal')}>
			<div className="character-card">
				<div className="card-column main">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3WVTxt2M_BfPhnxODXRv5nLRZ_ZEc0JP4A&s"
						// TODO use actual character name from props
						alt="name of the character image"
					/>
					<p>Iron Man</p>
				</div>
				<div className="card-column">
					<p>Iron Man: Armor Wars Fantastic </p>
					<p>Old Man Hawkeye</p>
					<p>Four Visionaries: Walter Simonson Vol. 1</p>
				</div>
				<div className="card-column">
					<p>AvX</p>
					<p>Demon in the Bottle</p>
					<p>Dynasty M</p>
				</div>
			</div>
		</button>
	);
}

export default CharacterCard;
