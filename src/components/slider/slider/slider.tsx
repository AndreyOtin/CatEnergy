import React, { forwardRef } from 'react';
import styles from './slider.module.scss';

const Slider = forwardRef<HTMLDivElement>((_, ref) => (
  <div className={styles.slider}>
    <div ref={ref} className={styles.pin}></div>
  </div>
));

Slider.displayName = 'Slider';
export default Slider;
