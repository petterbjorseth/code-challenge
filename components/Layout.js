import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <>
      <div className='layout'>
        <Header/>
        <div className="cont">
          {children}
        </div>
        <Footer />
      </div>
      <style jsx>{`
                  .cont {
                    overflow: auto;
                    height: 79vh;
                  }
              `}</style>
      </>
    );
  }
}

export default Layout;

