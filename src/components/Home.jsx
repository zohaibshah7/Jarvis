import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Blog />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
