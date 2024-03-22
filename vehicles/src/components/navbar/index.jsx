import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter()
	const handleLogout =()=>{
		localStorage.removeItem('token')
		router.push('/accounts')
	}


	return (
		<div className="bg-light border-right" id="sidebar-wrapper" style={{width: "300px", height: '100vh', marginRight: "24px" }}>
		<div className="sidebar-heading ps-3">MF POC</div>
		<div className="list-group list-group-flush">
		  <Link href="/vehicles" className="list-group-item list-group-item-action bg-light">Vehicles</Link>
		  <Link href="/work-order" className="list-group-item list-group-item-action bg-light">Work Order</Link>
		  <Link href="/admin-console" className="list-group-item list-group-item-action bg-light">Admin console</Link>
		  <Link href="/peoples" className="list-group-item list-group-item-action bg-light">People</Link>
		</div>
		<button type="button" className="btn btn-dark ms-3" onClick={handleLogout}>Logout</button>
	  </div>
	);
}

export default Header;
