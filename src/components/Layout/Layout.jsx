import React from 'react';


import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Routes from '../../router/Routes'; 

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
