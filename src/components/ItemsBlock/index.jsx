import React from 'react';

import Button from '../Button';

import styles from './ItemsBlock.module.scss';

const ItemsBlock = ({ imageUrl, title, types, colors, price, imageSize }) => {
  const typesList = ['Проводной', 'Беспроводной'];
  const [typeIndex, setTypeIndex] = React.useState(0);
  const [colorIndex, setColorIndex] = React.useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img
          className={imageSize ? styles.contain : ''}
          src={`./img/items/${imageUrl}`}
          alt="Товар"
        />
      </div>
      <h3>{title}</h3>
      <div className={styles.selected}>
        <ul>
          {types.map((id, index) => (
            <li
              onClick={() => setTypeIndex(index)}
              key={index}
              className={typeIndex === index ? styles.active : ''}>
              {typesList[id]}
            </li>
          ))}
        </ul>
        <ul>
          {colors.map((value, index) => (
            <li
              onClick={() => setColorIndex(index)}
              key={index}
              className={colorIndex === index ? styles.active : ''}>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <p>
          от <span>{price}</span> ₽
        </p>
        <Button value={'Добавить'} />
      </div>
    </div>
  );
};

export default ItemsBlock;
