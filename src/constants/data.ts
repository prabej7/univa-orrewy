export interface Planet {
  id: number;
  name: string;
  description: string;
  x: number;
  y: number;
  z: number;
  texture: string;
  size?: string;
  distance?: string;
}

const Planets: Planet[] = [
  {
    id: 1,
    name: "Mercury",
    description: `Mercury is the smallest planet in our solar system and nearest to the Sun. Mercury is appropriately named for the swiftest of the ancient Roman gods. It's surface temperatures are both extremely hot and cold. Because it is so close to the sun, day temperature reach highs of 800F(30C) and at night it's temperatures can dip as low as -
290F(-180C). Life is not possible because of its temperatures and solar radiation coming
from the sun. Mercury's atmosphere is very thin and primarily composed of oxygen,
sodium, hydrogen, helium and potassium.
`,
    x: 1.3894023874315806,
    y: -0.2103271438240347,
    z: 1.8776203117001682,
    texture: "/textures/mercury/mercury.jpg",
    size: `The radius of the mercury is 1,516 miles (2,440 kilometers), Mercury is little
more than 1/3 width of Earth.`,
    distance: `An average distance of 36million miles (58 millions kilometers) far from sun i.e
0.4 astronomical units(AU). From this distance, it takes sunlight 3.2 minutes to travel from the
Sun to Mercury.
`,
  },
  {
    id: 2,
    name: "Venus",
    description: `Venus is the second planet from the Sun and the hottest in the solar system. Its thick atmosphere is extremely toxic and composed of sulfuric acid clouds. The average surface temperature is 900°F (465°C) with a pressure of 92 bar. Venus is similar in size to Earth but spins slowly from east to west, opposite to most planets. It orbits the Sun at an average distance of 67 million miles (108 million kilometers), or 0.72 astronomical units. Venus has a diameter of about 7,521 miles (12,104 kilometers) at its equator.`,

    x: 3.4660433163193414,
    y: -0.0815655397235222,
    z: -0.918959099738796,
    texture: "/textures/venus/venus.jpg",
    size: `The radius of Venus is 3,760 miles (6,052 kilometers), about the same width as Earth.`,
    distance: `Venus is 26 million miles (40 million kilometers) from the Sun, or about 0.72 AU. It takes sunlight 6.5 minutes to travel from the Sun to Venus.`,
  },
  {
    id: 3,
    name: "Earth",
    description: `Earth is the third planet from the Sun and the only known planet to harbor life. It has a diverse environment with oceans, continents, and a protective atmosphere. Earth's unique conditions, including its distance from the Sun and the presence of liquid water, make it suitable for supporting a wide variety of life forms. The planet has a single moon and completes one orbit around the Sun every 365.25 days.`,
    x: -3.287414736354987,
    y: -0.0743034446913341,
    z: -3.7665016289780806,
    texture: "/textures/earth/earth.jpg",
    size: `The radius of Earth is 3,959 miles (6,371 kilometers), making it the largest of the inner planets.`,
    distance: `Earth orbits the Sun at an average distance of 93 million miles (150 million kilometers), or 1 astronomical unit (AU). It takes sunlight about 8 minutes to travel from the Sun to Earth.`,
  },
  {
    id: 4,
    name: "Mars",
    description: `Mars is the fourth planet from the Sun, known as the "Red Planet" due to its reddish appearance caused by iron oxide on its surface. It's the only planet where we've sent rovers to explore. Evidence suggests Mars once had a thicker atmosphere and was warmer and wetter billions of years ago. Its axis is tilted 25 degrees, similar to Earth's 23.4-degree tilt.`,
    x: -7.687001636464959,
    y: -0.02246359399985398,
    z: -0.9206413146225829,
    texture: "/textures/mars/mars.jpg",
    size: `The radius of Mars is 2,106 miles (3,390 kilometers), about half the size of Earth.`,
    distance: `Mars is 142 million miles (228 million kilometers) from the Sun, or about 1.5 astronomical units (AU). It takes sunlight 13 minutes to travel from the Sun to Mars.`,
  },
  {
    id: 5,
    name: "Saturn",
    description: `Saturn is a gas giant with spectacular rings, composed mainly of hydrogen and helium. It has numerous moons and a complex ring system made of ice, rock, and dust. With an equatorial diameter of 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. Its dense core is surrounded by liquid metallic hydrogen and an outer layer of liquid hydrogen.`,
    x: 40.211518572108645,
    y: -1.0702224293451976,
    z: 29.322531817083156,
    texture: "/textures/saturn/saturn.jpg",
    size: `The radius of Saturn is 36,184 miles (58,226 kilometers), about 9.1 times the radius of Earth.`,
    distance: `Saturn is 886 million miles (1.4 billion kilometers) from the Sun, or about 9.5 AU. It takes sunlight 80 minutes to travel from the Sun to Saturn.`,
  },
  {
    id: 6,
    name: "Jupiter",
    description: `Jupiter is the fifth and largest planet in our solar system. This gas giant has colorful swirling clouds and the Great Red Spot, a long-lasting storm. It rotates every 10 hours and orbits the Sun in about 12 Earth years. Jupiter has 95 known moons and a faint ring system.`,
    x: 26.002498911582318,
    y: -0.08038143767968897,
    z: 0.5889142438686772,
    texture: "/textures/jupiter/jupiter.jpg",
    size: `Jupiter's radius is 43,441 miles (69,911 kilometers), about 11 times Earth's radius.`,
    distance: `Jupiter orbits at an average distance of 484 million miles (778 million kilometers) from the Sun, or 5.2 AU.`,
  },
  {
    id: 7,
    name: "Uranus",
    description:
      "Uranus is an ice giant with a unique 90-degree tilt, causing extreme seasons. It has 13 faint rings and 28 moons. Its blue-green color comes from methane in its atmosphere. Uranus is the coldest planet in our solar system, with an average temperature of -320°F (-195°C). Its mass is mostly composed of icy materials (water, methane, and ammonia) surrounding a rocky core.",
    x: -0.02621323519320562,
    y: -1.3555076979923124,
    z: 100.59696873698232,
    texture: "/textures/uranus/uranus.jpg",
    size: `The radius of Uranus is 15,759 miles (25,312 kilometers), about 4 times the radius of Earth.`,
    distance: `Uranus is 1.8 billion miles (2.9 billion kilometers) from the Sun, or about 19.22 AU. It takes sunlight 2.7 hours to travel from the Sun to Uranus.`,
  },
  {
    id: 8,
    name: "Neptune",
    description:
      "Neptune, the eighth planet from the Sun, is an ice giant known for its blue color and strong winds. It was the first planet discovered through mathematical predictions. Neptune has a rocky core, is about 17 times Earth's mass, and has at least five rings. Its atmosphere is primarily hydrogen, helium, and methane, with an average temperature of -346°F (-210°C) at the cloud tops.",
    x: -151.98079221838316,
    y: -0.34960059945629185,
    z: 9.693482976580563,
    texture: "/textures/neptune/neptune.jpg",
    size: `The radius of Neptune is 15,299 miles (24,622 kilometers), about 4 times the radius of Earth.`,
    distance: `Neptune is 2.8 billion miles (4.5 billion kilometers) from the Sun, or about 30.07 AU. It takes sunlight 5.4 hours to travel from the Sun to Neptune.`,
  },
  {
    id: 9,
    name: "Sun",
    description: "The star at the center of our solar system.",
    x: 0.2995466668868829,
    y: 0.16395455902711653,
    z: 0.9387653702059069,
    texture: "/textures/sun/8k_sun.jpg",
    size: `The radius of the Sun is 432,450 miles (696,000 kilometers), about 109 times the radius of Earth.`,
    distance: `The average distance from the Sun to Earth is 93 million miles (150 million kilometers), or about 1 AU. It takes sunlight 8 minutes to travel from the Sun to Earth.`,
  },
];

const Comets = [
  {
    id: 1,
    name: "Halley's Comet",
    description: "The most famous comet in the solar system.",
    x: -7.552960150067171,
    y: -2.4437396827599023,
    z: -2.384149892473595,
    texture: "/models/hw1.stl",
  },
  {
    id: 2,
    name: "Toutatis",
    description: "An Apollo asteroid with an unusual rotation.",
    x: -5.383219022769962,
    y: -0.26289314296127103,
    z: -4.675647331639647,
    texture: "/models/toutatis.stl",
  },
  {
    id: 3,
    name: "Mithra",
    description: "A Mars-crossing asteroid with an irregular shape.",
    x: -3.315645843114135,
    y: 0.6253530173489932,
    z: -4.8440332015533105,
    texture: "/models/mithra.stl",
  },
  {
    id: 4,
    name: "Golevka",
    description: "An Earth-crossing asteroid named after three observatories.",
    x: -3.654140021491372,
    y: -0.4240800172050749,
    z: -4.838082375440323,
    texture: "/models/golevka.stl",
  },
  {
    id: 5,
    name: "Geographos",
    description: "An elongated near-Earth asteroid.",
    x: -5.234604149764206,
    y: 0.855617102546409,
    z: -4.574020989451821,
    texture: "/models/geographos.stl",
  },
  {
    id: 6,
    name: "Bennu",
    description:
      "A potentially hazardous asteroid explored by OSIRIS-REx mission.",
    x: -3.9644043687922794,
    y: -0.5688905328156232,
    z: -4.658701471255561,
    texture: "/models/Bogus Bennu Shape.STL",
  },
];

const Satellites = [
  {
    id: 1,
    name: "Moon",
    description:
      "Earth's only natural satellite, influencing tides and stabilizing its axial tilt.",
    x: -2.1619220049626535,
    y: 0.08058694789071329,
    z: -3.703380723502567,
    texture: "/textures/moon/moon.jpg",
    distance: "Average distance: 225,300 km, orbiting Earth in 27.3 days.",
  },
  {
    id: 2,
    name: "ISS",
    description:
      "A multinational space station conducting research in low Earth orbit.",
    x: -3.067719330988766,
    y: -0.3144062410836539,
    z: -3.0126090838281954,
    texture: "/models/demo/ISS_stationary.glb",
    distance:
      "Low Earth orbit, vital for scientific research and international collaboration.",
  },
  {
    id: 3,
    name: "Hubble",
    description:
      "A space telescope providing high-resolution images and breakthroughs in astrophysics.",
    x: -2.076001293412218,
    y: -0.07021984941466593,
    z: -3.6155928689387267,
    texture: "/models/demo/Hubble.glb",
    distance:
      "Low Earth orbit, crucial for observing distant galaxies and space phenomena.",
  },
  {
    id: 4,
    name: "Terra",
    description:
      "NASA's satellite monitoring Earth's climate and environmental changes.",

    x: -4.050251792359781,
    y: 0.858987400246678,
    z: -3.224561276043619,
    texture: "/models/demo/Terra.glb",
    distance:
      "Sun-synchronous orbit, provides consistent observation of Earth's surface and atmosphere.",
  },
  {
    id: 5,
    name: "ACRIMSAT",
    description:
      "NASA's satellite measuring solar radiation and its impact on Earth's climate.",
    x: -2.0479470282138723,
    y: -0.9660592233329801,
    z: -4.002596022523483,
    texture: "/models/demo/Active Cavity Irradiance Monitor Satellite.glb",
    distance:
      "Polar orbit, monitoring solar radiation and aiding climate research until 2013.",
  },
  {
    id: 6,
    name: "TDRS",
    description:
      "A network of satellites providing communication for NASA's space missions.",
    x: -3.0736491307684597,
    y: -0.4386819818805752,
    z: -2.73167322891193,
    texture: "/models/demo/Tracking and Data Relay Satellites (TDRS).glb",
    distance:
      "Geosynchronous orbit, ensuring continuous communication with low Earth orbit satellites.",
  },
  {
    id: 7,
    name: "Jason",
    description:
      "A satellite series measuring sea surface height, aiding climate and ocean studies.",
    x: -3.5622445066259796,
    y: 0.37813696082780923,
    z: -3.4126251327597608,
    distance:
      "Polar orbit, providing global data on sea level and ocean circulation.",
    texture: "/models/demo/Jason.glb",
  },
];

export { Planets, Comets, Satellites };
