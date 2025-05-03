import About from "@/components/About";
import Dashe from "@/components/Dashe";
import Detail from "@/components/Detail";
import FeaturedProducts from "@/components/FeaturedProducts";
import Home from "@/components/Home";
import Matte from "@/components/Matte";
import Products from "@/components/Products";

export default function Page() {
  return (
    <div className="w-screen h-screen font-[family-name:var(--font-geist-sans)]">
      <Home />
      <About />
      <Products />
      <Matte />
      <FeaturedProducts />
      <Detail />
      <Dashe />
    </div>
  );
}
