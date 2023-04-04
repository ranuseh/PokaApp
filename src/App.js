import {
  SectionWrapper,
} from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>

      <SectionWrapper
        title="POKA"
        description="Women's reproductive app designed with African women in mind by African women."
        mockupImg={assets.homeHero}
        banner="banner"
        showBtn
        newsletter
      />
      <SectionWrapper
        title="Learn More"
        description="Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.homeCards}
        reverse
      />
      {/* <Features />
      <SectionWrapper
        title="Deployment"
        description="Start Deplpoying now"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative ways to showcase the store"
        description="POKA womens stuff"
        showBtn
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download /> */}
    </>
  );
};

export default App;
