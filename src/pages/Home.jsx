import gsap from "gsap";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        
        const timeline = gsap.timeline();
        timeline.fromTo('#greeting', {y: -70, opacity: 0}, {
            y: 0,
            duration: 0.75,
            delay: 8,
            opacity: 1,
            ease: "power4",
        } )
        timeline.fromTo('#name', {y: -70, opacity: 0}, {
            y: 0,
            duration: 0.75,
            opacity: 1,
            ease: "power4",
        } )
        timeline.fromTo('#experiance', {y: -40, opacity: 0}, {
            y: 0,
            duration: 0.5,
            opacity: 1,
            ease: "power4"
        } )
    }, [])
    return (
        <section className='w-screen h-screen flex items-center' id="home">
            <h1 className='text-gray-200 text-8xl font-extrabold m-32'>
                <div id="greeting">Hi,</div>
                <div id="name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 h-28">I'm Ryan.</div>
                <p id="experiance" className="text-gray-400 font-normal text-lg my-8 ">Creative app developer</p>
            </h1>
        </section>
    )
}

export default Home;