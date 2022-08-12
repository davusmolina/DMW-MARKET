import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './_Main.scss';

import { Home } from './HomeSection/Home.jsx';
import { ProductSection } from './ProductSection/ProductSection.jsx';
import { CategoriesSection } from './CategoriesSection/CategoriesSection.jsx';
import { PaymentSection } from './PaymentSection/PaymentSection.jsx';

function Main() {
	return (
		<main>
			{/* <div className='comeBack'>
				{' '}
				<h2>{'<'}</h2>{' '}
			</div> */}
			<Routes>
				<Route exact path='products/:id' element={<ProductSection />} />
				<Route
					exact
					path='products/category/:category'
					element={<CategoriesSection />}
				/>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/carPay' element={<PaymentSection />} />
				<Route path='*' element={<p>Not Found</p>} />
			</Routes>
		</main>
	);
}

export { Main };
