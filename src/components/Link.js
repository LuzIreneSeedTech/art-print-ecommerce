import className from "classnames";

function Link({ children, orientation, to, navigate }) {
  const classes = className("mx-4 tracking-wide", {
    "text-xl font-semibold uppercase mx-96 px-16": orientation === "center",
    "text-base": orientation === "left" && orientation === "right",
  });

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
