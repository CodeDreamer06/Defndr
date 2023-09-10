const Card = ({ id, details }) => {
	return <div className="card">
		<p className="card__number">{String(id).padStart(2, '0')}</p>
		<h3 className="card__title">{details.title}</h3>
		<p className="card__description">{details.description}</p>
	</div>
}

export default Card;