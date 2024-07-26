import { BrowserRouter } from "react-router-dom";
import { About, Experience, Works, Navbar, Hero, Tech, Feedbacks, Contact, StarsCanvas } from "./components";
import Spline from '@splinetool/react-spline';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        {/* Flex container for About, Works, and Experience */}
        <div className="flex">
          <div className="flex-auto w-1/3 p-4 overflow-y-auto">
            <About />
          </div>
          <div className="flex-auto w-1/3 p-4 overflow-y-auto">
            <Works />
          </div>
          {/* <div className="flex-auto w-1/3 p-4 overflow-y-auto">
            <Experience />
          </div> */}
        </div>

        {/* <Tech /> */}
        <Feedbacks />
        {/* <Spline scene="https://prod.spline.design/Dx789ylokVwpwSgE/scene.splinecode" />  */}
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
