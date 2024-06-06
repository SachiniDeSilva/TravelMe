import React from 'react'; // No need to import Component separately if not used

import Footer from '../Footer/Footer';

import Header from '../Header/Header'; // Adjusted the import path relative to the current file

import Router from '../../router/Router';

const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default Layout;
