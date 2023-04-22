import { RefObject, useRef } from 'react';


function useCSSTransition(ref: RefObject<HTMLElement>, seconds: number) {
  const id = useRef<NodeJS.Timeout>();

  const handleTransition = () => {
    const timerMcs = seconds * 1000;

    clearTimeout(id.current);

    if (!ref.current) {
      return;
    }

    ref.current.style.transition = `all ${seconds}s ease`;


    id.current = setTimeout(() => {
      if (!ref.current) {
        return;
      }

      ref.current.style.transition = '';
    }, timerMcs);
  };

  return handleTransition;
}

export default useCSSTransition;
