
import { log } from 'console';
import { RefObject } from 'react';


function initComparisonSlider(ref: RefObject<HTMLElement>, sliderRef: RefObject<HTMLElement>) {
  if (!ref.current || !sliderRef.current) {
    return;
  }

  const overlayImage = ref.current.lastElementChild?.firstElementChild as HTMLImageElement;
  const pin = sliderRef.current;
  const pinParent = pin.parentElement as HTMLElement;
  const parentLeft = pinParent.getBoundingClientRect();
  const imgWidth = overlayImage.getBoundingClientRect();

  let shift: number;
  console.log(overlayImage);
  compareImages(overlayImage);

  function compareImages(img: HTMLImageElement) {
    let clicked: number;
    /* Set the width of the img element to 50%: */
    img.style.width = `${imgWidth.width / 2}px`;

    pin.style.left = '50%';
    pin.style.transform = 'translate(-50%, -50%)';

    pin.addEventListener('mousedown', slideReady);
    window.addEventListener('mouseup', slideFinish);

    pin.addEventListener('touchstart', slideReady);
    window.addEventListener('touchend', slideFinish);

    function slideReady(e: MouseEvent | TouchEvent) {
      e.preventDefault();
      const pinLeftRect = pin.getBoundingClientRect();

      if (e instanceof TouchEvent) {
        shift = e.changedTouches[0].pageX - pinLeftRect.left - pinLeftRect.width / 2;
      } else {
        shift = e.pageX - pinLeftRect.left - pinLeftRect.width / 2;
      }
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener('mousemove', slideMove);
      window.addEventListener('touchmove', slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }

    function slideMove(e: MouseEvent | TouchEvent) {
      let pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked === 0) {
        return false;
      }
      /* Get the cursor's x position: */
      pos = getCursorPos(e);
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) {
        pos = 0;
      }
      if (pos > pinParent.offsetWidth) {
        pos = pinParent.offsetWidth;
      }

      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }

    function getCursorPos(e: MouseEvent | TouchEvent) {

      let position: number;

      if (e instanceof TouchEvent) {
        position = e.changedTouches[0].pageX - parentLeft.left;
      } else {
        position = e.pageX - parentLeft.left - shift;
      }

      position = position - window.pageXOffset;
      return position;
    }
    function slide(position: number) {
      const value = position / pinParent.offsetWidth;
      const pinLeft = value * 100;
      const widthValue = imgWidth.width * value;

      if (pinLeft < 90) {
        img.style.width = `${widthValue}px`;
      }

      pin.style.left = `${pinLeft}%`;
    }
  }
}

export default initComparisonSlider;
