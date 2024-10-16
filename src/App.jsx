import About from "./components/About";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased 
    selection:bg-cyan-50 selection:text-cyan-600">
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        </div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
      </div>
    </div>
  );
};

export default App;

