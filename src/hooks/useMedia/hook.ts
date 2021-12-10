import { useEffect } from 'react';
import { Callback } from './types';


const useMedia = (media: string, callback: Callback): void => {
  useEffect(() => {
    const mediaQuery = window.matchMedia(media);
    const mediaHandler = (event: MediaQueryListEvent): void => callback(event.matches);
    mediaQuery.addListener(mediaHandler);
    callback(mediaQuery.matches);

    return () => mediaQuery.removeListener(mediaHandler);
  }, [callback, media]);
};


export default useMedia;
