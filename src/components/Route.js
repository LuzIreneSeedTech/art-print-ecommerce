function Route({ children, ...props }) {
  if (props.path === props.currentPath) {
    return children;
  } else {
    return null;
  }
}

export default Route;
