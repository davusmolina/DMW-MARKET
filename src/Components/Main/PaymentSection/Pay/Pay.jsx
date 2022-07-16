import React from 'react';
// import './Pay.css';

import { Context } from '../../../Context/Context.jsx';

export function Pay() {
	const { totalPay, showModal, setShowModal } = React.useContext(Context);
	if (!showModal) {
		return null;
	} else {
		return (
			<article className='pay-modal'>
				<div className='pay-modal-container'>
					<button
						onClick={() => {
							setShowModal(false);
						}}>
						X
					</button>
					<div className='total'>
						<h2>A pagar:</h2>
						<h2>{totalPay}</h2>
					</div>
					<article className='payment-methods'>
						<ul>
							<li>
								<div>
									<span>💳</span>
								</div>
								<div>
									<p>Hasta 48 cuotas</p>
									<a href=''>Saber mas</a>
								</div>
							</li>
							<li>
								<div>
									<span>🏦</span>
								</div>
								<div>
									<p>Desde tu banco</p>
									<a href=''>Saber mas</a>
								</div>
							</li>
							<li>
								<div>
									<span>💵</span>
								</div>
								<div>
									<p>Pago en efectivo</p>
									<a href=''>Saber mas</a>
								</div>
							</li>
							<li>
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
				</div>
			</article>
		);
	}
}
