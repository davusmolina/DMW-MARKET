import React from 'react';
// import './productSection.css';
import { useParams } from 'react-router-dom';

import { MainImg } from './MainImg/MainImg.jsx';
import { ProductInfo } from './ProductInfo/ProductInfo.jsx';

function ProductSection() {
	const [product, setProduct] = React.useState({});
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const { id } = useParams();

	React.useLayoutEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(`https://fakestoreapi.com/products/${id}`);
				if (res.ok) {
					const data = await res.json();
					setProduct(data);
					setLoading(false);
				} else {
					setError(true);
				}
			} catch (error) {
				setError(true);
			}
		}
		fetchData();
	}, [id]);
	return (
		<section className='product-section'>
			<MainImg
				product={[product.image, product.title, product.description]}
				className='product-section--img'
			/>
			<ProductInfo
				product={product}
				error={error}
				loading={loading}
				className='product-section--info'
			/>
		</section>
	);
}

export { ProductSection };
