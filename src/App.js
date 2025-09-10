import TittleName from './TitleName';
import Headers from './Header';
import ProjectSection from './ProjectSection';
import About from './About';
import Contact from './Contact';
import LightRays from './Components/LightRays/LightRays';

function App() {
  return (
    <>
      <Headers />
      <div style={{ position: "relative" }}>
                <TittleName style={{ position: "relative", zIndex: 0 }} />
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#ffffff"
                  raysSpeed={2}
                  lightSpread={3}
                  rayLength={1.2}
                  followMouse={true}
                  mouseInfluence={0.3}
                  noiseAmount={0.1}
                  distortion={0.05}
                  className="custom-rays"

                />
              </div>
      <ProjectSection />
      <About/>
      <Contact />
    </>
  )
}

export default App;

