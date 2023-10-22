import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>Соц сети:</li>
        <li>
          <a href="#no-scroll">LinkIn</a>
        </li>
        <li>
          <a href="#no-scroll">Facebook</a>
        </li>
        <li>
          <a href="#no-scroll">Twitter</a>
        </li>
        <li>
          <a href="#no-scroll">Telegram</a>
        </li>
        <li>
          <a href="#no-scroll">Youtube</a>
        </li>
      </ul>

      <p>Copyright 2023</p>
    </footer>
  );
};

export default Footer;
