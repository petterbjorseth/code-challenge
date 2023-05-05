import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header/>
        <div>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;

