import React from 'react';
import styles from './indicatorModal.module.scss';
import { useRouter } from 'next/router';

const IndicatorModal = () => {
  const router = useRouter();
  const { study_type, parameter_name, default_value, min_value, max_value } =
    router.query;

  return (
    <div className={styles.mainIndicatorContainer}>
      <div className={styles.indicatorContainer}>
        <h3>{(study_type as string)?.toLocaleUpperCase()}</h3>
        <div className={styles.indicatorTitle}>Set Parameters:</div>
        <div className={styles.parameterContainer}>
          <h4>{parameter_name}</h4>
          <input
            type="number"
            defaultValue={default_value}
            min={Number(min_value)}
            max={Number(max_value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default IndicatorModal;
