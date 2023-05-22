

function BrowseBox(props: { setIsHovered: React.Dispatch<React.SetStateAction<boolean>>; }) {
    const { setIsHovered } = props
	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			id="browse"
			className="browse"
		>
			<div className="box">
				<div className="box__title">Phones</div>
				<div className="box__tags">
					<a href="#" className="box__tag">
						Iphone
					</a>
					<a href="#" className="box__tag">
						Samsung
					</a>
					<a href="#" className="box__tag">
						Google Pixel
					</a>
					<a href="#" className="box__tag">
						Techno
					</a>
				</div>
			</div>
			<div className="box">
				<div className="box__title">Phones</div>
				<div className="box__tags">
					<a href="#" className="box__tag">
						Iphone
					</a>
					<a href="#" className="box__tag">
						Samsung
					</a>
					<a href="#" className="box__tag">
						Google Pixel
					</a>
					<a href="#" className="box__tag">
						Techno
					</a>
				</div>
			</div>
			<div className="box">
				<div className="box__title">Phones</div>
				<div className="box__tags">
					<a href="#" className="box__tag">
						Iphone
					</a>
					<a href="#" className="box__tag">
						Samsung
					</a>
					<a href="#" className="box__tag">
						Google Pixel
					</a>
					<a href="#" className="box__tag">
						Techno
					</a>
				</div>
			</div>
		</div>
	);
}

export default BrowseBox;
