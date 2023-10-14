import React from 'react';
import { useRouter } from 'next/router';
import TextModal from '../TextModal';
import VariableModal from '../VariableModal';
import styles from './scanModal.module.scss';

const ScanModal = () => {
  const router = useRouter();
  const { name, tag, color, criteria } = router.query;

  const parsedCriteria = criteria
    ? typeof criteria === 'string'
      ? JSON.parse(criteria)
      : null
    : null;

  return (
    <div className={styles.mainScanContainer}>
      <div className={styles.scanContainer}>
        <h2 className={styles.title}>{name}</h2>
        <h3 className={styles.subtitle} style={{ color: `${color}` }}>
          {tag}
        </h3>
        {parsedCriteria?.map((data: any) => {
          return data.type === 'plain_text' ? (
            <TextModal text={data.text} />
          ) : (
            <VariableModal variableInfo={data} />
          );
        })}
      </div>
    </div>
  );
};

export default ScanModal;
