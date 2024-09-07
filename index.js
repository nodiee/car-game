import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import VehicleMovement from '../components/VehicleMovement';
import FallingShapes from '../components/FallingShapes';
import Ground from '../components/Ground';

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Physics>
          <Ground />
          <VehicleMovement />
          <FallingShapes />
        </Physics>
      </Canvas>
    </div>
  );
}
