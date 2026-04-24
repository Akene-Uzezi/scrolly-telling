import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
import { Mesh } from "three";

export const Scene = () => {
  const meshRef = useRef<Mesh>(null!);
  const { scrollYProgress } = useScroll();
  const rotationY = useTransform(scrollYProgress, [0, 1], [Math.PI * 5]);
  const positionZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, -2]);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotationY.get();
      meshRef.current.position.z = positionZ.get();
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#22c55e" wireframe />
      </mesh>
    </>
  );
};
