import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#fff", "#fff", "#535353", "#fff", "#fff"],
  animationSpeed = 8,
  fontFamily = "Sora",
  style = {},
  ...props
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    // fontFamily: fontFamily,
    fontSize: "inherit",
    display: "inline-block",
    flexWrap: "wrap",
  };

  return (
    <span
      className={`text-content  will-change-[transform,filter,opacity] ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
