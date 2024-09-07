import { RigidBody } from '@react-three/rapier';
import { Plane } from '@react-three/drei';

const Ground: React.FC = () => {
  return (
    <RigidBody type="fixed"> {/* Use "fixed" instead of "static" */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="gray" />
      </Plane>
    </RigidBody>
  );
};

export default Ground;
