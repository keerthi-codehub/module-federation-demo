import NavBar from '@/components/navbar';
import React from 'react';
// import styles from './NavLayout.module.css'
// import './NavLayout.module.css';

const NavLayout = ({ children }) => {
  return (
    <div style={{display: 'flex', backgroundColor: 'white', color: 'black'}}>
      <NavBar/>
      {children}
    </div>
   
  );
};

export default NavLayout;