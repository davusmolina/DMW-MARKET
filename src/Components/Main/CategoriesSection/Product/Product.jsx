import React from 'react';
// import './Product.css';
import { Link } from 'react-router-dom';

function ProductComponent({ discount, category }) {
	const [products, setProducts] = React.useState([]);
	const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState(true);

	let API = `https://fakestoreapi.com/products/category/${category}`;

	React.useEffect(() => {
		async function cargarProductInfo() {
			try {
				const res = await fetch(API);
				const data = await res.json();
				if (res.ok) {
					setProducts(data);
					setLoading(false);
					setError(false);
				} else {
					setError(error);
				}
			} catch (error) {
				setError(error);
			}
		}
		cargarProductInfo();
	}, [category]);

	if (loading) {
		return <div>Cargando...</div>;
	}
	if (error) {
		return <div>Error</div>;
	} else {
		return (
			<article className={`products-category-container}`}>
				{products.map((productInfo) => {
					return (
						<Link to={`/products/${productInfo.id}`}>
							<div key={productInfo.id} className='product-card-category'>
								<img src={productInfo.image} alt={productInfo.title} />
								<div>
									<h3>{productInfo.title} </h3>
									<div>
										<p className='product-info--rating'>
											{productInfo.rating.rate}
										</p>
										<span>${productInfo.price}</span>
									</div>
									{discount && <p className='green'>{discount}</p>}
									<p className='green'>Envio gratis</p>
								</div>
							</div>
						</Link>
					);
				})}
			</article>
		);
	}
}

export { ProductComponent };
