import React, { Suspense, lazy, useEffect, useState } from 'react';
import Header from '../src/components/navbar';
import { useRouter } from 'next/router';

function AdminConsole() {
	const router = useRouter();

	const [AdminConsoleComp, setAdminConsoleComp] = useState(null);
	useEffect(() => {
		const token = localStorage.getItem('token')

		if(!token || token !== 'authenticated'){
			router.push('/accounts');
			return;
		}

		if (typeof window !== 'undefined') {
			setAdminConsoleComp(lazy(() => import('adminConsole/App')));
		}
	}, []);
	return (
		<div className='d-flex'>
			<Header />
			{AdminConsoleComp && <AdminConsoleComp />}
		</div>
	);
}

export default AdminConsole;
