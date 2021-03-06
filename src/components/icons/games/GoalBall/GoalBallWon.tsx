import clsx from 'clsx';
import React from 'react';

import styles from './GoalBallWon.module.scss';

interface IProps {
  className?: string;
}

const GoalBallWon: React.FC<IProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.64 165.64" className={clsx(className)}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="balls">
          <path
            className={styles['cls-1']}
            d="M135.49,82.66C139.4,75.17,147,64.8,152.11,58.14a73.73,73.73,0,0,0-29.38-37.08c-1.37.75-2.75,1.46-4.11,2.13A53,53,0,1,1,29.79,62.3a53.59,53.59,0,0,1,.53-7.43C25.25,56.48,19,57.94,13.2,59.13a73.36,73.36,0,0,0-1.26,43.3,97.87,97.87,0,0,1,26.17,11.88,112.42,112.42,0,0,1-.36,26.61A73.17,73.17,0,0,0,77,156.11a123.55,123.55,0,0,1,19.62-27.18c10.21,2,26.19,8.09,32.9,10.74a73.66,73.66,0,0,0,23.17-33.77A124.56,124.56,0,0,1,135.49,82.66Z"
          />
          <path
            className={styles['cls-1']}
            d="M35.57,38.25A53,53,0,0,1,74.82,9.88l-.11-.15A73.18,73.18,0,0,0,36.1,26,122.25,122.25,0,0,1,35.57,38.25Z"
          />
          <path
            className={styles['cls-2']}
            d="M82.82,9.27c.92,0,1.82,0,2.73.07C84.65,9.3,83.74,9.27,82.82,9.27Z"
          />
          <path
            className={styles['cls-2']}
            d="M80.09,9.34c.91,0,1.82-.07,2.73-.07C81.91,9.27,81,9.3,80.09,9.34Z"
          />
          <path
            className={styles['cls-2']}
            d="M74.82,9.88A53,53,0,0,0,35.57,38.25,117.92,117.92,0,0,1,33.1,53.94c-.87.31-1.81.63-2.78.93a53.59,53.59,0,0,0-.53,7.43,53,53,0,1,0,88.83-39.11A124.46,124.46,0,0,1,93.68,32.3C87.62,26.57,79.84,16.61,74.82,9.88ZM91.19,113a90.87,90.87,0,0,1-35.58-11C50.8,85.24,54,66.3,54,66.3,70.74,56.16,89.78,52.62,89.78,52.62c9.41,9.58,22.9,30.29,22.9,30.29C106.29,97.43,91.19,113,91.19,113Z"
          />
          <path
            className={styles['cls-3']}
            d="M54,66.3S50.8,85.24,55.61,102a90.87,90.87,0,0,0,35.58,11s15.1-15.59,21.49-30.11c0,0-13.49-20.71-22.9-30.29C89.78,52.62,70.74,56.16,54,66.3Z"
          />
          <path
            className={styles['cls-3']}
            d="M77,156.11c1.93.16,3.89.26,5.86.26a73.27,73.27,0,0,0,46.66-16.7c-6.71-2.65-22.69-8.75-32.9-10.74A123.55,123.55,0,0,0,77,156.11Z"
          />
          <path
            className={styles['cls-3']}
            d="M152.65,105.9a73.54,73.54,0,0,0-.54-47.76c-5.11,6.66-12.71,17-16.62,24.52A124.56,124.56,0,0,0,152.65,105.9Z"
          />
          <path
            className={styles['cls-3']}
            d="M93.68,32.3a124.46,124.46,0,0,0,24.94-9.11c1.36-.67,2.74-1.38,4.11-2.13A73.14,73.14,0,0,0,85.55,9.34c-.91,0-1.81-.07-2.73-.07s-1.82,0-2.73.07c-1.81.07-3.61.19-5.38.39l.11.15C79.84,16.61,87.62,26.57,93.68,32.3Z"
          />
          <path
            className={styles['cls-3']}
            d="M33.1,53.94a117.92,117.92,0,0,0,2.47-15.69A122.25,122.25,0,0,0,36.1,26,73.67,73.67,0,0,0,13.2,59.13c5.79-1.19,12.05-2.65,17.12-4.26C31.29,54.57,32.23,54.25,33.1,53.94Z"
          />
          <path
            className={styles['cls-3']}
            d="M38.11,114.31a97.87,97.87,0,0,0-26.17-11.88,73.58,73.58,0,0,0,25.81,38.49A112.42,112.42,0,0,0,38.11,114.31Z"
          />
          <path
            className={styles['cls-4']}
            d="M82.82,9A73.82,73.82,0,1,1,9,82.82,73.9,73.9,0,0,1,82.82,9m0-9a82.82,82.82,0,1,0,82.82,82.82A82.82,82.82,0,0,0,82.82,0Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default GoalBallWon;
