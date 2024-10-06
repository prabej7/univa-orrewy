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
    description:
      "The Sun is a huge ball of hydrogen and helium held together by its own gravity. It has several regions, including the core, radiative zone, convection zone, photosphere, chromosphere, transition zone, and corona. The Sun's heat and light are powered by nuclear reactions in the core. Energy from the core is carried outward by radiation and convection. The Sun's magnetic fields extend out into space to form the interplanetary magnetic field, which is carried through the solar system by the solar wind.",
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
    description:
      "Halley's Comet is a famous comet that orbits the Sun every 76 years. It was named after British astronomer Edmond Halley, who determined that periodic sightings of the comet were in fact of the same object. During its last close approach in 1986, several spacecraft were sent to examine it. The comet's orbit takes it from within the orbit of Venus to beyond the orbit of Neptune. Halley's Comet is also responsible for the annual Eta Aquarid and Orionid meteor showers.",
    x: -7.552960150067171,
    y: -2.4437396827599023,
    z: -2.384149892473595,
    texture: "/models/hw1.stl",
  },
  {
    id: 2,
    name: "Toutatis",
    description:
      "Toutatis is an asteroid that was closely observed by NASA in December 2012. It has a very slow rotational state and is expected to safely pass by Earth again in November 2069. There is no risk of an Earth impact for the next several centuries.",
    x: -5.383219022769962,
    y: -0.26289314296127103,
    z: -4.675647331639647,
    texture: "/models/toutatis.stl",
  },
  {
    id: 3,
    name: "Mithra",
    description:
      'Mithra is a mid-sized asteroid that orbits the Sun every 3.26 years. It has been classified as a "Potentially Hazardous Asteroid" due to its predicted close passes with Earth. Mithra is about 1.8 kilometers in diameter and completes a rotation on its axis every 67.50 hours. It is not considered a viable target for human exploration due to its relatively large distance from Earth\'s orbit.',
    x: -3.315645843114135,
    y: 0.6253530173489932,
    z: -4.8440332015533105,
    texture: "/models/mithra.stl",
  },
  {
    id: 4,
    name: "Golevka",
    description:
      'Golevka is a small asteroid that orbits the Sun every 3.92 years. It has been classified as a "Potentially Hazardous Asteroid" due to its predicted close passes with Earth. Golevka is about 0.5 kilometers in diameter and completes a rotation on its axis every 6.03 hours. It is not considered a viable target for human exploration due to its relatively large distance from Earth\'s orbit.',
    x: -3.654140021491372,
    y: -0.4240800172050749,
    z: -4.838082375440323,
    texture: "/models/golevka.stl",
  },
  {
    id: 5,
    name: "Geographos",
    description:
      'Geographos is a mid-sized asteroid that orbits the Sun every 1.39 years. It has been classified as a "Potentially Hazardous Asteroid" due to its predicted close passes with Earth. Geographos is about 2.6 kilometers in diameter and completes a rotation on its axis every 5.22 hours. It was last officially observed on April 21, 2023.',
    x: -5.234604149764206,
    y: 0.855617102546409,
    z: -4.574020989451821,
    texture: "/models/geographos.stl",
  },
  {
    id: 6,
    name: "Bennu",
    description:
      "Bennu is a small, near-Earth asteroid that was explored by NASA's OSIRIS-REx mission. It is a carbon-rich asteroid that formed in the main asteroid belt and has drifted closer to Earth over time. Bennu is about half a kilometer wide and may contain organic molecules similar to those that could have been involved with the start of life on Earth.",
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
      "The Moon is Earth's only natural satellite. It is a spherical rocky body that orbits Earth at a mean distance of about 384,000 km. Its surface gravity is only about one-sixth of Earth's. The Moon's surface is covered in craters and dark plains called maria.",
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
      "The International Space Station (ISS) is a joint project of five space agencies: NASA (USA), Roscosmos (Russia), ESA (Europe), JAXA (Japan), and CSA (Canada). It is a large spacecraft orbiting Earth, serving as a home for astronauts and cosmonauts and a unique science laboratory. Each agency contributes hardware and expertise, and the station relies on all partners to function.",
    x: -3.067719330988766,
    y: -0.3144062410836539,
    z: -3.0126090838281954,
    texture: "/models/demo/ISS_stationary.glb",
    distance:
      "The International Space Station maintains an orbit approximately 250 miles (400 kilometers) above sea level, while the Hubble Space Telescope operates at an altitude of about 340 miles (550 kilometers).",
  },
  {
    id: 3,
    name: "Hubble",
    description:
      "The Hubble Space Telescope, named after astronomer Edwin Hubble, is a large space-based observatory launched in 1990. It has made significant contributions to astronomy, including discovering new galaxies, moons, and planetary systems, and providing insights into the history of the universe.",
    x: -2.076001293412218,
    y: -0.07021984941466593,
    z: -3.6155928689387267,
    texture: "/models/demo/Hubble.glb",
    distance:
      "The Hubble Space Telescope orbits just above Earth's atmosphere at an altitude of approximately 320 miles (515 km). Hubble orbits at a speed of 17,000 miles per hour (27,000 kph) and completes one orbit approximately every 95 minutes.",
  },
  {
    id: 4,
    name: "Terra",
    description:
      "This is an article about NASA’s Terra satellite. It discusses Terra’s mission and the instruments it carries. Terra was launched in 1999 to study how the Earth system works and how it is changing. It carries five instruments that observe different aspects of the Earth, such as its atmosphere, land, and energy budget. Terra has provided important data about natural hazards and human impact on the planet.",

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
      "The ACRIMSAT satellite was launched in 1999 to measure the sun's total irradiance. It was part of NASA's Earth Observing System program. The satellite's mission was to extend the TSI observational database and relate past and future TSI databases using comparisons with other experiments. It was also designed to investigate the multidecadal upward TSI trend during solar cycles 21-23 and provide a redundant monitoring capability to prevent catastrophic loss of the TSI longterm database.",
    x: -2.0479470282138723,
    y: -0.9660592233329801,
    z: -4.002596022523483,
    texture: "/models/demo/Active Cavity Irradiance Monitor Satellite.glb",
    distance:
      "It was placed into a high inclination, 700 km. sun-synchronous orbit from which the ACRIM3 instrument monitored total solar irradiance (TSI",
  },
  {
    id: 6,
    name: "TDRS",
    description:
      "TDRS-13 is a communications satellite operated by NASA. It was launched in 2017 and is part of the Tracking and Data Relay Satellite System. The satellite provides S, Ku, and Ka band communications for other spacecraft. It was damaged during the encapsulation process before launch but was still successfully launched.",
    x: -3.0736491307684597,
    y: -0.4386819818805752,
    z: -2.73167322891193,
    texture: "/models/demo/Tracking and Data Relay Satellites (TDRS).glb",
    distance:
      "These TDRSS satellites are all designed and built to be launched to and function in geosynchronous orbit, 35,786 km (22,236 mi) above the surface of the Earth.",
  },
  {
    id: 7,
    name: "Jason",
    description:
      "Jason-3 is a satellite that measures sea level. It was launched in 2016 and is part of a series of satellites that have been making measurements of sea level since the 1990s. Jason-3 will help scientists learn more about ocean circulation and climate change.",
    x: -3.5622445066259796,
    y: 0.37813696082780923,
    z: -3.4126251327597608,
    distance:
      "Jason-3 operates in low Earth orbit at 1336km altitude. Its main instrument is a radar altimeter that provides measurements of sea surface height, wind speed at the ocean surface and significant wave height.",
    texture: "/models/demo/Jason.glb",
  },
];

export { Planets, Comets, Satellites };
