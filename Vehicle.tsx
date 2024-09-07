import { RigidBody } from '@react-three/rapier';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import { FC } from 'react';

const Vehicle: FC = () => {
  return (
    <RigidBody type="dynamic" colliders="hull">
      {/* Vehicle body */}
      <Box args={[3, 1, 2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="gray" />
      </Box>

      {/* Front wheel */}
      <Sphere args={[0.5, 32, 32]} position={[0, -0.5, 1]}>
        <meshStandardMaterial color="red" />
      </Sphere>

      {/* Back wheels */}
      <Cylinder args={[0.3, 0.3, 1, 32]} position={[-1, -0.5, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="black" />
      </Cylinder>
      <Cylinder args={[0.3, 0.3, 1, 32]} position={[1, -0.5, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="black" />
      </Cylinder>
    </RigidBody>
  );
};

export default Vehicle;
