import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PickedProperties from "@/components/PickedProperties";
import SignupModal from "@/components/SignupModal";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <PickedProperties />
      <Stats />
      <Newsletter />
      <Footer />
      <SignupModal />
    </div>
  );
}
