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
  compareImages(overlayImage);

  function compareImages(img: HTMLImageElement) {
    let clicked: number;

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
        shift = e.pageX - pinLeftRect.left - (pinLeftRect.width / 2);
      }

      clicked = 1;

      window.addEventListener('mousemove', slideMove);
      window.addEventListener('touchmove', slideMove);
    }
    function slideFinish() {
      clicked = 0;
    }

    function slideMove(e: MouseEvent | TouchEvent) {
      let pos;

      if (clicked === 0) {
        return false;
      }

      pos = getCursorPos(e);

      if (pos < 0) {
        pos = 0;
      }

      if (pos > pinParent.offsetWidth) {
        pos = pinParent.offsetWidth;
      }


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
