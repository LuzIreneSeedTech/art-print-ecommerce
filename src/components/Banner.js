import className from "classnames";

function Banner({ children, landingBanner, shopBanner, latestArrivalBanner }) {
  const classes = className("banner-component", {
    "landing-background": landingBanner,
  });

  return <div className={classes}>{children}</div>;
}

export default Banner;
