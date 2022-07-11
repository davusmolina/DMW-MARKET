import React from 'react';

import { Link } from 'react-router-dom';
import { BarraBusqueda } from './BarraBusqueda/BarraBusqueda';
import { Categories } from './Categories/Categories';
import { Context } from '../Context/Context.jsx';

import logoImg from '../../../Images/dmwLogo.png';
import ubicacionImg from '../../../Images/ubicacion.png';
import carrito from '../../../Images/carrito.png';

import './Header.css';
function Header() {
	const { productsInCar } = React.useContext(Context);
	return (
		<header className='header'>
			<div className='header__leftBlock'>
				<div className='logoContainer'>
					<Link to='/' className='logoContainer'>
						<img
							className='logoContainer__logo'
							src={logoImg}
							alt='Logo del market place'></img>
					</Link>
				</div>
				<div className='ubicacionContainer'>
					<img src={ubicacionImg} />
					<h2>
						<Link to=''>Ingresa tu ubicación</Link>
					</h2>
				</div>
			</div>
			<div className='header__centralBlock'>
				<BarraBusqueda />
				<Categories />
			</div>
			<div className='header__rightBlock'>
				<h2>
					<Link to=''>&#10024; OFERTA DEL DIA 50% OFF &#10024;</Link>
				</h2>
				<ul>
					<li>
						<Link to=''>Registrate</Link>
					</li>
					<li>
						<Link to=''>Ingresa</Link>
					</li>
					<li>
						<Link to=''>MisCompras</Link>
					</li>
					<li>
						<Link to='/carPay'>
							<div>
								<span className='count-car'>
									{productsInCar < 1 ? 0 : productsInCar.length}{' '}
								</span>
								<img src={carrito} alt='Carrito de compras' />
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export { Header };
