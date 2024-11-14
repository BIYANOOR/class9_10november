
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar"
import Homepage from "./Components/Home"

function MyApp({ Component, pageProps }) {
  return (
      <>
          <div className="background-image"></div>
          <Component {...pageProps} />
      </>
  );
}


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

