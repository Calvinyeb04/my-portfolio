'use client';

import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineComponentProps {
  onLoad?: () => void;
  scene: string;
}

export default function SplineComponent({ onLoad, scene }: SplineComponentProps) {
  useEffect(() => {
    // Fallback in case Spline fails to load
    const timeout = setTimeout(() => {
      if (onLoad) onLoad();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onLoad]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline
        onLoad={onLoad}
        scene={scene}
        onError={(error) => {
          console.error('Spline loading error:', error);
          if (onLoad) onLoad(); // Trigger onLoad even on error to prevent infinite loading
        }}
      />
    </div>
  );
}
