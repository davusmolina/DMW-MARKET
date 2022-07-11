import React from 'react';
import './DiscountSection.css';

function DiscountSection() {
	const [imagesProductsDiscount, setImagesProductsDiscount] = React.useState(
		[]
	);
	const [error, setError] = React.useState('');
	const [imgInfo, setImgInfo] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		async function cargarImagenesDescuento() {
			try {
				setLoading(true);
				const res = await fetch('https://fakestoreapi.com/products?limit=6');
				const data = await res.json();

				const imagesInfo = [];
				data.map((imageObject) => {
					const imageUrl = imageObject['image'];
					const title = imageObject['title'];
					if (imageUrl !== '') {
						imagesInfo.push([imageUrl, title]);
					}
				});

				setImagesProductsDiscount(imagesInfo);
			} catch (error) {
				setError(error);
			}
		}
		cargarImagenesDescuento();
	}, []);

	function cambiarIndex(accion) {
		if (accion === 'SUMAR') {
			index >= 5 ? setIndex(0) : setIndex(index + 1);
		} else if (accion === 'RESTAR') {
			index <= 0 ? setIndex(5) : setIndex(index - 1);
		}
		setImgInfo([
			imagesProductsDiscount[index][0],
			imagesProductsDiscount[index][1],
		]);
	}

	React.useEffect(() => {
		const idSetInterval = setInterval(() => {
			cambiarIndex('SUMAR');
			setLoading(false);
		}, 5000);
		return () => clearInterval(idSetInterval);
	}, [imagesProductsDiscount]);

	return (
		<article className='discountSection'>
			{!error && !!loading && (
				<div className='loadingImagesDiscount'>
					<span>Cargando...</span>

					<span>&#128247;</span>
				</div>
			)}
			{error && <h2>No hemos podido cargar las imagenes de descuento</h2>}
			{!!imagesProductsDiscount && !loading && imgInfo != [] && (
				<img src={imgInfo[0]} alt={imgInfo[1]} />
			)}
			<div className='btnChangeImgContainer'>
				<button
					className='btnChangeImg'
					onClick={() => {
						cambiarIndex('RESTAR');
					}}>
					&#8606;
				</button>
				<button
					className='btnChangeImg'
					onClick={() => {
						cambiarIndex('SUMAR');
					}}>
					&#8608;
				</button>
			</div>
		</article>
	);
}

export { DiscountSection };
