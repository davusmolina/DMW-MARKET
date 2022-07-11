import React from 'react';
const Context = React.createContext();

const ContextProvider = (props) => {
	const [productsInCar, setProductsInCar] = React.useState(-1);
	const [totalPay, setTotalPay] = React.useState(0);
	const [showModal, setShowModal] = React.useState(false);

	React.useEffect(() => {
		const total = () => {
			let total = 0;
			if (productsInCar !== -1) {
				productsInCar.forEach((product) => {
					total += product.price;
				});
			}
			return total.toFixed(2);
		};
		setTotalPay(total());
	}, [productsInCar]);

	React.useEffect(() => {
		if (productsInCar !== -1) {
			if (productsInCar.length === 0) {
				setProductsInCar(-1);
			}
		}
	}, [productsInCar]);

	function agregarAlCarrito(product) {
		if (productsInCar === -1) {
			setProductsInCar([
				{
					id: product.id,
					title: product.title,
					price: product.price,
					image: product.image,
				},
			]);
		} else {
			const thereIs = productsInCar.some(
				(producto) => producto.id == product.id
			);
			if (thereIs === false) {
				setProductsInCar([
					...productsInCar,
					{
						id: product.id,
						title: product.title,
						price: product.price,
						image: product.image,
					},
				]);
			}
		}
	}

	const deletProductFromCar = (product) => {
		const newProductsInCar = productsInCar.filter((productInCar) => {
			return productInCar.id !== product.id;
		});
		setProductsInCar(newProductsInCar);
	};
	return (
		<Context.Provider
			value={{
				productsInCar,
				agregarAlCarrito,
				deletProductFromCar,
				totalPay,
				setTotalPay,
				showModal,
				setShowModal,
			}}>
			{props.children}
		</Context.Provider>
	);
};

export { Context, ContextProvider };
