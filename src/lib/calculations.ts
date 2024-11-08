import { NearEarthObjectApiResponse, OrbitalElements } from "@/pages/Kepler/SolarSystem";
import * as THREE from "three";

const calculateKeplerPosition = (
  semiMajorAxis: number, // a
  eccentricity: number, // e
  inclination: number, // i
  lonAscendingNode: number, // Ω
  argPeriapsis: number, // ω
  trueAnomaly: number,// ν
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

const scaleFactor = 1e9;  // example scale factor
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapApiDataToOrbitalElements(apiData: NearEarthObjectApiResponse) {
  const AU_TO_METERS = 1.496e11;
  const DEG_TO_RAD = Math.PI / 180;

  return {
    a: ((parseFloat(apiData.q_au_1) + parseFloat(apiData.q_au_2)) / 2) * AU_TO_METERS / scaleFactor,  // semi-major axis
    e: parseFloat(apiData.e),  // eccentricity
    i: parseFloat(apiData.i_deg) * DEG_TO_RAD,  // inclination in radians
    Ω: parseFloat(apiData.node_deg) * DEG_TO_RAD,  // longitude of ascending node in radians
    ω: parseFloat(apiData.w_deg) * DEG_TO_RAD,  // argument of periapsis in radians
    T: parseFloat(apiData.tp_tdb),  // time of perihelion passage (in Julian Date format, may need conversion)
  };
}

function convertApiDataToOrbitalElements(apiData: NearEarthObjectApiResponse): OrbitalElements {
  const AU_TO_METERS = 1.496e11;  // Conversion factor from AU to meters
  const DEG_TO_RAD = Math.PI / 180;  // Conversion factor from degrees to radians
  const scaleFactor = 0.3;
  return {
    // eslint-disable-next-line
    a: (parseFloat(apiData.q_au_1 as string) * AU_TO_METERS * scaleFactor).toExponential(3),  // Keep as a string in scientific notation
    e: parseFloat(apiData.e as string) * scaleFactor,                 // Parse eccentricity
    i: parseFloat(apiData.i_deg as string) * DEG_TO_RAD  * scaleFactor,    // Convert inclination to radians
    Ω: parseFloat(apiData.node_deg as string) * DEG_TO_RAD * scaleFactor ,    // Convert longitude of ascending node to radians
    ω: parseFloat(apiData.w_deg as string) * DEG_TO_RAD * scaleFactor ,    // Convert argument of periapsis to radians
    T: parseFloat(apiData.tp_tdb as string)                 // Parse time of perihelion passage
  };
}





// Example usage



export { calculateKeplerPosition, mapApiDataToOrbitalElements, convertApiDataToOrbitalElements };
