import React from 'react';
import './Car.css';
import { Context } from '../../../Context/Context.jsx';

const Car = () => {
	const { productsInCar, deletProductFromCar } = React.useContext(Context);
	const [products] = React.useState(productsInCar);

	if (productsInCar === -1) {
		return <div className='car-container'>No hay productos en el carrito</div>;
	} else if (productsInCar.length === 0) {
		return <div className='car-container'>No hay productos en el carrito</div>;
	} else {
		return (
			<article>
				{Array.isArray(products) &&
					productsInCar.map((product) => {
						return (
							<div key={product.id} className='car-container'>
								<div>
									<img src={product.image} alt={product.title} />
									<p>{product.title}</p>
								</div>
								<div>
									<p>${product.price}</p>
									<button
										onClick={() => {
											deletProductFromCar(product);
										}}>
										X
									</button>
								</div>
							</div>
						);
					})}
			</article>
		);
	}
};

export { Car };
