"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float, OrbitControls, useTexture } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const moments = [
  "/assets/tour/frame_000_delay-0.06s.jpg",
  "/assets/tour/frame_040_delay-0.06s.jpg",
  "/assets/tour/frame_080_delay-0.06s.jpg",
  "/assets/tour/frame_120_delay-0.06s.jpg",
  "/assets/tour/frame_159_delay-0.06s.jpg",
];

function PhotoPanel({ src, index, angle }: { src: string; index: number; angle: number }) {
  const texture = useTexture(src);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  const radius = 3.15;
  return (
    <group position={[Math.sin(angle) * radius, 1.15 + (index % 2) * 0.12, -Math.cos(angle) * radius]} rotation={[0, -angle, 0]}>
      <mesh position={[0, 0, -0.045]}>
        <planeGeometry args={[2.12, 1.25]} />
        <meshStandardMaterial color="#d6a75c" roughness={0.45} />
      </mesh>
      <mesh>
        <planeGeometry args={[2.04, 1.17]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

function RestaurantMoments() {
  return (
    <group>
      {moments.map((src, index) => {
        const angle = (index - 2) * 0.43;
        return <Float key={src} speed={0.7 + index * 0.08} floatIntensity={0.12} rotationIntensity={0.025}>
          <PhotoPanel src={src} index={index} angle={angle} />
        </Float>;
      })}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]}>
        <circleGeometry args={[4.6, 64]} />
        <meshStandardMaterial color="#254638" roughness={0.82} />
      </mesh>
      <mesh position={[0, 0.02, -3.6]}>
        <boxGeometry args={[7.5, 0.08, 0.08]} />
        <meshStandardMaterial color="#d6a75c" metalness={0.45} roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function FoodScene() {
  return (
    <Canvas camera={{ position: [0, 2.25, 7.3], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.15} />
      <spotLight position={[2, 6, 5]} intensity={32} angle={0.55} penumbra={0.8} />
      <pointLight position={[-4, 2, -3]} intensity={8} color="#d6a75c" />
      <Suspense fallback={null}>
        <RestaurantMoments />
        <Environment preset="sunset" />
        <ContactShadows position={[0, -0.035, 0]} opacity={0.28} scale={9} blur={2.5} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3.4} maxPolarAngle={Math.PI / 2.05} autoRotate autoRotateSpeed={0.24} />
    </Canvas>
  );
}
