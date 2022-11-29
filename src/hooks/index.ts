import { bindActionCreators } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import allActions from '../redux/actions.redux';
import type { AppState } from '../redux/store.redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

function getWindowDimensions() {
  let height = 1920;
  let width = 1080;

  if (typeof window !== 'undefined') {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowDimensions;
}
