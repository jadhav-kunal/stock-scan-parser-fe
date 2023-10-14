import React from 'react';
import { useRouter } from 'next/router';
import styles from './variableModal.module.scss';

const VariableModal = ({ variableInfo }: any) => {
  const router = useRouter();

  const renderVariable = (variableData: any, value: number) => {
    const handleClick = () => {
      if (variableData.type === 'indicator') {
        router.push({
          pathname: '/indicatorModal',
          query: {
            study_type: variableData.study_type,
            parameter_name: variableData.parameter_name,
            default_value: variableData.default_value,
            min_value: variableData.min_value,
            max_value: variableData.max_value,
          },
        });
      } else if (variableData.type === 'value') {
        router.push({
          pathname: '/valueModal',
          query: { values: variableData.values },
        });
      }
    };

    return (
      <span
        className={styles.variableContent}
        style={{
          textDecoration: 'underline',
          cursor: 'pointer',
          color: 'blue',
        }}
        onClick={handleClick}
      >
        {value}
      </span>
    );
  };

  const renderTextWithVariables = () => {
    const { text, variable } = variableInfo;
    const parts = text.split(/\$(\d)/);

    return (
      <div>
        {parts.map((part: string, index: any) => {
          if (index % 2 === 0) {
            return (
              <span className={styles.variableContent} key={index}>
                {part}
              </span>
            );
          } else {
            const variableData = variable[`$${part}`];
            return renderVariable(
              variableData,
              variableData.type === 'indicator'
                ? variableData.default_value
                : variableData.values[0]
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className={styles.variableContainer}>{renderTextWithVariables()}</div>
  );
};

export default VariableModal;
