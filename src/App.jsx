import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className={styles.App}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
