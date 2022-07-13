import React from 'react';
import './ProductInfo.css';
import { Context } from '../../../Context/Context.jsx';
import { Link } from 'react-router-dom';

function ProductInfo({ product, loading, error }) {
	const { agregarAlCarrito, setShowModal } = React.useContext(Context);

	if (loading) {
		return <div>Cargando...</div>;
	} else if (error) {
		return <div>Error</div>;
	} else {
		return (
			<article className='product-info'>
				<p>Nuevo | Vendidos: {product.rating.count}</p>

				<div className='product-info--title'>
					<h2>{product.title}</h2>
					<p className='product-info--rating'>{product.rating.rate}</p>
				</div>
				<div className='product-info--price'>
					<h2>${product.price}</h2>
					<p className='green'>En 12X de {Math.ceil(product.price / 12)}</p>
					<a href=''>Ver los medios de pago</a>
				</div>
				<div className='product-info-envio'>
					<h3 className='green'>Envio a nivel nacional</h3>
					<p>En 24 horas</p>
					<h3 className='green'>Devolucion gratis</h3>
					<p>De hasta 30 días</p>
				</div>

				<div className='product-info--comprar'>
					<button
						onClick={() => {
							agregarAlCarrito(product);
						}}>
						Agregar al carrito
					</button>
					<Link to='/carPay'>
						<button
							onClick={() => {
								setShowModal(true);
								console.log('hola');
							}}>
							Comprar ahora
						</button>
					</Link>
				</div>
			</article>
		);
	}
}

export { ProductInfo };
