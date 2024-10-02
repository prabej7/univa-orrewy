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
    x: 4.967257107715149,
    y: -0.5995526186674489,
    z: -0.09969983602064347,
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
    x: 5.533133480334558,
    y: -0.8603795328708657,
    z: 8.275888273958316,
    texture: "/textures/venus/venus.jpg",
    size: `The radius of Venus is 3,760 miles (6,052 kilometers), about the same width as Earth.`,
    distance: `Venus is 26 million miles (40 million kilometers) from the Sun, or about 0.72 AU. It takes sunlight 6.5 minutes to travel from the Sun to Venus.`,
  },
  {
    id: 3,
    name: "Earth",
    description: `Earth is the third planet from the Sun and the only known planet to harbor life. It has a diverse environment with oceans, continents, and a protective atmosphere. Earth's unique conditions, including its distance from the Sun and the presence of liquid water, make it suitable for supporting a wide variety of life forms. The planet has a single moon and completes one orbit around the Sun every 365.25 days.`,
    x: -4.124020654782992,
    y: -0.5848341884825323,
    z: 13.549716201176423,
    texture: "/textures/earth/earth.jpg",
    size: `The radius of Earth is 3,959 miles (6,371 kilometers), making it the largest of the inner planets.`,
    distance: `Earth orbits the Sun at an average distance of 93 million miles (150 million kilometers), or 1 astronomical unit (AU). It takes sunlight about 8 minutes to travel from the Sun to Earth.`,
  },
  {
    id: 4,
    name: "Mars",
    description: `Mars is the fourth planet from the Sun, known as the "Red Planet" due to its reddish appearance caused by iron oxide on its surface. It's the only planet where we've sent rovers to explore. Evidence suggests Mars once had a thicker atmosphere and was warmer and wetter billions of years ago. Its axis is tilted 25 degrees, similar to Earth's 23.4-degree tilt.`,
    x: -5.3214169559093225,
    y: -0.5041251199495296,
    z: 19.003382683856167,
    texture: "/textures/mars/mars.jpg",
    size: `The radius of Mars is 2,106 miles (3,390 kilometers), about half the size of Earth.`,
    distance: `Mars is 142 million miles (228 million kilometers) from the Sun, or about 1.5 astronomical units (AU). It takes sunlight 13 minutes to travel from the Sun to Mars.`,
  },
  {
    id: 5,
    name: "Saturn",
    description: `Saturn is a gas giant with spectacular rings, composed mainly of hydrogen and helium. It has numerous moons and a complex ring system made of ice, rock, and dust. With an equatorial diameter of 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. Its dense core is surrounded by liquid metallic hydrogen and an outer layer of liquid hydrogen.`,
    x: -30.26558991480119,
    y: -0.5285996444912708,
    z: -13.987610370968202,
    texture: "/textures/saturn/saturn.jpg",
    size: `The radius of Saturn is 36,184 miles (58,226 kilometers), about 9.1 times the radius of Earth.`,
    distance: `Saturn is 886 million miles (1.4 billion kilometers) from the Sun, or about 9.5 AU. It takes sunlight 80 minutes to travel from the Sun to Saturn.`,
  },
  {
    id: 6,
    name: "Jupiter",
    description: `Jupiter is the fifth and largest planet in our solar system. This gas giant has colorful swirling clouds and the Great Red Spot, a long-lasting storm. It rotates every 10 hours and orbits the Sun in about 12 Earth years. Jupiter has 95 known moons and a faint ring system.`,
    x: -23.768035981980503,
    y: -0.5512476094576968,
    z: 10.924501770836375,
    texture: "/textures/jupiter/jupiter.jpg",
    size: `Jupiter's radius is 43,441 miles (69,911 kilometers), about 11 times Earth's radius.`,
    distance: `Jupiter orbits at an average distance of 484 million miles (778 million kilometers) from the Sun, or 5.2 AU.`,
  },
  {
    id: 7,
    name: "Uranus",
    description:
      "Uranus is an ice giant with a unique 90-degree tilt, causing extreme seasons. It has 13 faint rings and 28 moons. Its blue-green color comes from methane in its atmosphere. Uranus is the coldest planet in our solar system, with an average temperature of -320°F (-195°C). Its mass is mostly composed of icy materials (water, methane, and ammonia) surrounding a rocky core.",
    x: -10.51676703630864,
    y: -0.21180173409574365,
    z: -41.08932215616667,
    texture: "/textures/uranus/uranus.jpg",
    size: `The radius of Uranus is 15,759 miles (25,312 kilometers), about 4 times the radius of Earth.`,
    distance: `Uranus is 1.8 billion miles (2.9 billion kilometers) from the Sun, or about 19.22 AU. It takes sunlight 2.7 hours to travel from the Sun to Uranus.`,
  },
  {
    id: 8,
    name: "Neptune",
    description:
      "Neptune, the eighth planet from the Sun, is an ice giant known for its blue color and strong winds. It was the first planet discovered through mathematical predictions. Neptune has a rocky core, is about 17 times Earth's mass, and has at least five rings. Its atmosphere is primarily hydrogen, helium, and methane, with an average temperature of -346°F (-210°C) at the cloud tops.",
    x: -10.51676703630864,
    y: -0.21180173409574365,
    z: -41.08932215616667,
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
    x: -3.076974258131603,
    y: -0.7756628376399405,
    z: 15.239912691014498,
    texture: "/models/hw1.stl",
  },
  {
    id: 2,
    name: "Toutatis",
    description: "An Apollo asteroid with an unusual rotation.",
    x: -1.012690507861752,
    y: -0.7697741553433589,
    z: 15.239912999999998,
    texture: "/models/toutatis.stl",
  },
  {
    id: 3,
    name: "Mithra",
    description: "A Mars-crossing asteroid with an irregular shape.",
    x: 0.9574413690957838,
    y: -0.7720551666915364,
    z: 15.262986662132722,
    texture: "/models/mithra.stl",
  },
  {
    id: 4,
    name: "Golevka",
    description: "An Earth-crossing asteroid named after three observatories.",
    x: 2.905756835792653,
    y: -0.7815461094196534,
    z: 15.254745577325002,
    texture: "/models/golevka.stl",
  },
  {
    id: 5,
    name: "Geographos",
    description: "An elongated near-Earth asteroid.",
    x: 5.020856793331149,
    y: -0.7612107503829016,
    z: 15.245010793173773,
    texture: "/models/geographos.stl",
  },
  {
    id: 6,
    name: "Bennu",
    description:
      "A potentially hazardous asteroid explored by OSIRIS-REx mission.",
    x: 6.945871553377385,
    y: -0.7861096568639556,
    z: 15.245011000000002,
    texture: "/models/Bogus Bennu Shape.STL",
  },
];



const Satellites = [
  {
    id: 1,
    name: "Moon",
    description: "Earth's only natural satellite, influencing tides and stabilizing its axial tilt.",
    x: 0.01103554060671541,
    y: 0.018060854693510982,
    z: 13.408741782359398,
    texture: "/textures/moon/moon.jpg",
    distance: "Average distance: 225,300 km, orbiting Earth in 27.3 days."
  },
  {
    id: 2,
    name: "ISS",
    description: "A multinational space station conducting research in low Earth orbit.",
    x: -3.1212687463330546,
    y: -0.6001289566152528,
    z: 14.796341297690576,
    texture: "/models/demo/ISS_stationary.glb",
    distance: "Low Earth orbit, vital for scientific research and international collaboration."
  },
  {
    id: 3,
    name: "Hubble",
    description: "A space telescope providing high-resolution images and breakthroughs in astrophysics.",
    x: -2.065415383908572,
    y: -0.6171265593917391,
    z: 14.83119459678118,
    texture: "/models/demo/Hubble.glb",
    distance: "Low Earth orbit, crucial for observing distant galaxies and space phenomena."
  },
  {
    id: 4,
    name: "Terra",
    description: "NASA's satellite monitoring Earth's climate and environmental changes.",
    x: -4.0737263415761245,
    y: 0.27899562550581064,
    z: 15.274932629351019,
    texture: "/models/demo/Terra.glb",
    distance: "Sun-synchronous orbit, provides consistent observation of Earth's surface and atmosphere."
  },
  {
    id: 5,
    name: "ACRIMSAT",
    description: "NASA's satellite measuring solar radiation and its impact on Earth's climate.",
    x: -2.046356827698301,
    y: -1.5446158743051186,
    z: 14.48726630982377,
    texture: "/models/demo/Active Cavity Irradiance Monitor Satellite.glb",
    distance: "Polar orbit, monitoring solar radiation and aiding climate research until 2013."
  },
  {
    id: 6,
    name: "TDRS",
    description: "A network of satellites providing communication for NASA's space missions.",
    x: -3.0427203847002255,
    y: -1.1988464416044267,
    z: 16.1520114485097,
    texture: "/models/demo/Tracking and Data Relay Satellites (TDRS).glb",
    distance: "Geosynchronous orbit, ensuring continuous communication with low Earth orbit satellites."
  },
  {
    id: 7,
    name: "Jason",
    description: "A satellite series measuring sea surface height, aiding climate and ocean studies.",
    x: -4.552495765561153,
    y: -0.20266708419886498,
    z: 15.126812623497223,
    distance: "Polar orbit, providing global data on sea level and ocean circulation.",
    texture: "/models/demo/Jason.glb"
  },
];


export { Planets, Comets, Satellites };
