import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { Header } from './Header/Header.jsx';
import { Main } from './Main/Main.jsx';
import { Footer } from './Footer/Footer.jsx';
import { ContextProvider } from './Context/Context';

function App() {
	return (
		<div className='App'>
			<ContextProvider>
				<Router>
					<Header />
					<Main />
					<Footer />
				</Router>
			</ContextProvider>
		</div>
	);
}

export default App;
