import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './slider-container.module.scss';
import afterImg from '../../assets/img/after-desktop.png';
import beforeImg from '../../assets/img/top-desktop.png';

const SliderContainer = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className={clsx(styles.sliderContainer)}>
    <div>
      <img src={afterImg} alt="cat" style={{ objectFit: 'contain' }}/>
    </div>
    <div
      style={{
        left: ' -55px',
        top: '20px',
      }}
    >
      <img
        src={beforeImg}
        alt="cat"
        style={{
          objectPosition: 'left'
        }}
      />
    </div>
  </div>
));

SliderContainer.displayName = 'SliderContainer';
export default SliderContainer;
