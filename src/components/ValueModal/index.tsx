import React from 'react';
import styles from './valueModal.module.scss';
import { useRouter } from 'next/router';

const ValueModal = () => {
  const router = useRouter();
  const { values } = router.query;

  return (
    <div className={styles.mainValueContainer}>
      <div className={styles.valueContainer}>
        <ul>
          {Array.isArray(values) &&
            values.map((value: string, index: number) => (
              <li className={styles.valueItems} key={index}>
                {value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ValueModal;
