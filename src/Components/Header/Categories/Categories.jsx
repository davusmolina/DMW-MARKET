import React from 'react';
import { Link } from 'react-router-dom';
// import './Categories.css';

function Categories() {
	const [categories, setCategories] = React.useState([]);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	React.useEffect(() => {
		async function cargarCategories() {
			try {
				const res = await fetch('https://fakestoreapi.com/products/categories');
				const data = await res.json();

				setCategories(data);
				setLoading(false);
			} catch (error) {
				setError(true);
			}
		}
		cargarCategories();
	}, []);

	return (
		<React.Fragment>
			{loading && (
				<h2 className='cargandoCategories'>Cargando categorias...</h2>
			)}
			{error && (
				<h2 className='errorCategories'>
					Lo sentimos no hemos podido cargar las categorias
				</h2>
			)}
			{!!categories && !loading && (
				<nav className='navigation-header'>
					<ul>
						{categories.map((category) => {
							return (
								<li key={category}>
									<Link to={`products/category/${category}`}>
										{category.split(' ')[0].toUpperCase()}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			)}
		</React.Fragment>
	);
}

export { Categories };
