import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import { RigidBody, useRapier } from '@react-three/rapier';
import Vehicle from './Vehicle';

const VehicleMovement: React.FC = () => {
  const vehicleRef = useRef<any>(null); // Use any or a specific type depending on your setup
  const [forward, setForward] = useState(false);
  const [backward, setBackward] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'w') setForward(true);
      if (e.key === 's') setBackward(true);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'w') setForward(false);
      if (e.key === 's') setBackward(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state) => {
    const vehicle = vehicleRef.current?.api; // .api gives access to the RigidBody API

    if (vehicle) {
      if (forward) vehicle.applyImpulse({ x: 0, y: 0, z: -0.1 }, true);
      if (backward) vehicle.applyImpulse({ x: 0, y: 0, z: 0.1 }, true);

      const angle = Math.atan2(state.mouse.y, state.mouse.x);
      vehicle.setRotation({ x: 0, y: angle, z: 0 }, true);
    }
  });

  return (
    <RigidBody ref={vehicleRef} type="dynamic" colliders="hull">
      <Vehicle />
    </RigidBody>
  );
};

export default VehicleMovement;
