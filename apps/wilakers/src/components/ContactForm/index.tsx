import type { Component } from 'solid-js';

import styles from './ContactForm.module.scss';

const App: Component = () => {
  return (
    <div class={styles.ContactFormNew}>
      <p>
        <b> Keep in touch!</b>
        <br />
        <small>Send us a message</small>
      </p>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;
