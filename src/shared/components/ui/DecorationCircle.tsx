import React from "react";

interface DecorationCircleProps {
  w?: string; // width like "10px"
  h?: string; // height like "10px"
  color?: string; // bg color like "#5EDF9B"
  x?: string; // absolute left/right like "left-[10%]"
  y?: string; // absolute top/bottom like "top-[20%]"
  className?: string; // for extra custom classes
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
