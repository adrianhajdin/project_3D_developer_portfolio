import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber"; // useFrame is no longer needed here for this specific request
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // const meshRef = useRef(); // No longer strictly needed if OrbitControls handles all interaction

  // Removed the useFrame hook for automatic animation:
  // useFrame((state, delta) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += delta * 0.5;
  //   }
  // });

  return (
    // You can keep the mesh wrapper if you plan to add other interactions to it later,
    // but for OrbitControls alone, it's not essential to have a ref here.
    // <mesh ref={meshRef}>
    <group> {/* Using group as a non-visual wrapper, mesh is also fine */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} // Keep initial rotation if desired
      />
    </group>
    // </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand" // Can be set to 'demand' if only OrbitControls cause re-renders
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // This is correctly set to prevent zooming
          maxPolarAngle={Math.PI / 2} // Restricts orbiting vertically (can't go over the top or below)
          minPolarAngle={Math.PI / 2} // Restricts orbiting vertically
          // enableRotate={true} // true by default, allows rotation
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;