import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Home from './pages/home';
import SceneEnvironment from './pages/SceneEnvironment';
import About from './pages/About';
import Header from './components/Header';
import ProjectIntro from './pages/ProjectIntro';
import Project from './pages/Project';
import projectList from './data/projectList';


function App() {

  return (
    <>
      <Suspense fallback={null}>
        <div className='w-screen h-screen fixed top-0 left-0'>
          <Canvas shadows flat linear>
            <SceneEnvironment />
          </Canvas>
        </div>
      </Suspense>
      <div className='absolute top-0 left-0'>
        <Home />
        <About />
        <ProjectIntro />
        { projectList.map((data, i) => (
           <Project data={data} id={i}/>
        ))}
      </div>
      <Header />
    </>
  )
}

export default App
