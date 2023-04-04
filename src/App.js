import { SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="POKA"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.homeHero}
        banner="banner"
        showBtn
        newsletter
      />
      <SectionWrapper
        title="Understanding Your Menstrual Cycle"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.homeCards}
        reverse
      />
      {/* <Features /> */}
      <SectionWrapper
        title="Preconception and Fertility"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.feature}
        banner="banner03"
      />
      <SectionWrapper
        title="Pregnancy and Childbirth"
        description="Women's reproductive app designed with African women in mind by African women. Join us on this journey to becoming your personal reproductive companion"
        showBtn
        mockupImg={assets.mockup}
        reverse
      />
      {/* <Download /> */}
    </>
  );
};

export default App;
