import React from 'react';
//import PropTypes from 'prop-types';

const  Hero= ({children,hero}) => {
  return (
    <header className={hero}>
    {children}
    </header>
  );
}



export default Hero;
