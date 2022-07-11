//crea un componente react que hace una peticion a una api por productos y genera una tarjeta con cada producto
import React from 'react';
import './productsOffer.css';
import { Link } from 'react-router-dom';

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ProductsOffer() {
	const [products, setProducts] = React.useState([]);
	const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		async function cargarImagenesDescuento() {
			try {
				setLoading(true);
				const res = await fetch('https://fakestoreapi.com/products');
				const data = await res.json();

				const productsInfo = [];
				data.map((productInfo) => {
					const imageUrl = productInfo['image'];
					const title = productInfo['title'];
					const price = productInfo['price'];
					const discount = getRandomInt(10, 70);
					const productId = productInfo['id'];

					if (imageUrl !== '') {
						productsInfo.push([
							imageUrl,
							title,
							'$ ' + price,
							discount + '% off',
							productId,
						]);
					}
				});

				setProducts(productsInfo);
			} catch (error) {
				setError(error);
			}
		}
		cargarImagenesDescuento();
	}, []);

	return (
		<article className='products-offer'>
			<h2>Productos con descuento</h2>
			<div className='products-offer-container'>
				{products.map((productInfo) => {
					const imageUrl = productInfo[0];
					const title = productInfo[1];
					const price = productInfo[2];
					const discount = productInfo[3];
					const productId = productInfo[4];

					return (
						<div className='product-card' key={title}>
							<Link to={`/products/${productId}`}>
								<img src={imageUrl} alt={title} />
								<div className='product-card-info'>
									<div>
										<span>{price}</span>
										<p>{discount}</p>
									</div>
									<p>Envio gratis</p>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</article>
	);
}

export { ProductsOffer };
