import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Home from './pages/home';
import SceneEnvironment from './pages/SceneEnvironment';
import About from './pages/About';
import Header from './components/Header';
import ProjectIntro from './pages/ProjectIntro';
import Project from './pages/Project';
import projectList from './data/projectList';
import PageDivider from './components/PageDivider';
import Loader from './pages/Loader';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    }, 8000)
  }, [])

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <div className='w-screen h-screen fixed top-0 left-0'>
        <Canvas shadows flat linear>
        <Suspense fallback={null}>
          <SceneEnvironment />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute top-0 left-0'>
        <Home />
        <PageDivider />
        <About />
        <PageDivider />
        <ProjectIntro />
        <PageDivider />
        { projectList.map((data, i) => (
          <>
            <Project data={data} id={i} key={i}/>
            { data.name !== "Day Tracker" &&
              <PageDivider />
            }
          </>
        ))}
      </div>
      <Header />
      { loading &&
        <Loader />
      }
    </>
  )
}

export default App
