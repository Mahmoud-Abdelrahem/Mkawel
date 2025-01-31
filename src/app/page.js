import FourthSection from "./components/FourthSection/FourthSection";
import LandingPage from "./components/LandingPage/LandingPage";
import LatestNews from "./components/LastestNews/LatesetNews";
import Navbar from "./components/navbar/Navbar";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import WhoAreWeSection from "./components/WhoAreWe/WhoAreWe";

export default function Home() {
  return (
    <>
      <LandingPage />
      <ThirdSection/>
      <SecondSection/>
      <WhoAreWeSection/>
      <FourthSection/>
      <LatestNews/>
    </>
  );
}
