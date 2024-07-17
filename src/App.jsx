import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
    
        {/* <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto border border-gray-300 p-5">
        <About />
      </div>
      <div className="flex-1 overflow-y-auto border border-gray-300 p-5">
        <Work />
      </div>
      <div className="flex-1 overflow-y-auto border border-gray-300 p-5">
        <Experience />
      </div>
    </div>
  );
};

export default App; */