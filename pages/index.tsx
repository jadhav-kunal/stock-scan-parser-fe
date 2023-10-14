import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
const BACKEND_BASE_URL = 'http://localhost:3001';

const index = () => {
  const router = useRouter();
  const [scans, setScans] = useState<any>([]);

  useEffect(() => {
    fetch(`${BACKEND_BASE_URL}/api/scans`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data received:', data);
        setScans(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleScanClick = (scans: any) => {
    router.push({
      pathname: '/scanModal',
      query: {
        id: scans.id,
        name: scans.name,
        tag: scans.tag,
        color: scans.color,
        criteria: JSON.stringify(scans.criteria),
      },
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listViewContainer}>
        {scans.map((scans: any) => {
          return (
            <div
              className={styles.listItemContainer}
              onClick={() => handleScanClick(scans)}
            >
              <h2>{scans.name}</h2>
              <h3
                style={{
                  color: `${scans.color}`,
                }}
              >
                {scans.tag}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
