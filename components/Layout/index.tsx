import Navigation from '../Navigation';
import Footer from '../Footer';
import React from 'react';

interface LayoutChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutChildren) => {
  return (
    <div className='content'>
      {/* <Navigation /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
