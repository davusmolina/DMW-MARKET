import React from 'react';
import lupaImg from '../../../../Images/lupa.png';
// import './BarraBusqueda.css';

function BarraBusqueda() {
	return (
		<div className='barraBusquedaContainer'>
			<input type='text' placeholder='Buscar' />
			<img src={lupaImg} alt='Haz tu busqueda' />
		</div>
	);
}

export { BarraBusqueda };
