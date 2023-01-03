import {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import musicList from '../data/musicList';

gsap.registerPlugin(ScrollTrigger);

const Used = () => {

  useEffect(() => {
    gsap.fromTo(`#usedList`, {opacity: 0, y: 70}, {opacity: 1, y: 0, duration: 0.5, scrollTrigger: {
        trigger: "#used",
        start: "center 90%",
    }})
  }, [])

  return (
    <div className='w-screen h-screen flex items-center text-gray-200' id="used">
        <div className='ml-64' id='usedList'>
          <h1 className='text-3xl font-semibold'>This website used: </h1>
          <div className='flex direction-row my-8 ml-1'>
            <div className='mr-32'>
              <h2 className='mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-xl font-bold'>&lt;/&gt;</h2>
              <ul>
                <li>React</li>
                <li>React Three Fiber</li>
                <li>Vite</li>
                <li>Tailwind</li>
                <li>GSAP</li>
                <li>ScrollTrigger</li>
                <li>Spline</li>
              </ul>
            </div>
            <div>
              <h2 className='mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-xl font-bold'>🎵 </h2>
              <ul>
                { musicList.map((data, i) => (
                  <li key={i}><a className='hover:text-purple-500 duration-500' href={data.link} target="_blank">{data.name}</a></li>
                ))
                }
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Used;
