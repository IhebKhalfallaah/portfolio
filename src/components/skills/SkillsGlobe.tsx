"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Cpu } from "lucide-react";

const LABELS = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Kafka",
  "Redis",
  "Keycloak",
  "SQL Server",
  "Docker",
  "GitHub Actions",
  "Python",
  "FastAPI",
  "Design Patterns",
  "Machine Learning",
];

function fibonacciSpherePoints(n: number, radius: number) {
  const pts: THREE.Vector3[] = [];
  const golden = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < n; i++) {
    const t = i / n;
    const inc = Math.PI * (3 - Math.sqrt(5));
    const y = 1 - t * 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * inc;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    pts.push(new THREE.Vector3(x, y, z).multiplyScalar(radius));
  }
  return pts;
}

function WireGlobe() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.0015;
  });
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2.15, 3]} />
      <meshBasicMaterial
        color="#ff6b2c"
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function LogoNodes({ positions }: { positions: THREE.Vector3[] }) {
  return (
    <>
      {LABELS.map((label, i) => (
        <Html key={label} position={positions[i]} center>
          <div
            className="pointer-events-none select-none rounded-md border border-white/10 bg-black/50 px-1.5 py-0.5 font-mono-port text-[9px] text-white/90 whitespace-nowrap backdrop-blur-sm"
            style={{ opacity: 0.75 + (i % 5) * 0.05 }}
          >
            {label}
          </div>
        </Html>
      ))}
    </>
  );
}

function Scene() {
  const positions = useMemo(
    () => fibonacciSpherePoints(LABELS.length, 2.35),
    []
  );
  return (
    <>
      <ambientLight intensity={0.8} />
      <WireGlobe />
      <LogoNodes positions={positions} />
      <Html position={[0, 0, 0]} center>
        <div className="font-mono-port text-sm text-[var(--orange)] drop-shadow-lg">
          Three.js
        </div>
      </Html>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </>
  );
}

export function SkillsGlobe() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[420px] w-full rounded-xl bg-[var(--surface)] border border-[var(--border)] animate-pulse" />
    );
  }

  return (
    <section
      id="skills"
      className="relative px-4 sm:px-6 lg:px-12 py-20 lg:py-28 border-t border-[var(--border)]/80"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-mono-port text-sm text-white mb-10 flex items-center gap-2">
          <Cpu className="h-4 w-4 text-[var(--orange)]" /># Skills.json
        </h2>

        <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 overflow-hidden">
          <div className="h-[min(52vh,480px)] w-full touch-none">
            <Canvas
              camera={{ position: [0, 0, 7.2], fov: 45 }}
              gl={{ alpha: true, antialias: true }}
              className="!bg-transparent"
            >
              <Scene />
            </Canvas>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-black/60 px-4 py-2 text-xs font-mono-port text-[var(--text-muted)] backdrop-blur-md">
              <span className="text-[var(--orange)]">🌐</span>
              Drag to explore skills universe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
