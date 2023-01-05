import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div className='w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-neutral-900'>
        <HashLoader
        color={"#d68736"}
        loading={true}
        size={50}
        />
    </div>
  )
}

export default Loader;