import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
        gsap.fromTo("#paragraph", {opacity: 0}, {opacity: 1, ease: "power4", scrollTrigger: {
            trigger: "#trig",
            scrub: 1,
        }})
    }, [])
    return (
        <section className="w-screen h-screen flex items-center" id="about">
            <h1 className='text-gray-200 text-6xl font-bold mx-48' id="paragraph">
                <div className="text-lg font-light">Over these past two years, I have been</div>
                working with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> Swift </span>
                and 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> React Native </span>
                to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600" id="trig"> create apps </span>
                for my community.
            </h1>
        </section>
    )
}

export default About;