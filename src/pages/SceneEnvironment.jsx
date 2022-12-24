import { useEffect, useRef } from 'react';
import useSpline from '@splinetool/r3f-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clone, Float } from '@react-three/drei'; 
import Light from '../components/Scene/Light';
import Camera from '../components/Scene/Camera';
import SphereObject from '../components/Scene/SphereObject';
import sphereObjectsList from '../data/sphereObjectsList';
import Earth from '../components/Scene/Earth';
import MacBook from '../components/Scene/MacBook';

gsap.registerPlugin(ScrollTrigger);

const HomeScene = () => {
    const { nodes } = useSpline(
        "https://prod.spline.design/7dD3gsMic-cKKKyL/scene.splinecode"
      );
    
    return (
        <>
            <Light />
            <Camera />
            { sphereObjectsList.map((obj, i) => (
                <SphereObject sphere={obj} node={nodes[obj.name]} key={i}/>
            ))
            }
            <Earth node={nodes.Earth} />
            
        </>
    )
}

export default HomeScene;