import type { Component } from 'solid-js';

import styles from './App.module.css';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import Card from './components/Card';

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
