import React, { Suspense, lazy, useEffect, useState } from 'react';
import Header from '../src/components/navbar';

function WorkOrder() {
	const [LoginComp, setLoginComp] = useState(null);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setLoginComp(lazy(() => import('login/Login')));
		}
	}, []);
	return <div>{LoginComp && <LoginComp />}</div>;
}

export default WorkOrder;
