import { useState, useEffect } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Box, Sphere } from '@react-three/drei';

type Shape = {
  id: number;
  type: 'box' | 'sphere';
  size: number;
  mass: number;
  position: [number, number, number];
};

const FallingShapes: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const type: 'box' | 'sphere' = Math.random() > 0.5 ? 'box' : 'sphere';
      const size = Math.random() * 1.5 + 0.5;
      const mass = Math.random() * 2 + 1;
      const position: [number, number, number] = [Math.random() * 10 - 5, 10, Math.random() * 10 - 5];

      setShapes((prevShapes) => [
        ...prevShapes,
        { id: Math.random(), type, size, mass, position },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {shapes.map(({ id, type, size, mass, position }) => (
        <RigidBody key={id} mass={mass} position={position}>
          {type === 'box' ? (
            <Box args={[size, size, size]}>
              <meshStandardMaterial color="blue" />
            </Box>
          ) : (
            <Sphere args={[size, 32, 32]}>
              <meshStandardMaterial color="green" />
            </Sphere>
          )}
        </RigidBody>
      ))}
    </>
  );
};

export default FallingShapes;
