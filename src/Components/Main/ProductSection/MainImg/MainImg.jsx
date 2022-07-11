import React from 'react';
import './MainImg.css';

function MainImg({ product, error, loading }) {
	if (loading) {
		return <div>Cargando...</div>;
	} else if (error) {
		return <div>Error</div>;
	} else {
		return (
			<article>
				<div className='imgsProductContainer'>
					<figure>
						<img src={product[0]} alt={product[1]} />
					</figure>
					<figcaption>{product[2]}</figcaption>
				</div>
			</article>
		);
	}
}

export { MainImg };
