import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {
  return (
    <>
        <PerspectiveCamera name="1" makeDefault={true} far={100000} near={5} fov={45} position={[0, 0, 1000]} />
    </>
  )
}

export default Camera;