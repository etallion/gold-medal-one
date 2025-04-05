import type { Component } from 'solid-js';

import styles from './App.module.scss';
import Card from './components/Card';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <NavBar />
      </header>
      <main class={styles.main}>
        <div class={styles.left}>
          <Card></Card>
        </div>
        <div class={styles.right}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default App;
