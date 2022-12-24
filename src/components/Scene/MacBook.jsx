import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clone, Float } from '@react-three/drei'; 

gsap.registerPlugin(ScrollTrigger);

const MacBook = () => {

    const macbook = useRef();
    useEffect(() => {
        gsap.to(macbook.current.position, { x: -10000, y: -500, z: 0, scrollTrigger: {
            trigger: "#about",
            endTrigger: "#timeline",
            start: "top top",
            scrub: 5,
        }})
    })

    return (
        <>
            <Float castShadow floatIntensity={10} speed={5} position={[300, -100, -100]}>
                    <Clone ref={macbook} object={node}/>
            </Float>
        </>
    )
}

export default MacBook;