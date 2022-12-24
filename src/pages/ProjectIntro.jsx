import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectIntro = () => {

  useEffect(() => {
    gsap.fromTo("#myProject", {opacity: 0}, {opacity: 1, ease: "power4", scrollTrigger: {
        trigger: "#timeline",
        scrub: 1,
    }})
  }, [])

  return (
    <section className='w-screen h-screen flex items-center' id="projectIntro">
        <h1 className='text-gray-200 text-7xl font-extrabold m-32' id='myProject'>
            My 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'> Projects</span>
            <p className="text-gray-300 font-light text-lg my-8" id="timeline">2020 ~ present</p>
        </h1>
    </section>
  )
}

export default ProjectIntro;