import React from 'react';

import styles from './Button.module.scss';

const Button = ({ value, index, activeIndex = null, setActiveIndex = () => 0, color = 'blue' }) => {
  return (
    <button
      onClick={() => setActiveIndex(index)}
      className={`${styles.button} ${activeIndex === index ? styles.active : ''}${
        color === 'pink' ? styles.pink : ''
      }`}>
      {value}
    </button>
  );
};

export default Button;

// activeIndex === index ? styles.button + ' ' + styles.active : styles.button
