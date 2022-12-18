import { useEffect, useRef } from 'react';
import useSpline from '@splinetool/r3f-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clone, Float, PerspectiveCamera } from '@react-three/drei'; 

gsap.registerPlugin(ScrollTrigger);

const HomeScene = () => {
    const { nodes, materials } = useSpline(
        "https://prod.spline.design/7dD3gsMic-cKKKyL/scene.splinecode"
      );
    const cube = useRef();
    const torus = useRef();

    useEffect(() => {
            gsap.to(cube.current.rotation, { y: 8, scrollTrigger: {
                trigger: "#home",
                endTrigger: "#about",
                start: "top top",
                end: "bottom top",
                scrub: 3,
            }})
            gsap.to(cube.current.position, { y: 1000, z: 500, scrollTrigger: {
                trigger: "#home",
                endTrigger: "#about",
                start: "top top",
                end: "bottom top",
                scrub: 3,
            }})
            gsap.to(torus.current.rotation, { y: 8, scrollTrigger: {
                trigger: "#home",
                endTrigger: "#about",
                start: "top top",
                end: "bottom top",
                scrub: 3,
            }})
            gsap.to(torus.current.position, { x: 1000, y: 500, scrollTrigger: {
                trigger: "#home",
                endTrigger: "#about",
                start: "top top",
                end: "bottom top",
                scrub: 3,
            }})
    }, [])
    return (
        <>
             <Float floatIntensity={10} speed={10} position={[-0.07, -14.23, -5.56]}>
                <Clone ref={cube} object={nodes["Cube"]}/>
            </Float>
            <Float floatIntensity={10} speed={5} position={[188.47, 138.49, 133.58]}>
                <Clone ref={torus} object={nodes["Torus"]}/>
            </Float>
            <PerspectiveCamera
                name="1"
                makeDefault={true}
                far={10000}
                near={5}
                fov={45}
                position={[644.81, 382.64, 407.85]}
                rotation={[-0.67, 0.84, 0.54]}
            />
            <directionalLight
                name="Directional Light"
                castShadow
                intensity={0.7}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={-10000}
                shadow-camera-far={100000}
                shadow-camera-left={-500}
                shadow-camera-right={500}
                shadow-camera-top={500}
                shadow-camera-bottom={-500}
                position={[200, 300, 300]}
            />
            <hemisphereLight
                name="Default Ambient Light"
                intensity={0.75}
                color="#eaeaea"
            />
        </>
    )
}

export default HomeScene;