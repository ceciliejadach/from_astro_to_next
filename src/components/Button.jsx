const Button = ({ variant, text, icon }) => {
  const variants = {
    primary: "bg-[#4f46e5] text-white hover:bg-indigo-500",
    secondary: "text-gray-900 font-semibold py-2",
  };

  const classes = `px-3 text-sm rounded-md inline-flex items-center gap-1 ${variants[variant] || ""}`;
  return <button className={classes}>{text}</button>;
};

export default Button;
