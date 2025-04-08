import type { Component } from 'solid-js';
import logo from '../../../public/favicon-32x32.png';

import styles from './Card.module.scss';

const Card: Component = () => {
  const permissionRequest = () => {
    window.Notification.requestPermission();
  };
  const sendNotification = () => {
    if (window.Notification.permission === 'granted') {
      new window.Notification('You have a new message', {
        body: 'Daddy and mommy love Olivia and Natalie',
        icon: logo, // optional
      });
    }
  };
  return (
    <div class={styles.Card}>
      <button class={styles.button} onclick={permissionRequest}>
        Permission to Notify
      </button>
      &nbsp;
      <button class={styles.button} onclick={sendNotification}>
        Push Notification
      </button>
    </div>
  );
};
export default Card;
