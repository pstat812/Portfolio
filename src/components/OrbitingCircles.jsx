import React from "react";
import { twMerge } from "tailwind-merge";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full
               ${reverse ? "[animation-direction:reverse]" : ""}`,
              className,
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
