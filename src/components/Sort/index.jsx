import React from 'react';

import styles from './Sort.module.scss';

const Sort = ({ activeType, setActiveType }) => {
  const [open, setOpen] = React.useState(false);

  const onClickSortItem = (obj) => {
    setActiveType(obj);
    setOpen(false);
  };

  const list = [
    { name: 'Популярности', sortProperty: '-rating' },
    { name: 'Популярности', sortProperty: 'rating' },
    { name: 'Цене', sortProperty: '-price' },
    { name: 'Цене', sortProperty: 'price' },
    { name: 'Альфавиту', sortProperty: '-title' },
    { name: 'Альфавиту', sortProperty: 'title' },
  ];

  return (
    <div className={styles.sort}>
      <p>
        Сортировать по: <span onClick={() => setOpen(!open)}>{activeType.name}</span>
      </p>

      {open ? (
        <ul className={styles.popup}>
          {list.map((obj) => (
            <li
              onClick={() => onClickSortItem(obj)}
              className={activeType.sortProperty === obj.sortProperty ? styles.active : ''}
              key={obj.sortProperty}>
              {obj.name}
              {obj.sortProperty.includes('-') ? <span>&darr;</span> : <span>&uarr;</span>}
            </li>
          ))}
        </ul>
      ) : undefined}
    </div>
  );
};

export default Sort;
