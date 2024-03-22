import React, { Suspense, lazy, useEffect, useState } from 'react';
import Header from '../src/components/navbar';
import { useRouter } from 'next/router';

function WorkOrder() {
	const router = useRouter();

	const [WorkOrderComp, setWorkOrderComp] = useState(null);

	useEffect(() => {
	
		const token = localStorage.getItem('token')

		if(!token || token !== 'authenticated'){
			router.push('/accounts');
			return;
		}

		if (typeof window !== 'undefined') {
			setWorkOrderComp(lazy(() => import('workOrder/App')));
		}
	}, []);
	return (
		<div className='d-flex'>
			<Header />
			{WorkOrderComp && <WorkOrderComp />}
		</div>
	);
}

export default WorkOrder;
