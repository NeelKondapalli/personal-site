import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Experience, Hero, Portfolio } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>

        <div className='wrapper' ref={wrapperRef}>
    
          <Hero scrollContainer={wrapperRef} />
    
          <Portfolio />
          <Experience />
        
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;