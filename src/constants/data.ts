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
    x: 5.163944658317256,
    y: -0.4451319397395146,
    z: 4.765664077638512,
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
    x: 5.184967686554715,
    y: -0.5103810290769379,
    z: 11.187469260405495,
    texture: "/textures/venus/venus.jpg",
    size: `The radius of Venus is 3,760 miles (6,052 kilometers), about the same width as Earth.`,
    distance: `Venus is 26 million miles (40 million kilometers) from the Sun, or about 0.72 AU. It takes sunlight 6.5 minutes to travel from the Sun to Venus.`,
  },
  {
    id: 3,
    name: "Earth",
    description: `Earth is the third planet from the Sun and the only known planet to harbor life. It has a diverse environment with oceans, continents, and a protective atmosphere. Earth's unique conditions, including its distance from the Sun and the presence of liquid water, make it suitable for supporting a wide variety of life forms. The planet has a single moon and completes one orbit around the Sun every 365.25 days.`,
    x: -4.139865258842872,
    y: -0.5167347954739037,
    z: 16.873746598510994,
    texture: "/textures/earth/earth.jpg",
    size: `The radius of Earth is 3,959 miles (6,371 kilometers), making it the largest of the inner planets.`,
    distance: `Earth orbits the Sun at an average distance of 93 million miles (150 million kilometers), or 1 astronomical unit (AU). It takes sunlight about 8 minutes to travel from the Sun to Earth.`,
  },
  {
    id: 4,
    name: "Mars",
    description: `Mars is the fourth planet from the Sun, known as the "Red Planet" due to its reddish appearance caused by iron oxide on its surface. It's the only planet where we've sent rovers to explore. Evidence suggests Mars once had a thicker atmosphere and was warmer and wetter billions of years ago. Its axis is tilted 25 degrees, similar to Earth's 23.4-degree tilt.`,
    x: -5.247553707917277,
    y: -0.5199086392586776,
    z: 21.182276222189046,
    texture: "/textures/mars/mars.jpg",
    size: `The radius of Mars is 2,106 miles (3,390 kilometers), about half the size of Earth.`,
    distance: `Mars is 142 million miles (228 million kilometers) from the Sun, or about 1.5 astronomical units (AU). It takes sunlight 13 minutes to travel from the Sun to Mars.`,
  },
  {
    id: 5,
    name: "Saturn",
    description: `Saturn is a gas giant with spectacular rings, composed mainly of hydrogen and helium. It has numerous moons and a complex ring system made of ice, rock, and dust. With an equatorial diameter of 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. Its dense core is surrounded by liquid metallic hydrogen and an outer layer of liquid hydrogen.`,
    x: -29.705598402028464,
    y: -0.38115591725419407,
    z: -16.071830772860682,
    texture: "/textures/saturn/saturn.jpg",
    size: `The radius of Saturn is 36,184 miles (58,226 kilometers), about 9.1 times the radius of Earth.`,
    distance: `Saturn is 886 million miles (1.4 billion kilometers) from the Sun, or about 9.5 AU. It takes sunlight 80 minutes to travel from the Sun to Saturn.`,
  },
  {
    id: 6,
    name: "Jupiter",
    description: `Jupiter is the fifth and largest planet in our solar system. This gas giant has colorful swirling clouds and the Great Red Spot, a long-lasting storm. It rotates every 10 hours and orbits the Sun in about 12 Earth years. Jupiter has 95 known moons and a faint ring system.`,
    x: -23.398550447333122,
    y: -0.5707578352055762,
    z: 15.640872734932664,
    texture: "/textures/jupiter/jupiter.jpg",
    size: `Jupiter's radius is 43,441 miles (69,911 kilometers), about 11 times Earth's radius.`,
    distance: `Jupiter orbits at an average distance of 484 million miles (778 million kilometers) from the Sun, or 5.2 AU.`,
  },
  {
    id: 7,
    name: "Uranus",
    description:
      "Uranus is an ice giant with a unique 90-degree tilt, causing extreme seasons. It has 13 faint rings and 28 moons. Its blue-green color comes from methane in its atmosphere. Uranus is the coldest planet in our solar system, with an average temperature of -320°F (-195°C). Its mass is mostly composed of icy materials (water, methane, and ammonia) surrounding a rocky core.",
    x: -10.289499251067905,
    y: -0.5198764080241478,
    z: -31.72096216494644,
    texture: "/textures/uranus/uranus.jpg",
    size: `The radius of Uranus is 15,759 miles (25,312 kilometers), about 4 times the radius of Earth.`,
    distance: `Uranus is 1.8 billion miles (2.9 billion kilometers) from the Sun, or about 19.22 AU. It takes sunlight 2.7 hours to travel from the Sun to Uranus.`,
  },
  {
    id: 8,
    name: "Neptune",
    description:
      "Neptune, the eighth planet from the Sun, is an ice giant known for its blue color and strong winds. It was the first planet discovered through mathematical predictions. Neptune has a rocky core, is about 17 times Earth's mass, and has at least five rings. Its atmosphere is primarily hydrogen, helium, and methane, with an average temperature of -346°F (-210°C) at the cloud tops.",
    x: 28.95295093516801,
    y: -0.384761134481981,
    z: -28.409786348456493,
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
    x: -3.0264432930426732,
    y: -0.7823426647816174,
    z: 18.49126969865587,
    texture: "/models/hw1.stl",
  },
  {
    id: 2,
    name: "Toutatis",
    description: "An Apollo asteroid with an unusual rotation.",
    x: -1.023428268382982,
    y: -0.7567373120962109,
    z: 18.500878632116564,
    texture: "/models/toutatis.stl",
  },
  {
    id: 3,
    name: "Mithra",
    description: "A Mars-crossing asteroid with an irregular shape.",
    x: 0.9713829120321188,
    y: -0.7826228440693535,
    z: 18.497190188028206,
    texture: "/models/mithra.stl",
  },
  {
    id: 4,
    name: "Golevka",
    description: "An Earth-crossing asteroid named after three observatories.",
    x: 2.9658368157446366,
    y: -0.7705068093477756,
    z: 18.483062479081116,
    texture: "/models/golevka.stl",
  },
  {
    id: 5,
    name: "Geographos",
    description: "An elongated near-Earth asteroid.",
    x: 5.06458164315816,
    y: -0.7907310602764672,
    z: 18.476038175902755,
    texture: "/models/geographos.stl",
  },
  {
    id: 6,
    name: "Bennu",
    description:
      "A potentially hazardous asteroid explored by OSIRIS-REx mission.",
    x: 6.946868212587701,
    y: -0.7884000724440419,
    z: 18.463426084589372,
    texture: "/models/Bogus Bennu Shape.STL",
  },
];

const Satellites = [
  {
    id: 1,
    name: "Moon",
    description:
      "Earth's only natural satellite, influencing tides and stabilizing its axial tilt.",
    x: -0.003082368878813614,
    y: 0.0451447629705829,
    z: 16.630187650255507,
    texture: "/textures/moon/moon.jpg",
    distance: "Average distance: 225,300 km, orbiting Earth in 27.3 days.",
  },
  {
    id: 2,
    name: "ISS",
    description:
      "A multinational space station conducting research in low Earth orbit.",
    x: -3.0889801930554337,
    y: -0.5823447147577355,
    z: 18.01397883349798,
    texture: "/models/demo/ISS_stationary.glb",
    distance:
      "Low Earth orbit, vital for scientific research and international collaboration.",
  },
  {
    id: 3,
    name: "Hubble",
    description:
      "A space telescope providing high-resolution images and breakthroughs in astrophysics.",
    x: -2.069890049102807,
    y: -0.6202054699787194,
    z: 18.04341907615737,
    texture: "/models/demo/Hubble.glb",
    distance:
      "Low Earth orbit, crucial for observing distant galaxies and space phenomena.",
  },
  {
    id: 4,
    name: "Terra",
    description:
      "NASA's satellite monitoring Earth's climate and environmental changes.",

    x: -4.058438680041912,
    y: 0.28155490170459135,
    z: 18.49024845956664,
    texture: "/models/demo/Terra.glb",
    distance:
      "Sun-synchronous orbit, provides consistent observation of Earth's surface and atmosphere.",
  },
  {
    id: 5,
    name: "ACRIMSAT",
    description:
      "NASA's satellite measuring solar radiation and its impact on Earth's climate.",
    x: -2.063026937363905,
    y: -1.546790514713669,
    z: 17.70938893415412,
    texture: "/models/demo/Active Cavity Irradiance Monitor Satellite.glb",
    distance:
      "Polar orbit, monitoring solar radiation and aiding climate research until 2013.",
  },
  {
    id: 6,
    name: "TDRS",
    description:
      "A network of satellites providing communication for NASA's space missions.",
    x: -3.072297721014935,
    y: -1.1907962209543241,
    z: 19.374785474505504,
    texture: "/models/demo/Tracking and Data Relay Satellites (TDRS).glb",
    distance:
      "Geosynchronous orbit, ensuring continuous communication with low Earth orbit satellites.",
  },
  {
    id: 7,
    name: "Jason",
    description:
      "A satellite series measuring sea surface height, aiding climate and ocean studies.",
    x: -4.552550056333157,
    y: -0.2042523924417022,
    z: 18.348557309260187,
    distance:
      "Polar orbit, providing global data on sea level and ocean circulation.",
    texture: "/models/demo/Jason.glb",
  },
];

export { Planets, Comets, Satellites };
