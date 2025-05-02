import About from "@/components/About";
import Home from "@/components/Home";
import Lookbook from "@/components/Lookbook";
import Matte from "@/components/Matte";
import Products from "@/components/Products";

export default function Page() {
  return (
    <div className="w-screen h-screen font-[family-name:var(--font-geist-sans)]">
      <Home />
      <About />
      <Products />
      <Matte />
    </div>
  );
}
