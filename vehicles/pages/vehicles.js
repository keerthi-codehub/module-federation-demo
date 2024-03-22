import React, { Suspense, lazy, useEffect, useState } from 'react';
import Header from '../src/components/navbar';
import { useRouter } from 'next/router';

function Vehicle() {
	const router = useRouter()
	const [BadgeComp, setBadgeComp] = useState(null);
	const [Sidebar, setSidebarComp] = useState(null);
	const [CustomButton, setCustomButton] = useState(null);
	useEffect(() => {

		const token = localStorage.getItem('token')

		if(!token || token !== 'authenticated'){
			router.push('/accounts');
			return;
		}

		if (typeof window !== 'undefined') {
			setBadgeComp(lazy(() => import('sharedComponents/Badge')));
			setSidebarComp(lazy(() => import('sharedComponents/Sidebar')));
			setCustomButton(lazy(() => import('sharedComponents/CustomButton')));
		}
	}, []);
	return (
		<div className="d-flex">
			<Header />
			<div>
				{/* {CustomButton ? (
					<CustomButton title="CustomButton" />
				) : (
					'No CustomButton'
				)}
				{BadgeComp ? <BadgeComp text={'Vehicles wedwed'} /> : 'vehicles'} */}
				<h1 style={{ textAlign: 'center', padding: '30px 0px' }}>
					{BadgeComp ? <BadgeComp text={'Vehicles'} /> : 'vehicles'}
				</h1>
			</div>
		</div>
	);
}

export default Vehicle;
