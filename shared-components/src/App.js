import React from 'react';
import './App.css';
import Badge from './components/badge';
import CustomButton from './components/button';
import Sidebar from './components/sidebar';
import CustomTable from './components/table'

function App() {
	return (
		<div className="App">
			Shared Components
			<CustomTable/>
			<Sidebar />
			<CustomButton title="Primary" />
			<Badge text={'hello'} />
		</div>
	);
}

export default App;
