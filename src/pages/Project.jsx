const Project = ({data, id}) => {

    const {name, description} = data;

    return (
        <section className='w-screen h-screen flex items-center' id={`project${id}`}>
            <h1 className={id % 2 == 0
                ? 'absolute right-0 w-[32rem] text-gray-200 text-7xl font-bold mx-48'
                : 'absolute left-0 w-[32rem] text-gray-200 text-7xl font-bold mx-48'}> 
                <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600'>{name}</span>
                <p className="  text-gray-300 font-extralight text-lg my-8">{description}</p>
            </h1>
        </section>
    )
}

export default Project;