// components/ImageMagnifier.tsx
import React, { useState, useRef, useCallback } from 'react';

interface ImageMagnifierProps {
  src: string;
  width?: number;
  height?: number;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  width = 300,
  height = 300,
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 2,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = useCallback(() => {
    setShowMagnifier(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowMagnifier(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const { left, top } = imgRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
      const x = e.pageX - left - window.scrollX;
      const y = e.pageY - top - window.scrollY;
      setMagnifierPosition({ x, y });
    },
    []
  );

  return (
    <div
      className="relative"
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt="Product Image"
        className="w-full h-full object-cover"
      />

      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-gray-200 bg-white rounded-full"
          style={{
            top: `${magnifierPosition.y - magnifierHeight / 2}px`,
            left: `${magnifierPosition.x - magnifierWidth / 2}px`,
            width: `${magnifierWidth}px`,
            height: `${magnifierHeight}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
            backgroundPositionX: `${-magnifierPosition.x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-magnifierPosition.y * zoomLevel + magnifierHeight / 2}px`,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
