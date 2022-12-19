import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clone, Float } from '@react-three/drei'; 

gsap.registerPlugin(ScrollTrigger);

const SphereObject = ({sphere, node}) => {

    const {name, coord, position, rotation} = sphere;
    const sphereRef = useRef();

    useEffect(() => {
        gsap.to(sphereRef.current.position, { x: position[0], y: position[1], z: position[2], scrollTrigger: {
            trigger: "#home",
            endTrigger: "#about",
            start: "top top",
            end: "bottom top",
            scrub: 3,
        }})
        gsap.to(sphereRef.current.rotation, { x: rotation[0], y: rotation[1], z: rotation[2], scrollTrigger: {
            trigger: "#home",
            endTrigger: "#about",
            start: "top top",
            end: "bottom top",
            scrub: 3,
        }})
    }, [])

    return (
        <>
            <Float castShadow receiveShadow floatIntensity={10} speed={5} position={coord}>
                <Clone ref={sphereRef} object={node}/>
            </Float>
        </>
    )
}

export default SphereObject;