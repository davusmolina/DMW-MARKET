import React from 'react';
import './CategorySection.css';
import { ProductComponent } from './Product/Product.jsx';
import { useParams } from 'react-router-dom';

function CategoriesSection({ discount }) {
	const { category } = useParams();
	return (
		<section className={`category-section`}>
			<h1>{category.toUpperCase()} </h1>
			<ProductComponent discount={discount} category={category} />
		</section>
	);
}

export { CategoriesSection };
