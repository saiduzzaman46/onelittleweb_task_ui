const HeroBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "88px 84px",
      }}
    />
  );
};

export default HeroBackground;
