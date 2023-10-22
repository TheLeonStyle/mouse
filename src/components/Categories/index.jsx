import React from 'react';

import styles from './Categories.module.scss';

import Button from '../Button';

const Categories = ({ activeIndex, setActiveIndex }) => {
  const list = ['Все', 'Logitech', 'Razer', 'A4Tech', 'Defender', 'Xiaomi', 'Apple'];

  return (
    <div className={styles.categories}>

        {list.map((value, index) => (
          <Button
            key={index}
            value={value}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={(index) => setActiveIndex(index)}
          />
        ))}

    </div>
  );
};

export default Categories;
