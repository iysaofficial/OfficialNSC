import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Content
import Hero from "../components/hero";
import About from "../components/compabout";
import Support from "../components/support";
import Category from "../components/category";
import Compcontact from "../components/compcontact";
import BackToTop from "../components/back-to-top";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Support />
      <About />
      <Category />
      <Compcontact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
