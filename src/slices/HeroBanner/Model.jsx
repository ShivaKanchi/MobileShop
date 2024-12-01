"use client";
import React, { Suspense, useEffect, useState, useRef, use } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { gsap } from "gsap";

export default function Model() {
  return (
    <div className="ui-3d-model">
      <Canvas
        className="ui-3d-model__canvas"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 25], fov: 20, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          {/* Box */}
          {/* <Float>
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshNormalMaterial />
            </mesh>
          </Float> */}
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            scale={40}
            opacity={0.65}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      rotationSpeed: 0.8,
      geometry: new THREE.IcosahedronGeometry(2.1), // icosahedron
    },
    {
      position: [2.9, -1.96, -2.9],
      rotationSpeed: 1,
      geometry: new THREE.CapsuleGeometry(0.4, 1.2, 6, 12), // pill
    },
    {
      position: [-2, 2, 2],
      rotationSpeed: 0.7,
      geometry: new THREE.DodecahedronGeometry(0.6), // ball
    },
    {
      position: [-2, -1.9, 2],
      rotationSpeed: 1,
      geometry: new THREE.TorusGeometry(0.5, 0.25, 12, 32), // icosahedron
    },
    {
      position: [2, 2, 3],
      rotationSpeed: 1.2,
      geometry: new THREE.OctahedronGeometry(0.69), // icosahedron
    },
  ];
  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.5,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];
  // console.log(geometries);
  // Pass to Geometry
  return geometries.map((geometry, i) => (
    <Geometry
      // key={JSON.stringify(geometry)}
      key={i}
      rotationSpeed={geometry.rotationSpeed}
      position={geometry.position}
      geometry={geometry.geometry}
      materials={materials}
    />
  ));
}

function Geometry({ rotationSpeed, position, geometry, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);
  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;
    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1, 0.3)",
      // yoyo: true,
    });
  }

  const handleMouseEnter = () => {
    document.body.style.cursor = "pointer";
  };
  const handleMouseExit = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(meshRef.current.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 1,
        ease: "power4.inOut",
        delay: 1.5,
      });
    });
    setVisible(true);
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float
        speed={5 * rotationSpeed}
        rotationIntensity={0.5 * rotationSpeed}
        floatIntensity={0.5 * rotationSpeed}
      >
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handleMouseEnter}
          onPointerOut={handleMouseExit}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
