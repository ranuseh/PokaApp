import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Introducing POKA"
        description="Poka is a women's reproductive application designed with African women in mind by African women."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Join"
        description="Join us on this journey to becoming your personal reproductive companion"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
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
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">JavaScript Mastery</span>
        </p>
      </div>
    </>
  );
};

export default App;
