"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Github, Home, Twitter } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const socials = [
  {
    name: "google",
    path: "",
    icon: Home,
    style: {
      transform: "rotateY(0deg) translateZ(83px)", // Fixed distance to make perfect cube
    },
  },
  {
    name: "github",
    path: "",
    icon: Github,
    style: {
      transform: "rotateY(90deg) translateZ(83px)", // Set to exactly 90deg to remove gaps
    },
  },
  {
    name: "facebook",
    path: "",
    icon: Facebook,
    style: {
      transform: "rotateY(180deg) translateZ(83px)",
    },
  },
  {
    name: "twitter",
    path: "",
    icon: Twitter,
    style: { transform: "rotateY(-90deg) translateZ(83px)" },
  },
];

export default function Social3dProvider() {
  const [isDragging, setIsDragging] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);

  const targetRotation = useRef({ x: -10, y: -25 });
  const currentRot = useRef({ x: -10, y: -25 });

  // Track zoom level (scales from 0.5 to 2.0)
  const targetScale = useRef(1);
  const currentScale = useRef(1);

  const startPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);

  const updateRotation = () => {
    // Lerp (smooth interpolation) for buttery smooth momentum
    const ease = 0.1;
    currentRot.current.x +=
      (targetRotation.current.x - currentRot.current.x) * ease;
    currentRot.current.y +=
      (targetRotation.current.y - currentRot.current.y) * ease;

    // Smooth interpolate scale
    currentScale.current += (targetScale.current - currentScale.current) * ease;

    if (cubeRef.current) {
      cubeRef.current.style.transform = `scale(${currentScale.current}) rotateX(${currentRot.current.x}deg) rotateY(${currentRot.current.y}deg)`;
    }

    requestRef.current = requestAnimationFrame(updateRotation);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;

    targetRotation.current.x -= deltaY * 0.5;
    targetRotation.current.y += deltaX * 0.5;

    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleWheel = (e: React.WheelEvent) => {
    const zoomSensitivity = 0.003;
    const newScale = targetScale.current - e.deltaY * zoomSensitivity;

    // Clamp the scale between 0.5x and 2.0x
    targetScale.current = Math.min(Math.max(newScale, 0.8), 1.8);
  };

  return (
    <div
      className="bg-muted/50 w-full h-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
      style={{ perspective: "1000px" }}
      onWheel={handleWheel}
    >
      {/* Ambient Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div
        ref={cubeRef}
        className={`relative w-48 h-48 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: `scale(1) rotateX(-10deg) rotateY(-25deg)`, // Initial state
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {socials.map(({ icon: Icon, name, path, style }, i) => (
          <div
            key={i}
            className="absolute w-full h-full flex flex-col items-center justify-center bg-orange-700 backdrop-blur-xl"
            style={style}
          >
            <Button
              // variant="ghost"
              size="icon"
              type="button"
              className="size-16 rounded-2xl"
            >
              <Icon className="text-black size-8" />
            </Button>
            {/* <span className="text-sm font-semibold mt-3 pointer-events-none capitalize">
              {name}
            </span> */}
          </div>
        ))}

        {/* Top & Bottom */}
        <div
          className="absolute w-full h-full bg-orange-700 backdrop-blur-3xl pointer-events-none"
          style={{ transform: "rotateX(90deg) translateZ(83px)" }}
        />
        <div
          className="absolute w-full h-full bg-orange-700 backdrop-blur-3xl   shadow-[0_50px_100px_rgba(0,0,0,0.3)] pointer-events-none"
          style={{ transform: "rotateX(-90deg) translateZ(83px)" }}
        />
      </div>

      <p className="absolute bottom-12 text-sm font-medium text-muted-foreground z-10 pointer-events-none select-none">
        Drag to rotate • Scroll to zoom
      </p>
    </div>
  );
}
