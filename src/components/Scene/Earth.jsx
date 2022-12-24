import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clone, Float } from '@react-three/drei'; 

gsap.registerPlugin(ScrollTrigger);

const Earth = ({node}) => {

    const earth = useRef();
    useEffect(() => {
        gsap.to(earth.current.position, { x: 1000, scrollTrigger: {
            trigger: "#home",
            endTrigger: "#trig",
            start: "bottom bottom",
            scrub: 5,
        }})
        gsap.to(earth.current.position, { x: -1000, scrollTrigger: {
            trigger: "#projectIntro",
            endTrigger: "#timeline",
            start: "top top",
            scrub: 5,
        }})
    })
    return (
        <>
            <Float castShadow floatIntensity={5} speed={2} position={[-1000, -200, 589]} >
                <Clone ref={earth} object={node}/>
            </Float>
        </>
    )
}

export default Earth;