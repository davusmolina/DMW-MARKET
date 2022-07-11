//Un componente que genera una lista de metodos de pago
import React from 'react';
import './PaymentMethods.css';

function PaymentMethods() {
	return (
		<article className='paymentMethods'>
			<ul className='paymentMethods--container'>
				<li className='paymentMethod'>
					<div>
						<span>💳</span>
					</div>
					<div>
						<p>Hasta 48 cuotas</p>
						<a href=''>Saber mas</a>
					</div>
				</li>
				<li className='paymentMethod'>
					<div>
						<span>🏦</span>
					</div>
					<div>
						<p>Desde tu banco</p>
						<a href=''>Saber mas</a>
					</div>
				</li>
				<li className='paymentMethod'>
					<div>
						<span>💵</span>
					</div>
					<div>
						<p>Pago en efectivo</p>
						<a href=''>Saber mas</a>
					</div>
				</li>
				<li className='paymentMethod'>
					<div>
						<span>➕</span>
					</div>

					<div>
						<p>Mas metodos de pago</p>
						<a href=''>Saber mas</a>
					</div>
				</li>
			</ul>
		</article>
	);
}

export { PaymentMethods };
