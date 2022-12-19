import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const pRef = useRef();

    useEffect(() => {
        gsap.from(pRef.current, {duration: 1, opacity: 1,  stagger: 0.025, ease: "inOut", scrollTrigger: {
            trigger: pRef.current,
        }})
    }, [])
    return (
        <section className="w-screen h-screen flex items-center" ref={pRef} id="about">
            <h1 className='text-gray-200 text-6xl font-bold mx-48'>
                <span className="text-lg font-light">Over these past two years, I have been</span><br />
                working with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> Swift </span>
                and 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> React Native </span>
                to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> create apps </span>
                for my community.
            </h1>
        </section>
    )
}

export default About;