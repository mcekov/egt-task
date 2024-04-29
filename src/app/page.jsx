import Footer from "@/components/Footer";
import News from "@/components/News";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Socials />
      <Slider />
      <News />
      <Products />
      <Footer />
    </main>
  );
}
