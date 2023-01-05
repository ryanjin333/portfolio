import { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import appStoreDownload from '../assets/appStoreDownload.png';
import playStoreDownload from '../assets/playStoreDownload.png';
import rightArrow from '../assets/rightArrow.png';


gsap.registerPlugin(ScrollTrigger);

const Project = ({data, id}) => {

    const {name, description, githubLink, splineLink, appStoreLink, playStoreLink} = data;
    const phone = useRef();

    useEffect(() => {
        gsap.fromTo(`#app${id}`, {opacity: 0, y: 70}, {opacity: 1, y: 0, duration: 0.5, scrollTrigger: {
            trigger: `#action${id}`,
            start: "center 90%",
        }})
      }, [])

    useEffect(() => {
        if (phone.current != null) {
            
            gsap.fromTo(phone.current.rotation, {x: -0.3, y: -0.5, z: -0.2}, { x: 0, y: 0.6, z: 0, scrollTrigger: {
                trigger: `#action${id}`,
                start: "top 90%",
                end: "top 50%",
                scrub: 3,
            }})
        }
    }, [phone.current])

    const onLoad = (spline) => {
        const obj = spline.findObjectByName('iPhone 14 Pro');
        phone.current = obj;
        console.log(phone.current);
    }

    return (
        <section className='w-screen h-screen flex items-center' id={`project${id}`}>
            <h1 
                className={id % 2 == 0
                    ? 'absolute right-0 w-[32rem] text-gray-200 text-7xl font-bold mx-48'
                    : 'absolute left-0 w-[32rem] text-gray-200 text-7xl font-bold mx-48'}
                id={`app${id}`}
            > 
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>{name}</span>
                <p className="text-gray-300 font-light text-lg my-8" id={`action${id}`}>{description}</p>
                <div className='flex items-center justify-between'>
                    <div className="flex items-center">
                        { appStoreLink !== "" &&
                            <a style={{display: "table-cell"}} href={appStoreLink} target="_blank">
                                <img className='h-10 w-30 mr-4 hover:opacity-70 duration-300' src={appStoreDownload}/>
                            </a>
                        }
                        { playStoreLink !== "" &&
                            <a style={{display: "table-cell"}} href={playStoreLink} target="_blank">
                                <img className='h-12 w-38 mr-4 hover:opacity-70 duration-300' src={playStoreDownload}/>
                            </a>
                        }
                    </div>
                    <a style={{display: "table-cell"}} href={githubLink} target="_blank">
                        <div className="flex direction-row items-center hover:opacity-70 duration-300">
                            <span className='mr-1 font-medium text-sm'>View on GitHub</span>
                            <img className="h-6 w-6"src={rightArrow}/>
                        </div>
                    </a>
                </div>
            </h1>
            <Spline className="w-screen h-screen top-0 left-0" scene={splineLink} onLoad={onLoad} />
        </section>
    )
}

export default Project;