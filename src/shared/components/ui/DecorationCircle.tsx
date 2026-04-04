import React from "react";

interface DecorationCircleProps {
  w?: string; 
  h?: string; 
  color?: string;
  x?: string; 
  y?: string; 
  className?: string; 
}

const DecorationCircle = ({
  w = "12px",
  h = "12px",
  color = "#5EDF9B",
  x = "left-0",
  y = "top-0",
  className = "",
}: DecorationCircleProps) => {
  return (
    <div
      className={`absolute  rounded-full pointer-events-none z-0 shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)] ${x} ${y} ${className} `}
      style={{
        width: w,
        height: h,
        backgroundColor: color,
      }}
    />
  );
};

export default DecorationCircle;
