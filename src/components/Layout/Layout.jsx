import React from 'react';


import Footer from '../Footer/Footer';

import Routes from '../../router/Routes'; 
import Header from '../Header/Header';


const Layout = () => {
  return (
    <>
     
        <Header />
        <Routes /> 
        <Footer />
     
    </>
  );
}

export default Layout;
