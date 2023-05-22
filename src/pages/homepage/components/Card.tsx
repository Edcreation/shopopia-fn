
export function ProductCard(props: { image: string, name: string, price: string, rating: string }) {
	const { image, name, price, rating } = props
    return (
			<div className="container__cards__card">
				<a href="#" className="card__image">
					<img
						src={image}
						alt="image"
					/>
				</a>
				<div className="card__name">{name}</div>
				<div className="card__price">{price}</div>
				<Rating rating={rating} />
			</div>
		);
}

export function Rating(props: { rating: string }) {
	const rating = Number(props.rating);
	const fullStars = Math.floor(rating);
	const remainingStars = 5 - fullStars;

	const stars = [];

	for (let i = 0; i < fullStars; i++) {
		stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
	}

	for (let i = 0; i < remainingStars; i++) {
		stars.push(<i key={i + fullStars} className="fa fa-star-o" aria-hidden="true"></i>);
	}
	return (
	<div className="card__rating">
		{stars}
	</div>
	)
}
