import { useEffect } from 'react';

export const useCloseOnOutsideClick = (ref: any, close: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        event?.target?.parentNode?.id === 'popup-controller' ||
        event?.target?.parentNode?.parentNode?.id === 'popup-controller'
      )
        return;
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close, ref]);
};
