"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  title: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeUrl,
  afterUrl,
  title,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: any
  ) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = ((info.point.x - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h3 className="text-2xl md:text-3xl font-heading text-rc-blue-dark text-center mb-6">
        {title}
      </h3>
      <div
        ref={containerRef}
        className="relative w-full aspect-[3/2] rounded-lg overflow-hidden select-none cursor-e-resize shadow-2xl"
      >
        {/* After Image (Clipped) */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={afterUrl}
            alt={`Después de ${title}`}
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
            priority
          />
          <div className="absolute top-4 left-4 bg-rc-yellow text-rc-blue-dark font-bold py-1 px-3 rounded-md text-sm md:text-base">
            Después
          </div>
        </div>

        {/* Before Image (Visible underneath) */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={beforeUrl}
            alt={`Antes de ${title}`}
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
          />
          <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 text-white font-bold py-1 px-3 rounded-md text-sm md:text-base">
            Antes
          </div>
        </div>

        {/* Draggable Handle */}
        <motion.div
          className="absolute top-0 h-full w-1 bg-rc-yellow cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-rc-yellow rounded-full flex items-center justify-center text-rc-blue-dark shadow-lg">
            <ChevronsLeftRight size={24} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
