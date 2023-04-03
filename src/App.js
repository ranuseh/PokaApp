import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFT's Start Selling and Growing"
        description="Buy, sotre, collect NFTS, exchange and earn crypto. Joing 25+ Million people using POKA"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
};

export default App;
