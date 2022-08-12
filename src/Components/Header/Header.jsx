import React from 'react';
// import './Header.css';

import { Link } from 'react-router-dom';
import { BarraBusqueda } from './BarraBusqueda/BarraBusqueda';
import { Categories } from './Categories/Categories';
import { Context } from '../Context/Context.jsx';

import logoImg from '../../../Images/dmwLogo.png';
import carrito from '../../../Images/carrito.png';

function Header() {
	const { productsInCar } = React.useContext(Context);
	const [showHeaderRight, setShowHeaderRight] = React.useState(false);

	React.useEffect(() => {
		if (showHeaderRight === true) {
			setTimeout(() => {
				setShowHeaderRight(false);
			}, 5000);
		}
	}, [showHeaderRight]);

	return (
		<header className='header'>
			<div className='header__leftBlock'>
				<Link to='/' className='logoContainer'>
					<img
						className='logoContainer__logo'
						src={logoImg}
						alt='Logo del market place'></img>
				</Link>
			</div>
			<div className='header__centralBlock'>
				<BarraBusqueda />
				<Categories />
			</div>
			<div
				className={
					showHeaderRight ? 'header__rightBlock-smScreen' : 'header__rightBlock'
				}>
				<h2>
					<Link to=''>&#10024; OFERTA DEL DIA 50% OFF &#10024;</Link>
				</h2>
				<ul>
					<li>
						<Link to=''>REGISTRATE</Link>
					</li>
					<li>
						<Link to=''>INGRESA</Link>
					</li>
					<li>
						<Link to=''>MIS COMPRAS</Link>
					</li>
				</ul>
			</div>

			<span
				onClick={() => {
					setShowHeaderRight(!showHeaderRight);
				}}>
				&#9776;
			</span>
			<div className='car'>
				<Link to='/carPay'>
					<h3 className='count-car'>
						{productsInCar < 1 ? 0 : productsInCar.length}
					</h3>
					<img src={carrito} alt='Carrito de compras' />
				</Link>
			</div>
		</header>
	);
}

export { Header };
