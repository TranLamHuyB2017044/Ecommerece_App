import React from "react";
// import Box from "../components/Box";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./test.module.scss";
import Shoes from "../components/Shoes";
export default function Test() {
  return (
    <div className={styles.test_container}>
      <Canvas>
        <Shoes />
        <OrbitControls enableZoom={false} autoRotate/>
      </Canvas>
    </div>
  );
}
