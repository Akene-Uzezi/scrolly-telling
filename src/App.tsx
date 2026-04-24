import "./App.css";
import { Canvas } from "@react-three/fiber";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { Scene } from "./components/3d/Scene";
import { Section } from "./components/layout/Section";
import { Loader } from "./components/ui/Loader";

const App = () => {
  return (
    <SmoothScroll>
      <Loader />
      <main className="relative bg-black">
        {/*The 3D background*/}
        <div className="fixed inset-0 w-full h-screen">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Scene />
          </Canvas>
        </div>
        {/* Scrollable Content */}
        <div className="relative z-10">
          <Section
            title="Innovation"
            content="We start with the smallest genetic details."
          />
          <Section
            title="Structure"
            content="Our DNA mapping leads to superior crop yield."
          />
          <Section
            title="Future"
            content="Sustainability is built into every seed."
          />
          <Section
            title="Global"
            content="Providing for a world that never stops growing."
          />

          <div className="h-[20vh]" />
        </div>
      </main>
    </SmoothScroll>
  );
};

export default App;
