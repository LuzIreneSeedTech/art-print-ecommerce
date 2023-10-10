import Banner from "../components/Banner";
import Button from "../components/Button";

function HomePage() {
  const bannerContent = {
    content: (
      <div>
        your source for
        <br /> wall-worthy art
      </div>
    ),
    buttonLabel: "shop now",
  };

  return (
    <>
      <Banner landingBanner>
        {bannerContent.content}
        <Button button1 className="landing-button">
          {bannerContent.buttonLabel}
        </Button>
      </Banner>
    </>
  );
}

export default HomePage;
