import { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectIntro = () => {

  useEffect(() => {
    gsap.fromTo("#myProject", {opacity: 0, y: 70}, {opacity: 1, duration: 0.5,y: 0, scrollTrigger: {
      trigger: "#projectIntro",
      start: "center 70%",
    }})
  }, [])

  return (
      <section className='w-screen h-screen flex items-center' id="projectIntro">
        <Spline className="w-screen h-screen top-0 left-0" scene="https://prod.spline.design/ym7AWj9CSCQY2NWf/scene.splinecode"/>
          <h1 className='text-gray-200 text-7xl font-extrabold m-32 absolute' id='myProject'>
              My 
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'> Projects</span>
              <p className="text-gray-300 font-light text-lg my-8" id="timeline">2020 ~ present</p>
              <p className="text-gray-200 font-light text-base italic mt-64" id="timeline">Tip: try moving around your cursor for a cool effect!</p>
          </h1>
      </section>
  )
}

export default ProjectIntro;