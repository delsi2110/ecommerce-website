import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>&copy; 2024 Car E-Commerce. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href='#' style={{ color: '#ff6f61' }}>
            Twitter
          </a>{' '}
          and{' '}
          <a href='#' style={{ color: '#ff6f61' }}>
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
