import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[0.9, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#008170"
          attach="material"
          distort={0.3}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default Shape;
