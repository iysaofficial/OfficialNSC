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
      <div id="home">
        <Hero />
        <Support />
        <About />
        <Category />
        <Compcontact />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
