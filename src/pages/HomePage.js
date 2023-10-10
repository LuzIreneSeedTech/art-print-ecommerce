import Banner from "../components/Banner";
import Button from "../components/Button";
import SubBanner from "../components/SubBanner";

function HomePage() {
  const bannerContent = {
    content: (
      <div>
        your source for
        <br /> wall-worthy art
      </div>
    ),
    buttonLabel: "shop now",
    SubBannerContent: [
      {
        content: "Luxurious matte paper for a smooth, touchable finish.",
      },
      {
        content: "Durable wooden framed posters, ready to hang effortlessly.",
      },
      {
        content: "Shatter-resistant plexiglass safeguards your poster",
      },
      {
        content:
          "Each shipment features secure packaging for a flawless arrival.",
      },
    ],
  };

  return (
    <>
      <Banner landingBanner>
        {bannerContent.content}

        <Button button1 className="landing-button">
          {bannerContent.buttonLabel}
        </Button>
      </Banner>

      <SubBanner data={bannerContent.SubBannerContent}></SubBanner>
    </>
  );
}

export default HomePage;
