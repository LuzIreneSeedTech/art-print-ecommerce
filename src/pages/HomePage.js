import Banner from "../components/Banner";

function HomePage() {
  const bannerContent = {
    content: (
      <div>
        your source for
        <br /> wall-worthy art
      </div>
    ),
  };

  return (
    <>
      <Banner landingBanner image={bannerContent.image}>
        {bannerContent.content}
      </Banner>
    </>
  );
}

export default HomePage;
