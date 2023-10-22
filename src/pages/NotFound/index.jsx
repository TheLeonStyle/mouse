import React from 'react';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src="./img/NotFound/sad-smile.png" alt="Грустный смайлик" />
      </div>
      <h2>Данной страницы не существует</h2>
    </div>
  );
};

export default NotFound;
