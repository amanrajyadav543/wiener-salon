import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FacebookFeed from "./components/FacebookFeed";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Book from "./components/Book";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FacebookFeed />
      <Reviews />
      <Visit />
      <Book />
      <Footer />
    </div>
  );
}
