import className from "classnames";

function Link({ children, orientation, to, navigate }) {
  const classes = className("link", {
    "logo-navbar": orientation === "center",
    "nav-link-item": orientation === "left" && orientation === "right",
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
