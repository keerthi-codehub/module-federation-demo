import React, { useEffect, useState, lazy } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from './Navbar.module.css'

function NavBar() {
  const router = useRouter();
  // const [BadgeComp, setBadgeComp] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/accounts");
  };

  // useEffect(() => {
  // 	if (typeof window !== 'undefined') {
  // 		setBadgeComp(lazy(() => import('sharedComponents/Badge')));
  // 	}
  // }, []);

  return (
    <div
      className={styles.sidebar}
      id="sidebar-wrapper"
    >
      <h2 >Module Federation POC</h2>
      <div className={styles.seperator}></div>
      <div className={styles.listGroup}>
        <Link
          href="/"
          className={styles.listGroupItem}
        >
          Host App
        </Link>
        <Link
          href="/remote-react"
          className={styles.listGroupItem}
        >
          Remote App
        </Link>
        <Link
          href="/admin-console"
          className={styles.listGroupItem}
        >
          Admin console
        </Link>
        <Link
          href="/peoples"
          className={styles.listGroupItem}
        >
          People
        </Link>
      </div>
      <button
        type="button"
        className={styles.btn}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default NavBar;
