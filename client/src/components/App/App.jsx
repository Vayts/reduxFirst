import React from 'react';
import {
	Routes,
	Route,
} from 'react-router-dom';
import './App.css';
import Home from '@src/components/Home/Home';
import { Layout } from '../hoc/Layout/Layout';

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
