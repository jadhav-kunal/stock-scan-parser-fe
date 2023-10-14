import React from 'react';
import styles from './textModal.module.scss';

type TextModalType = {
  text: string;
};

const TextModal = (props: TextModalType) => {
  return (
    <div className={styles.textContainer}>
      <p className={styles.textContent}>{props.text}</p>
    </div>
  );
};

export default TextModal;
