import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) => (
  <div className='container'>
    <Header />
    <Menu />
    <section className='item content'>
      {children}
    </section>
    <Footer />
  </div>
);

export default Layout;
