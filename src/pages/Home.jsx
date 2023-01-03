import gsap from "gsap";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        
        gsap.fromTo('#greeting', {y: -70, opacity: 0}, {
            y: 0,
            duration: 1.65,
            delay: 8,
            opacity: 1,
            ease: "power4",
        } )
        gsap.fromTo('#name', {y: -70, opacity: 0}, {
            y: 0,
            duration: 1.65,
            delay: 8.5,
            opacity: 1,
            ease: "power4",
        } )
        gsap.fromTo('#experiance', {y: -40, opacity: 0}, {
            y: 0,
            duration: 1.65,
            delay: 9,
            opacity: 1,
            ease: "power4"
        })
    }, [])
    return (
        <section className='w-screen h-screen flex items-center' id="home">
            <h1 className='text-gray-200 text-8xl font-extrabold m-32'>
                <div id="greeting">Hi,</div>
                <div id="name" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 h-28">I'm Ryan.</div>
                <p id="experiance" className="font-normal text-lg my-2 ">Frontend App Developer</p>
            </h1>
        </section>
    )
}

export default Home;