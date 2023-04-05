import { NavigationBar, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <NavigationBar />
      <SectionWrapper
        title="POKA"
        description="Empowering women one cycle at a time"
        mockupImg={assets.homeHero}
        banner="banner"
        showBtn
        newsletter
        navBar
      />
        <SectionWrapper
        title="About"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.feature}
        reverse
        id="about"
      />
      <SectionWrapper
        title="Features"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.homeCards}
        banner="banner03"
        id="features"
      />
      <SectionWrapper
        title="Blog"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.feature}
        reverse
        id="blog"
      />
      <SectionWrapper
        title="App"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        showBtn
        mockupImg={assets.mockup}
        banner="banner05"
        id="app"
      />
    </>
  );
};

export default App;
