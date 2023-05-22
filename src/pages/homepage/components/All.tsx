import { ProductCard } from "./Card";

const products = [
  {
    name: "Iphone 13 pro",
    image: "https://m.media-amazon.com/images/I/61AwGDDZd3L.jpg",
    price: "$500",
    rating: "3"
  },
  {
    name: "Samsung Galaxy S21",
    image: "https://www.costco.com.au/medias/sys_master/images/h4d/hd4/51650597322782.jpg",
    price: "$700",
    rating: "4"
  },
  {
    name: "Google Pixel 6",
    image: "https://m.media-amazon.com/images/I/71ee+5V4ZRL._SL1500_.jpg",
    price: "$600",
    rating: "5"
  },
  {
    name: "Sony PlayStation 5",
    image: "https://media.direct.playstation.com/is/image/sierialto/GOWR-Bundle-Hero-US",
    price: "$499",
    rating: "4"
  },
  {
    name: "MacBook Pro",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp16touch-silver-gallery-2019?wid=1250&hei=1200&fmt=jpeg&qlt=95&.v=1582233083340",
    price: "$1299",
    rating: "3"
  },
  {
    name: "Nike Air Max",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e51458c6-c11d-49e0-9633-4df465370930/custom-nike-air-max-90-by-you.png",
    price: "$150",
    rating: "4"
  },
  {
    name: "Fitbit Charge 4",
    image: "https://m.media-amazon.com/images/S/aplus-media/vc/c7e11dd7-412f-498d-9ac9-aec74b4eebb2.__CR0,0,600,450_PT0_SX600_V1___.jpg",
    price: "$99",
    rating: "4"
  },
  {
    name: "Amazon Echo Dot",
    image: "https://mobileimages.lowes.com/productimages/045c59c0-f0da-42ea-8d5b-4fbe3734579c/11398707.jpg",
    price: "$49",
    rating: "3"
  },
  {
    name: "Dyson V11 Vacuum",
    image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/421295-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640",
    price: "$599",
    rating: "5"
  },
  {
    name: "GoPro Hero 9",
    image: "https://m.media-amazon.com/images/I/715j8kZGD0L.jpg",
    price: "$349",
    rating: "4"
  },
];

function AllProducts() {
  return (
    <div className="products__container">
      <div className="container__title"><p>Products</p><div className="bar"></div> </div>
      <div className="container__products">
				{ products.map(product => <ProductCard
					name={product.name}
					image={product.image}
					price={product.price}
					rating={product.rating}
				/> )}
      </div>
    </div>
  )
}

export default AllProducts