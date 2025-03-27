import type { Component } from 'solid-js';

import styles from './NavBar.module.css';

const NavBar: Component = () => {
  return (
    <div class={styles.NavBar}>
      <div class={styles.title}>OLIVIA+NATALIE</div>
      <div></div>
    </div>
  );
};
export default NavBar;
