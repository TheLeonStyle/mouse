import React from 'react';
import { SearchContext } from '../../App';

import Category from '../../components/Categories';
import Sort from '../../components/Sort';
import ItemsBlock from '../../components/ItemsBlock';
import Skeleton from '../../components/ItemsBlock/Skeleton';

import styles from './Home.module.scss';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'Популярности', sortProperty: 'rating' });

  const category = categoryId > 0 ? `category=` + categoryId : '';
  const sortBy = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const search = searchValue ? `&search=${searchValue}` : '';

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://651d84f244e393af2d59f0db.mockapi.io/myItems?${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div>
      <div className={styles.content__top}>
        <Category activeIndex={categoryId} setActiveIndex={(id) => setCategoryId(id)} />
        <Sort activeType={sortType} setActiveType={(id) => setSortType(id)} />
      </div>
      <div className={styles.itemsBlock}>
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ItemsBlock {...obj} key={obj.id} />)}
      </div>
    </div>
  );
};

export default Home;
