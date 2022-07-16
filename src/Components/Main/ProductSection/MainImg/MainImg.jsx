import React from 'react';
// import './MainImg.css';

function MainImg({ product, error, loading }) {
	if (loading) {
		return <div>Cargando...</div>;
	} else if (error) {
		return <div>Error</div>;
	} else {
		return (
			<div className='imgsProductContainer'>
				<img src={product[0]} alt={product[1]} />
				<p>{product[2]}</p>
			</div>
		);
	}
}

export { MainImg };
