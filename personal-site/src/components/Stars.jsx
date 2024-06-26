import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const Stars = () => {
  const groupRef = useRef();

  useEffect(() => {
    const group = groupRef.current;
    const starGeometry = new THREE.SphereGeometry(0.1, 12, 12);
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    for (let i = 0; i < 700; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      group.add(star);
    }
  }, []);

  return <group ref={groupRef} />;
};

export default Stars;