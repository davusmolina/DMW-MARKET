import React from 'react';
import './DiscountSection.css';

function DiscountSection() {
	const [imagesProductsDiscount, setImagesProductsDiscount] = React.useState(
		[]
	);
	const [error, setError] = React.useState('');
	const [imgInfo, setImgInfo] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [translate, setTranslate] = React.useState(0);

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
				setLoading(false);
			} catch (error) {
				setError(error);
			}
		}
		cargarImagenesDescuento();
	}, []);

	React.useEffect(() => {
		const idSetInterval = setInterval(() => {
			nextImage();
		}, 5000);
		return () => clearInterval(idSetInterval);
	}, [translate]);

	function nextImage() {
		if (translate > 66) {
			setTranslate(0);
		} else {
			setTranslate(translate + 100 / 6);
		}
		console.log(translate);
	}
	function previwImage() {
		if (translate < 16) {
			setTranslate(66.66);
		} else {
			setTranslate(translate - 100 / 6);
		}
		console.log(translate);
	}
	return (
		<article className='carrousel'>
			{!error && !!loading && (
				<div className='loadingImagesDiscount'>
					<span>Cargando...</span>

					<span>&#128247;</span>
				</div>
			)}
			{error && <h2>No hemos podido cargar las imagenes de descuento</h2>}
			{!!imagesProductsDiscount && !loading && imgInfo != [] && (
				<div
					className='grande'
					style={{ transform: `translateX(-${translate}%)` }}>
					{' '}
					{imagesProductsDiscount.map((image) => {
						return <img key={image[1]} src={image[0]} alt={image[1]} />;
					})}
				</div>
			)}
			{/* <ul className='puntos'>
				<li className='punto activo'></li>
				<li className='punto'></li>
			</ul> */}
			<div className='btnChangeImgContainer'>
				<button
					className='btnChangeImg'
					onClick={() => {
						previwImage();
					}}>
					&#8606;
				</button>
				<button
					className='btnChangeImg'
					onClick={() => {
						nextImage();
					}}>
					&#8608;
				</button>
			</div>
		</article>
	);
}

export { DiscountSection };
