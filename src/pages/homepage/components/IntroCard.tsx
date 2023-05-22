import { useState, useEffect } from "react";

function IntroCard() {
  return (
    <div className="intro__container">
        <Slider />
    </div>
  )
}

const Slider = () => {

    const product = [
        {
            id: "123425656ew3ewfd5fd",
            url: "https://cdn.wccftech.com/wp-content/uploads/2021/03/iPhone-13-Pro-matte-black-2.jpg",
            name: "Iphone 13 pro Max",
        },
        {
            id: "123425656ew3ewfd5fd",
            url: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Galaxy_A02s_all_colors.JPG",
            name: "Samsung Galaxy A20",
        },
        {
            id: "123425656ew3ewfd5fd",
            url: "https://i.ytimg.com/vi/Yy6p-aE-eBA/maxresdefault.jpg",
            name: "HP Spectre x360",
        },
    ]
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000);

      return () => clearInterval(timer);
    }, [product.length]);
  
    return (
      <div className="slider">
        {product.map((product, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${product.url})` }}
          >
            <div className="text">
                <h2>{product.name}</h2>
                <a href={`/${product.id}`}>🔥Get it Now</a>
            </div>
          </div>
        ))}
      </div>
    );
};
  

export default IntroCard