import { Component } from 'solid-js';

import styles from './Navbar.module.scss';

const Navbar: Component = () => {
  return (
    <nav class={styles.navbar}>
      <h2 class={styles.logo}>Learn Language</h2>
      <ul>
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
