import React from 'react';
import './PaymentSection.css';

import { Context } from '../../Context/Context.jsx';
import { Pay } from './Pay/Pay.jsx';
import { Car } from './Car/Car.jsx';

const PaymentSection = () => {
	const { totalPay, setShowModal } = React.useContext(Context);
	return (
		<article className='payment-section'>
			<div>
				<h1>Productos en tu carrito: </h1>
				<p className='payment-section--total-pay'>
					Total a pagar: ${totalPay}{' '}
				</p>
				<button
					onClick={() => {
						setShowModal(true);
					}}>
					Pagar
				</button>
				<Pay />
			</div>
			<Car></Car>
		</article>
	);
};

export { PaymentSection };
