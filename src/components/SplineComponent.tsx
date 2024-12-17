'use client';

import Spline from '@splinetool/react-spline';

interface SplineComponentProps {
  onLoad?: () => void;
  scene: string;
}

export default function SplineComponent({ onLoad, scene }: SplineComponentProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline
        onLoad={onLoad}
        scene={scene}
      />
    </div>
  );
}
