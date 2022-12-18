import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Home from './pages/home';
import SceneEnvironment from './pages/SceneEnvironment';
import About from './pages/About';
import Header from './components/Header';

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
      </div>
      <Header />
    </>
  )
}

export default App
