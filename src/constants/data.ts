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
    x
      :
      3.8323313814951785,
    y
      :
      -0.5624656263789163,
    z
      :
      0.040513585623711657,
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

    x
      :
      3.6326828226842784,
    y
      :
      -0.9163584857071365,
    z
      :
      4.583610716423337,
    texture: "/textures/venus/venus.jpg",
    size: `The radius of Venus is 3,760 miles (6,052 kilometers), about the same width as Earth.`,
    distance: `Venus is 26 million miles (40 million kilometers) from the Sun, or about 0.72 AU. It takes sunlight 6.5 minutes to travel from the Sun to Venus.`,
  },
  {
    id: 3,
    name: "Earth",
    description: `Earth is the third planet from the Sun and the only known planet to harbor life. It has a diverse environment with oceans, continents, and a protective atmosphere. Earth's unique conditions, including its distance from the Sun and the presence of liquid water, make it suitable for supporting a wide variety of life forms. The planet has a single moon and completes one orbit around the Sun every 365.25 days.`,
    x
      :
      -0.8222104038135492,
    y
      :
      -0.371632145613756,
    z
      :
      10.50550260608583,
    texture: "/textures/earth/earth.jpg",
    size: `The radius of Earth is 3,959 miles (6,371 kilometers), making it the largest of the inner planets.`,
    distance: `Earth orbits the Sun at an average distance of 93 million miles (150 million kilometers), or 1 astronomical unit (AU). It takes sunlight about 8 minutes to travel from the Sun to Earth.`,
  },
  {
    id: 4,
    name: "Mars",
    description: `Mars is the fourth planet from the Sun, known as the "Red Planet" due to its reddish appearance caused by iron oxide on its surface. It's the only planet where we've sent rovers to explore. Evidence suggests Mars once had a thicker atmosphere and was warmer and wetter billions of years ago. Its axis is tilted 25 degrees, similar to Earth's 23.4-degree tilt.`,
    x
      :
      -6.290201702307538,
    y
      :
      -0.5379452859408081,
    z
      :
      13.338656860995194,
    texture: "/textures/mars/mars.jpg",
    size: `The radius of Mars is 2,106 miles (3,390 kilometers), about half the size of Earth.`,
    distance: `Mars is 142 million miles (228 million kilometers) from the Sun, or about 1.5 astronomical units (AU). It takes sunlight 13 minutes to travel from the Sun to Mars.`,
  },
  {
    id: 5,
    name: "Saturn",
    description: `Saturn is a gas giant with spectacular rings, composed mainly of hydrogen and helium. It has numerous moons and a complex ring system made of ice, rock, and dust. With an equatorial diameter of 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. Its dense core is surrounded by liquid metallic hydrogen and an outer layer of liquid hydrogen.`,
    x
      :
      -80.59190467667658,
    y
      :
      -2.2770391493556126,
    z
      :
      55.1005880935182,
    texture: "/textures/saturn/saturn.jpg",
    size: `The radius of Saturn is 36,184 miles (58,226 kilometers), about 9.1 times the radius of Earth.`,
    distance: `Saturn is 886 million miles (1.4 billion kilometers) from the Sun, or about 9.5 AU. It takes sunlight 80 minutes to travel from the Sun to Saturn.`,
  },
  {
    id: 6,
    name: "Jupiter",
    description: `Jupiter is the fifth and largest planet in our solar system. This gas giant has colorful swirling clouds and the Great Red Spot, a long-lasting storm. It rotates every 10 hours and orbits the Sun in about 12 Earth years. Jupiter has 95 known moons and a faint ring system.`,
    x
      :
      -11.47074183327588,
    y
      :
      -1.8099521977085473,
    z
      :
      52.243538045131935,
    texture: "/textures/jupiter/jupiter.jpg",
    size: `Jupiter's radius is 43,441 miles (69,911 kilometers), about 11 times Earth's radius.`,
    distance: `Jupiter orbits at an average distance of 484 million miles (778 million kilometers) from the Sun, or 5.2 AU.`,
  },
  {
    id: 7,
    name: "Uranus",
    description:
      "Uranus is an ice giant with a unique 90-degree tilt, causing extreme seasons. It has 13 faint rings and 28 moons. Its blue-green color comes from methane in its atmosphere. Uranus is the coldest planet in our solar system, with an average temperature of -320°F (-195°C). Its mass is mostly composed of icy materials (water, methane, and ammonia) surrounding a rocky core.",
    x
      :
      -13.534419926028638,
    y
      :
      -3.0806922416934124,
    z
      :
      196.0209973506443,
    texture: "/textures/uranus/uranus.jpg",
    size: `The radius of Uranus is 15,759 miles (25,312 kilometers), about 4 times the radius of Earth.`,
    distance: `Uranus is 1.8 billion miles (2.9 billion kilometers) from the Sun, or about 19.22 AU. It takes sunlight 2.7 hours to travel from the Sun to Uranus.`,
  },
  {
    id: 8,
    name: "Neptune",
    description:
      "Neptune, the eighth planet from the Sun, is an ice giant known for its blue color and strong winds. It was the first planet discovered through mathematical predictions. Neptune has a rocky core, is about 17 times Earth's mass, and has at least five rings. Its atmosphere is primarily hydrogen, helium, and methane, with an average temperature of -346°F (-210°C) at the cloud tops.",
    x
      :
      -62.035429149721544,
    y
      :
      -9.790749607757295,
    z
      :
      292.7681052785489,
    texture: "/textures/neptune/neptune.jpg",
    size: `The radius of Neptune is 15,299 miles (24,622 kilometers), about 4 times the radius of Earth.`,
    distance: `Neptune is 2.8 billion miles (4.5 billion kilometers) from the Sun, or about 30.07 AU. It takes sunlight 5.4 hours to travel from the Sun to Neptune.`,
  },
  {
    id: 9,
    name: "Sun",
    description:
      "The Sun is a huge ball of hydrogen and helium held together by its own gravity. It has several regions, including the core, radiative zone, convection zone, photosphere, chromosphere, transition zone, and corona. The Sun's heat and light are powered by nuclear reactions in the core. Energy from the core is carried outward by radiation and convection. The Sun's magnetic fields extend out into space to form the interplanetary magnetic field, which is carried through the solar system by the solar wind.",
    x
      :
      -62.33963358788907,
    y
      :
      -9.587046913279075,
    z
      :
      292.81579261985445,
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
    x
      :
      -4.337914740457111,
    y
      :
      -2.4516259917907166,
    z
      :
      11.373892660205545,
    texture: "/models/hw1.stl",
  },
  {
    id: 2,
    name: "Toutatis",
    description:
      "Toutatis is an asteroid that was closely observed by NASA in December 2012. It has a very slow rotational state and is expected to safely pass by Earth again in November 2069. There is no risk of an Earth impact for the next several centuries.",
    x
      :
      -2.1051134392823845,
    y
      :
      -0.25650109548227507,
    z
      :
      9.07751639895842,
    texture: "/models/toutatis.stl",
  },
  {
    id: 3,
    name: "Mithra",
    description:
      'Mithra is a mid-sized asteroid that orbits the Sun every 3.26 years. It has been classified as a "Potentially Hazardous Asteroid" due to its predicted close passes with Earth. Mithra is about 1.8 kilometers in diameter and completes a rotation on its axis every 67.50 hours. It is not considered a viable target for human exploration due to its relatively large distance from Earth\'s orbit.',
    x
      :
      -0.13384637207464745,
    y
      :
      0.6245837115062763,
    z
      :
      8.915925836799072,
    texture: "/models/mithra.stl",
  },
  {
    id: 4,
    name: "Golevka",
    description:
      'Golevka is a small asteroid that orbits the Sun every 3.92 years. It has been classified as a "Potentially Hazardous Asteroid" due to its predicted close passes with Earth. Golevka is about 0.5 kilometers in diameter and completes a rotation on its axis every 6.03 hours. It is not considered a viable target for human exploration due to its relatively large distance from Earth\'s orbit.',
    x
      :
      -0.3814327438835119,
    y
      :
      -0.433547992552449,
    z
      :
      8.933196146116522,
    texture: "/models/golevka.stl",
  },
  {
    id: 5,
    name: "Geographos",
    description:
      'Geographos is a mid-sized asteroid that orbits the Sun every 1.39 years. It has been classified as a "Potentially Hazardous Asteroid" due to its predicted close passes with Earth. Geographos is about 2.6 kilometers in diameter and completes a rotation on its axis every 5.22 hours. It was last officially observed on April 21, 2023.',
    x
      :
      -1.9986209666973298,
    y
      :
      0.8559946681205872,
    z
      :
      9.175818625743917,
    texture: "/models/geographos.stl",
  },
  {
    id: 6,
    name: "Bennu",
    description:
      "Bennu is a small, near-Earth asteroid that was explored by NASA's OSIRIS-REx mission. It is a carbon-rich asteroid that formed in the main asteroid belt and has drifted closer to Earth over time. Bennu is about half a kilometer wide and may contain organic molecules similar to those that could have been involved with the start of life on Earth.",
    x
      :
      -0.7192578293727572,
    y
      :
      -0.5765608562719688,
    z
      :
      9.09863925820946,
    texture: "/models/Bogus Bennu Shape.STL",
  },
];

const Satellites = [
  {
    id: 1,
    name: "Moon",
    description:
      "The Moon is Earth's only natural satellite. It is a spherical rocky body that orbits Earth at a mean distance of about 384,000 km. Its surface gravity is only about one-sixth of Earth's. The Moon's surface is covered in craters and dark plains called maria.",
    x
      :
      1.0994170098768161,
    y
      :
      0.06543234277458818,
    z
      :
      10.058109284356261,
    texture: "/textures/moon/moon.jpg",
    distance: "Average distance: 225,300 km, orbiting Earth in 27.3 days.",
  },
  {
    id: 2,
    name: "ISS",
    description:
      "The International Space Station (ISS) is a joint project of five space agencies: NASA (USA), Roscosmos (Russia), ESA (Europe), JAXA (Japan), and CSA (Canada). It is a large spacecraft orbiting Earth, serving as a home for astronauts and cosmonauts and a unique science laboratory. Each agency contributes hardware and expertise, and the station relies on all partners to function.",
    x
      :
      0.16312138248348398,
    y
      :
      -0.3178716090003927,
    z
      :
      10.739502011013006,
    texture: "/models/demo/ISS_stationary.glb",
    distance:
      "The International Space Station maintains an orbit approximately 250 miles (400 kilometers) above sea level, while the Hubble Space Telescope operates at an altitude of about 340 miles (550 kilometers).",
  },
  {
    id: 3,
    name: "Hubble",
    description:
      "The Hubble Space Telescope, named after astronomer Edwin Hubble, is a large space-based observatory launched in 1990. It has made significant contributions to astronomy, including discovering new galaxies, moons, and planetary systems, and providing insights into the history of the universe.",
    x
      :
      1.1970248929849214,
    y
      :
      -0.06015731259712887,
    z
      :
      10.132338697160224,
    texture: "/models/demo/Hubble.glb",
    distance:
      "The Hubble Space Telescope orbits just above Earth's atmosphere at an altitude of approximately 320 miles (515 km). Hubble orbits at a speed of 17,000 miles per hour (27,000 kph) and completes one orbit approximately every 95 minutes.",
  },
  {
    id: 4,
    name: "Terra",
    description:
      "This is an article about NASA’s Terra satellite. It discusses Terra’s mission and the instruments it carries. Terra was launched in 1999 to study how the Earth system works and how it is changing. It carries five instruments that observe different aspects of the Earth, such as its atmosphere, land, and energy budget. Terra has provided important data about natural hazards and human impact on the planet.",

    x
      :
      -0.7900625717604003,
    y
      :
      0.8626818849533548,
    z
      :
      10.550812664011021,
    texture: "/models/demo/Terra.glb",
    distance:
      "Sun-synchronous orbit, provides consistent observation of Earth's surface and atmosphere.",
  },
  {
    id: 5,
    name: "ACRIMSAT",
    description:
      "The ACRIMSAT satellite was launched in 1999 to measure the sun's total irradiance. It was part of NASA's Earth Observing System program. The satellite's mission was to extend the TSI observational database and relate past and future TSI databases using comparisons with other experiments. It was also designed to investigate the multidecadal upward TSI trend during solar cycles 21-23 and provide a redundant monitoring capability to prevent catastrophic loss of the TSI longterm database.",
    x
      :
      1.1900967722581095,
    y
      :
      -0.9722067663848382,
    z
      :
      9.76497092441068,
    texture: "/models/demo/Active Cavity Irradiance Monitor Satellite.glb",
    distance:
      "It was placed into a high inclination, 700 km. sun-synchronous orbit from which the ACRIM3 instrument monitored total solar irradiance (TSI",
  },
  {
    id: 6,
    name: "TDRS",
    description:
      "TDRS-13 is a communications satellite operated by NASA. It was launched in 2017 and is part of the Tracking and Data Relay Satellite System. The satellite provides S, Ku, and Ka band communications for other spacecraft. It was damaged during the encapsulation process before launch but was still successfully launched.",
    x
      :
      0.19856714394029784,
    y
      :
      -0.43337213694586063,
    z
      :
      11.009582325231053,
    texture: "/models/demo/Tracking and Data Relay Satellites (TDRS).glb",
    distance:
      "These TDRSS satellites are all designed and built to be launched to and function in geosynchronous orbit, 35,786 km (22,236 mi) above the surface of the Earth.",
  },
  {
    id: 7,
    name: "Jason",
    description:
      "Jason-3 is a satellite that measures sea level. It was launched in 2016 and is part of a series of satellites that have been making measurements of sea level since the 1990s. Jason-3 will help scientists learn more about ocean circulation and climate change.",
    x
      :
      -0.30941481338058424,
    y
      :
      0.4068889448888615,
    z
      :
      10.35331416281793,
    distance:
      "Jason-3 operates in low Earth orbit at 1336km altitude. Its main instrument is a radar altimeter that provides measurements of sea surface height, wind speed at the ocean surface and significant wave height.",
    texture: "/models/demo/Jason.glb",
  },
];

export { Planets, Comets, Satellites };
