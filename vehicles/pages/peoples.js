import React, { Suspense, lazy, useEffect, useState } from 'react';
import Header from '../src/components/navbar';
import { useRouter } from 'next/router';

function Peoples() {
	const router = useRouter()
	const [PeoplesComp, setPeoplesComp] = useState(null);
	useEffect(() => {
		const token = localStorage.getItem('token')

		if(!token || token !== 'authenticated'){
			router.push('/accounts');
			return;
		}
		if (typeof window !== 'undefined') {
			setPeoplesComp(lazy(() => import('peoples/App')));
		}
	}, []);
	return (
		<div className='d-flex'>
			<Header />
			{PeoplesComp && <PeoplesComp></PeoplesComp>}
		</div>
	);
}

export default Peoples;
