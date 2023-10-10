import className from "classnames";

function Button({ children, button1, button2, button3, ...rest }) {
  const classes = className(rest.className, {
    "button-var-1": button1,
    "button-var-2": button2,
    "button-var-3": button3,
  });

  return <button className={classes}>{children}</button>;
}

export default Button;
