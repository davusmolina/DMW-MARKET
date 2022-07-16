import React from 'react';
// import './infoSection.css';

const InfoSection = () => {
	return (
		<section className='info-section'>
			<div className='info-section-element'>
				<span>💳</span>
				<h3>Paga con tarjeta o en efectivo</h3>
				<div>
					<p>
						Paga en cuotas y aprovecha la comodidad de financiación que te da tu
						banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!
					</p>
					<a href=''>Como pagar</a>
				</div>
			</div>
			<div className='info-section-element'>
				<span>📦</span>
				<h3>Envio gratis desde $20</h3>
				<div>
					<p>
						Con solo estar registrado en DMW Market, tienes envíos gratis en
						miles de productos seleccionados.
					</p>
					<a href=''>Conoce más sobre este beneficio</a>
				</div>
			</div>
			<div className='info-section-element'>
				<span>🛡</span>
				<h3>Seguridad, de principio a fín</h3>
				<div>
					<p>
						¿No te gusta? ¡Devuélvelo! En DMW Market, no hay nada que no puedas
						hacer, porque estás siempre protegido.
					</p>
					<a href=''>Cómo te protegemos</a>
				</div>
			</div>
		</section>
	);
};
export { InfoSection };
