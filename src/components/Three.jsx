import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { angleToRadians } from "../utils";

const Three = () => {
  // Code to move the camera around
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });
  useEffect(() => {}, [orbitControlsRef.current]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitControlsRef} />

      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Three;
