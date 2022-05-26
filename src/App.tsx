import type { Component } from 'solid-js';

import styles from './App.module.scss';
import { Navbar } from './components';
import { Home } from './containers';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Navbar />
      </header>
      <Home />
    </div>
  );
};

export default App;
