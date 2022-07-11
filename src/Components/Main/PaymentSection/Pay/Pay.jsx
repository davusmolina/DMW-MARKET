import React from 'react';
import './Pay.css';

import { Context } from '../../../Context/Context.jsx';
import { PaymentMethods } from '../../HomeSection/PaymentChannels/PaymentMethods.jsx';

export function Pay() {
	const { totalPay, showModal, setShowModal } = React.useContext(Context);
	if (!showModal) {
		return null;
	} else {
		return (
			<article className='pay-modal'>
				<div className='pay-modal--first-element'>
					<h2>
						A pagar: <br /> ${totalPay}
					</h2>
					<button
						onClick={() => {
							setShowModal(false);
						}}>
						X
					</button>
					<article className=''>
						<ul className='payment-method'>
							<li className=''>
								<div>
									<span>💳</span>
								</div>
								<div>
									<p>Hasta 48 cuotas</p>
									<a href=''>Saber mas</a>
								</div>
							</li>
							<li className=''>
								<div>
									<span>🏦</span>
								</div>
								<div>
									<p>Desde tu banco</p>
									<a href=''>Saber mas</a>
								</div>
							</li>
							<li className=''>
								<div>
									<span>💵</span>
								</div>
								<div>
									<p>Pago en efectivo</p>
									<a href=''>Saber mas</a>
								</div>
							</li>
							<li className=''>
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
