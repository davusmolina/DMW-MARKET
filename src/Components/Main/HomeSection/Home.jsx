import React from 'react';
// import './Home.css';

import { PaymentMethods } from './PaymentChannels/PaymentMethods.jsx';
import { DiscountSection } from './DiscountSection/DiscountSection.jsx';
import { ProductsOffer } from './ProductsOffer/ProductsOffer.jsx';
import { InfoSection } from './InfoSection/InfoSection.jsx';

function Home() {
	return (
		<section className='main'>
			<DiscountSection />
			<PaymentMethods />
			<ProductsOffer />
			<InfoSection />
		</section>
	);
}
export { Home };
