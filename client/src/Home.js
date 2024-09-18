import './App.css';
import Black from './componentsHome/Black';
import Red from './componentsHome/Red';
import Blue from './componentsHome/Blue';
import Yellow from './componentsHome/Yellow';
import Violet from './componentsHome/Violet';
import Doublepage from './componentsHome/Doublepage';
import Experience from './componentsHome/Experience';
import Finalpage from './componentsHome/Finalpage'; 
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="onScroll">
        <Black/>
        <Red/>
        <Blue />
        <Yellow/>
        <Violet/>
        <Doublepage/>
        <Experience/>
        <Finalpage/>
      </section>
    </>
  );
}

export default App;
