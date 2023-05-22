/* eslint-disable no-mixed-spaces-and-tabs */
import { useRef } from "react";
import { ProductCard } from "./Card";

type PRODUCT = {
	name: string;
	image: string;
	rating: string;
	price: string;
};

function Holder(props: {
	title: string;
	more_link: string;
	products: PRODUCT[];
}) {
	const { title, more_link, products } = props;
	const containerRef = useRef<HTMLDivElement>(null);

	const handleScrollToStart = () => {
	  if (containerRef.current) {
		containerRef.current.scrollTo({ left: containerRef.current.scrollLeft - 200, behavior: 'smooth' });
	  }
	};
  
	const handleScrollToEnd = () => {
	  if (containerRef.current) {
		containerRef.current.scrollTo({ left: containerRef.current.scrollLeft + 200, behavior: 'smooth' });
	  }
	};

	return (
		<div className="holder__container">
			<div className="container__title">
				<p>
					<div className="bar"></div> {title}
				</p>
				<div className="elems">
					<a href={more_link}>More</a>
				</div>
			</div>
			<div className="container__elements" ref={containerRef}>
					<div className="btns">
						<div className="left" onClick={handleScrollToStart} >
							<i className="fa fa-arrow-left" aria-hidden="true"></i>
						</div>
						<div className="right" onClick={handleScrollToEnd}>
							<i className="fa fa-arrow-right" aria-hidden="true"></i>
						</div>
					</div>
				<div className="container__cards" >
					{products.map((product) => (
						<ProductCard
							name={product.name}
							image={product.image}
							price={product.price}
							rating={product.rating}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Holder;
