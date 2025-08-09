import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, PanInfo } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = ((info.point.x - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-lg overflow-hidden cursor-e-resize select-none"
    >
      {/* After Image (Top Layer) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={afterImage}
          alt="Después de la renovación"
          layout="fill"
          objectFit="cover"
        />
        <span className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-semibold">
          Después
        </span>
      </div>

      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt="Antes de la renovación"
          layout="fill"
          objectFit="cover"
        />
        <span className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-semibold">
          Antes
        </span>
      </div>

      {/* Slider Handle */}
      <motion.div
        drag="x"
        onDrag={handleDrag}
        dragConstraints={containerRef}
        dragElastic={0.1}
        className="absolute top-0 bottom-0 w-1 h-full bg-brand-yellow z-20 cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg">
          <ChevronsLeftRight className="text-brand-dark" />
        </div>
      </motion.div>
    </div>
  );
};

export default BeforeAfterSlider;
