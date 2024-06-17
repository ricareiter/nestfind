import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PickedProperties from "@/components/PickedProperties";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <PickedProperties />
      <Stats />
    </div>
  );
}
