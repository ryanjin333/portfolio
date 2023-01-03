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
import Footer from './components/Footer';
import Used from './pages/Used';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    }, 8000)
  }, [])

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
            <PageDivider />
          </>
        ))}
        <Used />
        <Footer />
      </div>
      <Header />
      { loading &&
        <Loader />
      }
    </>
  )
}

export default App
