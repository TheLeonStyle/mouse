import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={'./img/logo.png'} alt="Логотип" />
          Mouse
        </Link>
      </div>

      <Search />

      <Link to="/cart" className={styles.cart}>
        Корзина
      </Link>
    </header>
  );
};

export default Header;
