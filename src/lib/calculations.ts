import * as THREE from "three";

const calculateKeplerPosition = (
  semiMajorAxis: number, // a
  eccentricity: number, // e
  inclination: number, // i
  lonAscendingNode: number, // Ω
  argPeriapsis: number, // ω
  trueAnomaly: number ,// ν
  factor: number
) => {
  // Calculate radius (distance to central body)
  const r =
    (semiMajorAxis * (1 - eccentricity * eccentricity)) /
    (1 + eccentricity * Math.cos(trueAnomaly));

  // Orbital plane coordinates (before inclining)
  const x = r * Math.cos(trueAnomaly);
  const y = r * Math.sin(trueAnomaly);

  // Rotation matrices for inclination (i), argument of periapsis (ω), and longitude of ascending node (Ω)
  const cosI = Math.cos(inclination);
  const sinI = Math.sin(inclination);
  const cosO = Math.cos(lonAscendingNode);
  const sinO = Math.sin(lonAscendingNode);
  const cosW = Math.cos(argPeriapsis);
  const sinW = Math.sin(argPeriapsis);

  // Apply the rotations to get the position in 3D space
  const posX =
    (cosO * cosW - sinO * sinW * cosI) * x +
    (-cosO * sinW - sinO * cosW * cosI) * y;
  const posY =
    (sinO * cosW + cosO * sinW * cosI) * x +
    (-sinO * sinW + cosO * cosW * cosI) * y;
  const posZ = sinI * sinW * x + sinI * cosW * y;
  return new THREE.Vector3(posX * factor, posY * factor, posZ * factor);
};

export { calculateKeplerPosition };
