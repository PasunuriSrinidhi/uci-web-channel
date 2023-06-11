import React, { useState, useEffect, useRef } from 'react';
import { reflow } from '../utils';

interface UseMountOptions {
  active?: boolean;
  ref: React.RefObject<any>;
  delay?: number;
}

function useMount({ active = false, ref, delay = 300 }: UseMountOptions) {
  const [isShow, setIsShow] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {

  const clear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  if (active) {
      clear();
      setIsShow(true);
    } else {
      clear();
      setIsShow(false);

      timeoutRef.current = window.setTimeout(() => {
        setIsShow(true);
      }, delay);
    }

    return clear;
  }, [active, delay]);

  useEffect(() => {
    if (ref.current) {
      reflow(ref.current);
    }
  }, [ref]);

  return {
    didMount: active,
    isShow,
  };
}

export default useMount;
