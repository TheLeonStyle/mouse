import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';

import Button from '../../components/Button';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.top}>
        <h2 className={styles.title}>Корзина</h2>
        <button className={styles.clear}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 5H4.16667H17.5"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path
              d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path
              d="M8.33337 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path
              d="M11.6666 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
          <span>Очистить корзину</span>
        </button>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.image}>
            <img src="./img/items/logitech/1.webp" alt="Товар" />
          </div>

          <div className={styles.info}>
            <h3>Logitech B100</h3>
            <div>
              <p>Проводной</p>
              <p>Черный</p>
            </div>
          </div>

          <div className={styles.count}>
            <button>-</button>
            <b>2</b>
            <button>+</button>
          </div>

          <b className={styles.price}>770 ₽</b>

          <button className={styles.remove}>null</button>
        </div>
        <div className={styles.item}>
          <div className={styles.image}>
            <img src="./img/items/logitech/1.webp" alt="Товар" />
          </div>

          <div className={styles.info}>
            <h3>Logitech B100</h3>
            <div>
              <p>Проводной</p>
              <p>Черный</p>
            </div>
          </div>

          <div className={styles.count}>
            <button>-</button>
            <b>2</b>
            <button>+</button>
          </div>

          <b className={styles.price}>770 ₽</b>

          <button className={styles.remove}>null</button>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.details}>
          <span>
            Товаров: <b>3 шт.</b>
          </span>
          <span>
            Сумма заказа: <b>900 ₽</b>
          </span>
        </div>
        <div className={styles.buttons}>
          <Link to="/">
            <Button value={'Вернуться назад'} />
          </Link>
          <Button value={'Оплатить сейчас'} color="pink" activeIndex={null} setActiveIndex={null} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
