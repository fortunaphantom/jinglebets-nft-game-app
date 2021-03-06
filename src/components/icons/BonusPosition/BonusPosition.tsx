import React from 'react';

import styles from './BonusPosition.module.scss';

interface IProps {
  className?: string;
  position?: number;
}

const BonusPosition: React.FC<IProps> = ({ position }) => {
  const getDigit = () => {
    switch (position) {
      case 1:
        return (
          <path
            className={styles['cls-3']}
            d="M82.92,35.05a.23.23,0,0,0-.21-.22c-.92,0-1,0-1-.24V27.36a.31.31,0,0,1,.32-.28h7.76a.3.3,0,0,1,.28.28V53a.27.27,0,0,1-.25.28H83.17a.26.26,0,0,1-.25-.24Z"
          />
        );

      case 2:
        return (
          <path
            className={styles['cls-3']}
            d="M93.21,46a.3.3,0,0,1,.28.32V53c0,.18-.11.28-.35.28H79.68c-.14,0-.32-.1-.32-.24V46a2.15,2.15,0,0,1,.35-1.06c2.63-4,7.37-6.59,7.37-9.56,0-.5-.14-.82-.49-.82-.5,0-.93,1-.93,2.09a.28.28,0,0,1-.28.29l-5.49-.25c-.42,0-.42-.18-.42-1.59,0-4.32,2.48-8,7-8s7.3,3.68,7.3,7.86c0,5.31-2.94,7.68-7.15,10.62a.45.45,0,0,0-.15.25c0,.11.07.14.22.14Z"
          />
        );

      case 3:
        return (
          <path
            className={styles['cls-3']}
            d="M83.14,37.6c0-.54.18-.54,1.74-.54.85,0,1.41-.46,1.41-1,0-2.06,0-2.27-.56-2.27s-.57.18-.57,1.77a.37.37,0,0,1-.39.36l-5.88-.25a.24.24,0,0,1-.28-.28c0-2.63,0-8.29,7.12-8.29,4.21,0,7.15,2.62,7.15,6.87a6.15,6.15,0,0,1-3,5.52c-.22.14-.39.22-.39.29s.17.14.46.24a5.67,5.67,0,0,1,3.18,5.39c0,4.53-3,7.89-7.43,7.89S78.32,50,78.32,45.46c0-1.52,0-1.74.22-1.74l6.37-.25c.18,0,.25.11.25.29,0,2.05,0,2.26.57,2.26.28,0,.56-.24.56-.7,0-2.59,0-3.16-1.41-3.16s-1.74,0-1.74-.39Z"
          />
        );

      case 4:
        return (
          <path
            className={styles['cls-3']}
            d="M83.64,48.36a.17.17,0,0,0-.18-.17H77.09a.27.27,0,0,1-.25-.25V42.27a1.29,1.29,0,0,1,.11-.42l7.89-14.49a.53.53,0,0,1,.39-.28h5.24a.3.3,0,0,1,.29.28V41.49c0,.28.14.57.64.57s1,.07,1,.39V47.9c0,.25-.46.29-.85.29s-.81.21-.81.45V53c0,.14-.11.24-.29.24H83.89a.26.26,0,0,1-.25-.24Zm-1.59-6.48c-.07.18.07.18,1.38.18a.2.2,0,0,0,.21-.18V39.44c0-.14-.07-.21-.14-.21s-.14.07-.21.21Z"
          />
        );

      case 5:
        return (
          <path
            className={styles['cls-3']}
            d="M79.59,27.33a.29.29,0,0,1,.28-.25H93c.14,0,.22.07.22.25l-.68,7c0,.21-.14.25-.32.25l-8.14-.54c-.36,0-.46,1.46-.46,1.74,0,.11,0,.11.07.11a1.1,1.1,0,0,0,.25-.11,4.18,4.18,0,0,1,2.09-.46c4.49,0,7.47,3.79,7.47,8.85,0,6-3.26,9.1-8.08,9.1A7.6,7.6,0,0,1,78,45.53V43.72c0-.14.07-.25.18-.25l6.62-.24c.14,0,.21.07.21.24,0,1.67,0,2.06.57,2.06s.57-.25.57-2.48c0-1.45-.57-2.27-1.67-2.27A1.46,1.46,0,0,0,83.13,42a.36.36,0,0,1-.43.28l-4.14-.35c-.14,0-.29,0-.29-.32Z"
          />
        );

      case 6:
        return (
          <path
            className={styles['cls-3']}
            d="M78.32,36.14c0-5.45,3.3-9.06,7.41-9.06,4.49,0,7.68,3.08,7.68,8.21a.35.35,0,0,1-.28.36L87,35.9a.29.29,0,0,1-.25-.32c0-1.7,0-2.2-.56-2.2a.62.62,0,0,0-.57.64v6.09c0,.18.11.32.21.32s.22-.07.43-.29a3.31,3.31,0,0,1,2.62-1.09c2.62,0,4.67,2.37,4.67,6.62a7.35,7.35,0,0,1-7.4,7.61c-5.42,0-7.83-4.49-7.83-10.05Zm8.4,8.33c0-.5-.21-.71-.53-.71s-.57.21-.57.71v1.31c0,.32.21.42.53.42s.57,0,.57-.46Z"
          />
        );

      case 7:
        return (
          <path
            className={styles['cls-3']}
            d="M80.68,27.29c0-.14.11-.21.25-.21H92.09c.32,0,.53.1.53.25v6.76a1.31,1.31,0,0,1-.18.67c-1.88,3.3-3.33,9.35-3.33,18.24a.3.3,0,0,1-.28.28h-7.4c-.22,0-.36-.14-.36-.42,0-1.74,1.6-13.63,4.82-18.24a1.08,1.08,0,0,0,.18-.39c0-.1-.18-.1-.32-.1H80.9a.22.22,0,0,1-.22-.25Z"
          />
        );

      case 8:
        return (
          <path
            className={styles['cls-3']}
            d="M93.05,34a6,6,0,0,1-3,5.53c-.25.1-.39.21-.39.28s.18.18.46.28a5.9,5.9,0,0,1,3.23,5.53c0,5-3.3,7.68-7.48,7.68s-7.4-2.72-7.4-7.68c0-3.08,1.35-4.68,2.87-5.53.39-.21.5-.31.5-.35s-.11-.14-.46-.32c-1.63-.88-2.63-2.62-2.63-5.63,0-4.11,2.91-6.69,7.12-6.69S93.05,29.73,93.05,34Zm-6.55.5a.66.66,0,0,0-.61-.67.6.6,0,0,0-.56.67v2.19c0,.29.21.43.56.43s.61-.14.61-.43Zm0,8.39a.66.66,0,0,0-.61-.67.61.61,0,0,0-.56.67v2.38a.59.59,0,1,0,1.17,0Z"
          />
        );

      case 9:
        return (
          <path
            className={styles['cls-3']}
            d="M93.41,44.32c0,5.42-3.29,9-7.4,9-4.5,0-7.69-3-7.69-8.14a.29.29,0,0,1,.25-.32l6.13-.25a.31.31,0,0,1,.28.32l.11,1.74a.47.47,0,0,0,.46.46c.35,0,.57-.22.57-.68V40.5c0-.28-.11-.46-.22-.46s-.21.07-.42.28a3.37,3.37,0,0,1-2.62,1.1c-2.62,0-4.68-2.37-4.68-6.62a7.46,7.46,0,0,1,7.41-7.72c5.41,0,7.82,4.6,7.82,10.16ZM85,36c0,.46.21.71.57.71s.53-.25.53-.71V34.76a.55.55,0,0,0-1.1,0Z"
          />
        );

      case 10:
      default:
        return (
          <>
            <path
              className={styles['cls-3']}
              d="M75.81,35.05a.23.23,0,0,0-.21-.22c-.92,0-1,0-1-.24V27.36a.31.31,0,0,1,.32-.28h7.76a.3.3,0,0,1,.28.28V53a.27.27,0,0,1-.25.28H76.06a.26.26,0,0,1-.25-.24Z"
            />
            <path
              className={styles['cls-3']}
              d="M84.17,34.8c0-4.43,2.9-7.72,7.33-7.72s7.4,3.29,7.4,7.72V45.46c0,4.53-3,7.82-7.4,7.82S84.17,50,84.17,45.46ZM91,45.32c0,.46.21.7.57.7s.56-.24.56-.7V34.94c0-.46-.21-.71-.56-.71s-.57.25-.57.67Z"
            />
          </>
        );
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.3 82.64">
      <g id="Layer_2" data-name="Layer 2">
        <g id="stars">
          <path
            className={styles['cls-1']}
            d="M96,50.94s23-1.87,43.42,4.64l-7.52,7.28S114.36,52.36,96,50.94Z"
          />
          <path
            className={styles['cls-2']}
            d="M96,50.94s26.71-10.21,54.69-8.49l-1.33,13.48S132.56,45.82,96,50.94Z"
          />
          <path
            className={styles['cls-3']}
            d="M159.08,23.4s-38,1.65-63.13,27.54c0,0,30.11-14.1,66.23-11.51Z"
          />
          <polygon
            className={styles['cls-4']}
            points="166.45 30.29 161.91 33.74 162.18 39.43 157.49 36.18 152.16 38.19 153.81 32.74 150.25 28.29 155.94 28.16 159.08 23.4 160.95 28.78 166.45 30.29"
          />
          <polygon
            className={styles['cls-5']}
            points="172.93 47.9 171.76 51.1 173.73 53.89 170.32 53.76 168.28 56.51 167.35 53.22 164.11 52.13 166.94 50.22 166.98 46.81 169.67 48.91 172.93 47.9"
          />
          <polygon
            className={styles['cls-5']}
            points="12.02 13.33 9.96 14.69 9.92 17.16 7.99 15.63 5.63 16.35 6.49 14.04 5.07 12.02 7.54 12.12 9.02 10.15 9.69 12.53 12.02 13.33"
          />
          <polygon
            className={styles['cls-4']}
            points="158.23 63.02 157.58 64.8 158.67 66.34 156.78 66.27 155.65 67.79 155.13 65.97 153.34 65.36 154.91 64.31 154.93 62.41 156.42 63.58 158.23 63.02"
          />
          <polygon
            className={styles['cls-4']}
            points="4.89 39.02 4.24 40.8 5.34 42.34 3.44 42.27 2.31 43.79 1.79 41.97 0 41.37 1.57 40.31 1.59 38.42 3.08 39.59 4.89 39.02"
          />
          <polygon
            className={styles['cls-4']}
            points="16.14 69.87 12.86 71.2 12.1 74.65 9.82 71.94 6.3 72.29 8.17 69.28 6.76 66.04 10.19 66.89 12.84 64.54 13.09 68.07 16.14 69.87"
          />
          <polygon
            className={styles['cls-5']}
            points="154.87 49.67 150.45 51.34 149.31 55.93 146.36 52.23 141.64 52.57 144.25 48.62 142.47 44.24 147.03 45.49 150.64 42.45 150.86 47.17 154.87 49.67"
          />
          <polygon
            className={styles['cls-6']}
            points="142.21 61.39 138.7 62.42 137.56 65.89 135.5 62.87 131.85 62.86 134.08 59.97 132.97 56.49 136.41 57.72 139.37 55.58 139.26 59.23 142.21 61.39"
          />
          <polygon
            className={styles['cls-6']}
            points="176.1 24.01 175.13 26.1 176.3 28.08 174.01 27.8 172.49 29.53 172.05 27.27 169.93 26.36 171.95 25.23 172.16 22.94 173.85 24.51 176.1 24.01"
          />
          <polygon
            className={styles['cls-6']}
            points="16.51 55.98 14.72 57.43 14.89 59.72 12.96 58.47 10.83 59.34 11.43 57.12 9.94 55.36 12.24 55.24 13.45 53.28 14.27 55.44 16.51 55.98"
          />
          <path
            className={styles['cls-1']}
            d="M75.62,50.94s-23-1.87-43.41,4.64l7.51,7.28S57.22,52.36,75.62,50.94Z"
          />
          <path
            className={styles['cls-2']}
            d="M75.62,50.94S48.91,40.73,20.93,42.45l1.33,13.48S39,45.82,75.62,50.94Z"
          />
          <path
            className={styles['cls-3']}
            d="M12.5,23.4s38,1.65,63.12,27.54c0,0-30.11-14.1-66.22-11.51Z"
          />
          <polygon
            className={styles['cls-4']}
            points="5.12 30.29 9.66 33.74 9.4 39.43 14.08 36.18 19.41 38.19 17.77 32.74 21.33 28.29 15.63 28.16 12.5 23.4 10.62 28.78 5.12 30.29"
          />
          <polygon
            className={styles['cls-5']}
            points="16.7 49.67 21.13 51.34 22.26 55.93 25.21 52.23 29.93 52.57 27.33 48.62 29.1 44.24 24.55 45.49 20.93 42.45 20.71 47.17 16.7 49.67"
          />
          <polygon
            className={styles['cls-6']}
            points="29.36 61.39 32.87 62.42 34.01 65.89 36.07 62.87 39.72 62.86 37.49 59.97 38.61 56.49 35.17 57.72 32.21 55.58 32.31 59.23 29.36 61.39"
          />
        </g>
        <g id="ribbongold">
          <path
            className={styles['cls-7']}
            d="M83.92,45.88,131.27,0s7.1,8.84-1.46,16.77S83.92,45.88,83.92,45.88Z"
          />
          <path
            className={styles['cls-8']}
            d="M83.92,45.88,131.27,0s7.1,8.84-1.46,16.77S83.92,45.88,83.92,45.88Z"
          />
          <path
            className={styles['cls-3']}
            d="M131.27,0l-.83.81c1.32,3.22,1.91,8-2.7,12.93-8,8.49-43.82,32.14-43.82,32.14s37.33-21.19,45.89-29.11S131.27,0,131.27,0Z"
          />
          <path
            className={styles['cls-8']}
            d="M84.79,45.19l50.27-31.54s4.59,9.11-4.43,14.49S84.79,45.19,84.79,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M135.06,13.65l-.89.56c.57,3.09.18,7.45-4.79,10.88-8.64,6-44.59,20.1-44.59,20.1s36.82-11.67,45.84-17S135.06,13.65,135.06,13.65Z"
          />
          <path
            className={styles['cls-8']}
            d="M84.79,45.19l49.53-18.13s2.31,8.77-6.52,11.78S84.79,45.19,84.79,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M134.32,27.06l-.87.32c-.08,2.79-1.22,6.51-6.18,8.58-8.61,3.59-42.48,9.23-42.48,9.23s34.17-3.34,43-6.35S134.32,27.06,134.32,27.06Z"
          />
          <path
            className={styles['cls-8']}
            d="M84.79,45.5,130.48,39s.38,7.93-7.72,8.89S84.79,45.5,84.79,45.5Z"
          />
          <path
            className={styles['cls-3']}
            d="M130.48,39l-.8.11c-.58,2.38-2.23,5.35-6.85,6.22-8,1.51-38,.17-38,.17s29.86,3.36,38,2.39S130.48,39,130.48,39Z"
          />
          <path
            className={styles['cls-8']}
            d="M84.79,45.19l39.47,2.69s-1.09,6.71-8.07,6.08S84.79,45.19,84.79,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M124.26,47.88l-.7-.05a6.84,6.84,0,0,1-6.85,4c-7-.16-31.92-6.63-31.92-6.63s24.43,8.13,31.4,8.77S124.26,47.88,124.26,47.88Z"
          />
          <path
            className={styles['cls-8']}
            d="M84.35,45.19l31.71,9s-2.06,5.28-7.63,3.56S84.35,45.19,84.35,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M116.06,54.22l-.56-.16a5.74,5.74,0,0,1-6.28,2.07c-5.67-1.35-24.87-10.94-24.87-10.94s18.51,10.86,24.08,12.59S116.06,54.22,116.06,54.22Z"
          />
          <path
            className={styles['cls-7']}
            d="M88.55,45.88,41.2,0s-7.1,8.84,1.46,16.77S88.55,45.88,88.55,45.88Z"
          />
          <path
            className={styles['cls-8']}
            d="M88.55,45.88,41.2,0s-7.1,8.84,1.46,16.77S88.55,45.88,88.55,45.88Z"
          />
          <path
            className={styles['cls-3']}
            d="M41.2,0,42,.81c-1.32,3.22-1.91,8,2.7,12.93,8,8.49,43.82,32.14,43.82,32.14S51.22,24.69,42.66,16.77,41.2,0,41.2,0Z"
          />
          <path
            className={styles['cls-8']}
            d="M87.68,45.19,37.41,13.65s-4.59,9.11,4.43,14.49S87.68,45.19,87.68,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M37.41,13.65l.89.56c-.57,3.09-.18,7.45,4.79,10.88,8.63,6,44.59,20.1,44.59,20.1s-36.82-11.67-45.84-17S37.41,13.65,37.41,13.65Z"
          />
          <path
            className={styles['cls-8']}
            d="M87.68,45.19,38.15,27.06s-2.31,8.77,6.52,11.78S87.68,45.19,87.68,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M38.15,27.06l.87.32c.08,2.79,1.22,6.51,6.18,8.58,8.61,3.59,42.48,9.23,42.48,9.23s-34.17-3.34-43-6.35S38.15,27.06,38.15,27.06Z"
          />
          <path
            className={styles['cls-8']}
            d="M87.68,45.5,42,39s-.39,7.93,7.72,8.89S87.68,45.5,87.68,45.5Z"
          />
          <path
            className={styles['cls-3']}
            d="M42,39l.8.11c.58,2.38,2.23,5.35,6.85,6.22,8,1.51,38,.17,38,.17s-29.86,3.36-38,2.39S42,39,42,39Z"
          />
          <path
            className={styles['cls-8']}
            d="M87.68,45.19,48.21,47.88S49.3,54.59,56.27,54,87.68,45.19,87.68,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M48.21,47.88l.7-.05a6.84,6.84,0,0,0,6.85,4c7-.16,31.92-6.63,31.92-6.63S63.25,53.32,56.27,54,48.21,47.88,48.21,47.88Z"
          />
          <path
            className={styles['cls-8']}
            d="M88.12,45.19l-31.71,9S58.47,59.5,64,57.78,88.12,45.19,88.12,45.19Z"
          />
          <path
            className={styles['cls-3']}
            d="M56.41,54.22l.56-.16a5.74,5.74,0,0,0,6.28,2.07c5.67-1.35,24.87-10.94,24.87-10.94S69.61,56.05,64,57.78,56.41,54.22,56.41,54.22Z"
          />
          <circle className={styles['cls-9']} cx="86.04" cy="42.97" r="24.75" />
          <circle className={styles['cls-10']} cx="86.04" cy="42.97" r="21.39" />
          <path
            className={styles['cls-11']}
            d="M86,21.58a21.39,21.39,0,0,0-13.48,38L101.8,28.51A21.32,21.32,0,0,0,86,21.58Z"
          />
          <path
            className={styles['cls-12']}
            d="M65.28,75.88,60.5,63.39A86.59,86.59,0,0,0,41.43,71l.1.17,7,4-.63,7.43A73,73,0,0,1,65.28,75.88Z"
          />
          <path
            className={styles['cls-13']}
            d="M54.53,75.86l10.75,0-1.41-3.66S57.88,74.31,54.53,75.86Z"
          />
          <path
            className={styles['cls-12']}
            d="M106.32,75.88l4.78-12.49A86.71,86.71,0,0,1,130.16,71l-.09.17-7,4,.64,7.43A73.15,73.15,0,0,0,106.32,75.88Z"
          />
          <path
            className={styles['cls-13']}
            d="M117.06,75.86l-10.74,0,1.4-3.66S113.71,74.31,117.06,75.86Z"
          />
          <path
            className={styles['cls-2']}
            d="M117.05,75.86a73.39,73.39,0,0,0-62.52,0l-5.65-12a86.71,86.71,0,0,1,73.83,0Z"
          />
        </g>
        <g id="digit">{getDigit()}</g>
      </g>
    </svg>
  );
};

export default BonusPosition;
