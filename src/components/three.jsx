// MyScene.js
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

function Model() {
  const result = useLoader(GLTFLoader, "./public/assets/EG rev.glb");
  // const controls = useRef();

  console.log(result);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("window", window);
      const scrollX = window.scrollY;
      const rotationAngle = (scrollX / window.innerWidth) * Math.PI * 2;
      result.scene.rotation.set(0, rotationAngle, 0);
    };

    window.addEventListener("scroll", handleScroll);
  });

  useFrame(() => {
    if (result.scene) {
      // result.scene.rotation.x += 0.04;
      // result.scene.rotation.y += 0.04;
      result.scene.position.set(0, 0, 0);
    }
  });
  return <primitive object={result.scene} />;
}

const MyScene = () => {
  return (
    <div className="container scene " style={{ width: "100%" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[-1, 1, 8]} fov={12} near={0.1} far={1000} />
        <Suspense /* or null */>
          <Model />
        </Suspense>
        <ambientLight />
        <directionalLight color="white" position={[1, 5, 0]} />
        <OrbitControls enableZoom={false} />
        {/* <ScrollRotate /> */}
      </Canvas>
    </div>
  );
};

export default MyScene;
