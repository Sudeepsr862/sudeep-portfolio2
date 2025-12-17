import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Environment } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Vector3, MathUtils } from 'three';

// 1. Interactive Particle System
const Particles = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Mouse Interaction (Subtle Warp)
    const { x, y } = state.pointer;
    ref.current.rotation.x += y * 0.05;
    ref.current.rotation.y += x * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#bc13fe"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// 2. Interactive Lightbulb
const LightBulb = ({ toggleTheme }) => {
  const ref = useRef();
  const lightRef = useRef();
  const [active, setActive] = useState(false);
  
  const velocity = useRef(0);
  const angle = useRef(0);

  const handleClick = () => {
    velocity.current += 0.05; 
    setActive(!active);
    toggleTheme();
  };

  useFrame((state, delta) => {
    const gravity = 2.0;
    const damping = 0.98;
    const acceleration = -gravity * Math.sin(angle.current);
    
    velocity.current += acceleration * delta;
    velocity.current *= damping;
    angle.current += velocity.current;

    ref.current.rotation.z = angle.current;
    
    if(active && lightRef.current) {
        lightRef.current.intensity = MathUtils.lerp(lightRef.current.intensity, 2, 0.1);
    } else {
        lightRef.current.intensity = MathUtils.lerp(lightRef.current.intensity, 0.2, 0.1);
    }
  });

  return (
    <group position={[2, 3, 0]} onClick={handleClick}>
      <group ref={ref}>
        <mesh position={[0, -1, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 2, 8]} />
            <meshStandardMaterial color="#333" />
        </mesh>
        <mesh position={[0, -2, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial 
                emissive={active ? "#ffaa00" : "#222"} 
                emissiveIntensity={active ? 2 : 0} 
                color={active ? "#ffaa00" : "#444"} 
            />
            <pointLight ref={lightRef} distance={10} decay={2} color="#ffaa00" intensity={0.5} />
        </mesh>
      </group>
    </group>
  );
};

const ThreeScene = ({ toggleTheme }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-darkBg">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
           <LightBulb toggleTheme={toggleTheme} />
        </Float>
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;