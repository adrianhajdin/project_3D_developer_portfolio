import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float 
      speed={1.5} // Slower, smoother rotation
      rotationIntensity={0.75} // Reduced rotation intensity
      floatIntensity={1.5} // More subtle floating effect
      floatingRange={[0.05, 0.15]} // Defined float range
    >
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[1, 2, 3]} 
        intensity={1.5}
        castShadow
      />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 4]} /> // Increased geometry detail
        <meshStandardMaterial
          color="#fff8eb"
          metalness={0.3}
          roughness={0.2}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false} // Smoother shading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]} // Simplified rotation
          scale={0.9}
          map={decal}
          depthTest={false} // Fixes z-fighting issues
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always" // Changed to 'always' for continuous animation
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          autoRotate // Add automatic rotation
          autoRotateSpeed={2} // Slower auto-rotation
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;