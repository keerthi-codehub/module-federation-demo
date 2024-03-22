import React, { useEffect, useState, lazy } from 'react';
import './App.css';

function App() {
	const [CustomTable, setCustomTable]= useState('')

	useEffect(()=>{
		if (typeof window !== 'undefined') {
			setCustomTable(lazy(() => import('sharedComponents/CustomTable')));
		}
	},[])
	
	return (
		<div className="App">
			<header className="App-header">
				{CustomTable? <CustomTable/> : 'no table'}
				<h1 style={{ textAlign: 'center', padding: '30px 0px' }}>Work order</h1>
			</header>
		</div>
	);
}

export default App;
