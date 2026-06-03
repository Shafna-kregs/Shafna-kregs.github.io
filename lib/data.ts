// Profile data - Edit this file to customize the portfolio
export const profileData = {
  name: "Dr. Aji A.",
  lastName: "Anappara",
  title: "Professor",
  department: "Department of Physics",
  institution: "NIT Calicut",
  lab: "Photonic Materials and Devices Laboratory",
  location: "National Institute of Technology Calicut, Kerala, India",
  
  // Contact information
  contact: {
    office: "PH 117 (B), First Floor, Physics Building",
    address: "Department of Physics, NIT Calicut\nKerala, India – 673 601",
    phone: "+91-(0)495-2285107",
    email: "aji@nitc.ac.in",
    departmentUrl: "https://physics.nitc.ac.in/index.php?option=com_content&view=article&id=18&Itemid=435"
  },

  // Research areas (tags)
  researchAreas: [
    "Optoelectronics",
    "Nanomaterials", 
    "Photodetectors",
    "Neuromorphic Devices",
    "Light–Matter Interaction",
    "Ionotronics"
  ],

  // Statistics
  stats: {
    journalPapers: "41+",
    patents: "15",
    phdStudents: "10+",
    yearsAtNITC: "15+"
  },

  // About section
  about: {
    intro: `Dr. Aji A. Anappara is a <strong>Professor</strong> in the Department of Physics at the National Institute of Technology Calicut. His research focuses on <strong>advanced functional materials, optoelectronic devices, and light–matter interactions</strong>, with an emphasis on translating fundamental science into practical technologies and patented innovations.`,
    phd: `He completed his <strong>Ph.D.</strong> under the guidance of Prof. Dr. Alessandro Tredicucci at the NEST (National Enterprise for nanoScience and nanoTechnology), <strong>Scuola Normale Superiore, Pisa, Italy</strong>.`,
    postdoc: `Following his doctoral studies, he was awarded a prestigious fellowship from the <strong>Alexander von Humboldt Foundation</strong>, where he worked with Prof. Alfred Leitenstorfer and Prof. Rupert Huber at the <strong>University of Konstanz</strong>.`,
    current: `He joined NIT Calicut in <strong>November 2010</strong> as an Assistant Professor and is currently a Professor. He leads the <strong>Photonic Materials and Devices Laboratory</strong>, working at the interface of nanomaterials, optoelectronics, and ionotronic systems.`
  },

  // Education
  education: [
    { degree: "Ph.D. in Physics", institution: "Scuola Normale Superiore, Pisa, Italy", year: "2008" },
    { degree: "M.Phil.", institution: "Kerala University", year: "2003" },
    { degree: "M.Sc. Physics", institution: "Kerala University", year: "2000" }
  ],

  // Professional Experience
  experience: [
    { position: "Professor", institution: "NIT Calicut", period: "2022–Present" },
    { position: "Associate Professor", institution: "NIT Calicut", period: "2018–2022" },
    { position: "Assistant Professor", institution: "NIT Calicut", period: "2010–2018" }
  ],

  // Funding info
  funding: {
    current: "ANRF-ARG (~₹63.96 lakhs, 2026–2029)",
    description: "next-generation self-powered high-temperature broadband photodetectors"
  }
}

// Research areas with descriptions
export const researchAreas = [
  {
    id: "optoelectronics",
    title: "OPTOELECTRONICS",
    heading: "Next-Gen Self-Powered Photodetectors",
    description: "Developing self-powered, broadband (UV–Vis–NIR) photodetectors with zero-bias operation on flexible substrates. High-temperature operation up to ~500°C, surpassing conventional Si and InGaAs technologies.",
    icon: "📡",
    image: "/images/optoelectronics.png"
  },
  {
    id: "neuromorphic",
    title: "NEUROMORPHIC",
    heading: "Bio-inspired Optoelectronics & Artificial Vision",
    description: "Retinomorphic and event-driven photodetectors that emulate the adaptive human visual system. Opto-ionotronic synaptic devices integrating optoelectronics with ionic transport for neuromorphic computing.",
    icon: "👁️",
    image: "/images/neuromorphic.png"
  },
  {
    id: "ionotronics",
    title: "IONOTRONICS",
    heading: "Optofluidics & Ionotronic Architectures",
    description: "Optofluidic platforms coupled with solid-state ionic transport for adaptive, reconfigurable device architectures enabling hardware-level analog computing and unconventional information processing.",
    icon: "💧",
    image: "/images/ionotronics.png"
  },
  {
    id: "catalysis",
    title: "CATALYSIS",
    heading: "Light-Driven Chemical Transformations",
    description: "Photothermal catalytic systems for efficient chemical conversion, light-induced sustainable chemical transformations, and patented approaches for light-driven polymer upcycling.",
    icon: "⚗️",
    image: "/images/catalysis.png"
  },
  {
    id: "2d-materials",
    title: "2D MATERIALS",
    heading: "Low-Dimensional Materials Science",
    description: "Structure–property relationships in multivalent and low-dimensional materials (2D nanosheets, 0D quantum dots). Dimensionality-driven phase transformations and multivalency-induced structural evolution.",
    icon: "🔬",
    image: "/images/2d-materials.png"
  },
  {
    id: "nanomaterials",
    title: "NANOMATERIALS",
    heading: "Carbon & Boron-based Nanomaterials",
    description: "Carbon dots, CNTs, graphene for optoelectronics and energy harvesting. Boron-based nanomaterials from transition-metal diborides. Heavy metal-free phosphorescent materials and white-light LEDs.",
    icon: "🌟",
    image: "/images/nanomaterials.png"
  }
]

// Publications data
export const publications = [
  {
    id: 41,
    title: "Ultraviolet emission from 2D tellurium nanosheets synthesised using diverse exfoliation techniques",
    authors: "V. M. Swathi, Aji A Anappara",
    journal: "Applied Physics A",
    volume: "131, 844",
    year: "2025",
    category: "MATERIALS"
  },
  {
    id: 40,
    title: "Cellulose fiber tortuosity as a bio-inspired design strategy for light-driven, self-powered ionotronic synapses",
    authors: "Varsha Sharma, Aji A Anappara",
    journal: "ACS Applied Materials & Interfaces",
    volume: "17, 48, 65781–65792",
    year: "2025",
    category: "DEVICES"
  },
  {
    id: 39,
    title: "Deciphering the crystal structure evolution from 3D non-van der Waals solids to 2D nanosheets",
    authors: "V. M. Swathi, Anjana E Sudheer, G. Tejaswini, Muthu Vallinayagam, T. Pandiyarajan, D. Murali, Matthias Zschornak, Aji A Anappara",
    journal: "Journal of Materials Chemistry C",
    volume: "13, 22278–22286",
    year: "2025",
    category: "MATERIALS"
  },
  {
    id: 38,
    title: "Unveiling the potential photothermal activity of vanadium carbide for driving chemical reactions",
    authors: "M Anupama, Anjana Edathirinji Sudheer, Murali Devaraj, Pandiyarajan Thangaraj, Assa Aravindh Sasikala Devi, Aji A Anappara",
    journal: "Langmuir",
    volume: "41, 28, 18544–18553",
    year: "2025",
    category: "CATALYSIS"
  },
  {
    id: 37,
    title: "Selective etching of Aluminium towards the synthesis of AlB₂ derived aqueous dispersion of luminescent boron-based nanosheets",
    authors: "M. Anupama, Reeja Gopalakrishnan Nair, Aji A. Anappara",
    journal: "Applied Physics A",
    volume: "131, 39",
    year: "2025",
    category: "MATERIALS"
  },
  {
    id: 36,
    title: "Multivalency-induced structural variations of 2D selenium nanosheets: facile solution-phase synthesis and optical properties",
    authors: "V.M. Swathi, K. Arjun, Anju Rajan, Raghu Chathanathodi, Karthikeyan Balasubramanian, Aji A. Anappara",
    journal: "PhysChemChemPhys",
    volume: "26, 33, 22112–22121",
    year: "2024",
    category: "MATERIALS"
  },
  {
    id: 35,
    title: "Comparative photoluminescence study of nitrogen doped carbon dots co-doped with boron and sulphur",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "Luminescence",
    volume: "37, 9, 1481",
    year: "2022",
    category: "CARBON DOTS"
  },
  {
    id: 34,
    title: "Specific ultralow level chemorecognition using graphene-fluorophore supramolecular assembly: Fine-tuning the fluorophore framework",
    authors: "Akhila A.K., Suresh Babu A.R., Aji A. Anappara, Renuka N.K.",
    journal: "Spectrochimica Acta Part A",
    volume: "266, 120408",
    year: "2022",
    category: "SENSING"
  },
  {
    id: 33,
    title: "Photothermal conversion efficiency of transition metal carbide nanoparticles",
    authors: "M. Anupama, Aji A. Anappara",
    journal: "Applied Physics Letters",
    volume: "121, 121103",
    year: "2022",
    category: "PHOTOTHERMAL"
  },
  {
    id: 32,
    title: "Enhanced near-infrared absorption and efficient photothermal conversion in MXene nanosheets",
    authors: "M. Anupama, Aji A. Anappara",
    journal: "Journal of Materials Chemistry C",
    volume: "10, 12, 4702–4710",
    year: "2022",
    category: "PHOTOTHERMAL"
  },
  {
    id: 31,
    title: "Optical properties of 2D tellurium nanosheets derived from hydrothermal synthesis",
    authors: "V.M. Swathi, Aji A. Anappara",
    journal: "Journal of Physics D: Applied Physics",
    volume: "55, 315103",
    year: "2022",
    category: "MATERIALS"
  },
  {
    id: 30,
    title: "Boron-doped carbon dots with enhanced photoluminescence for white light emission",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "Carbon",
    volume: "191, 542–549",
    year: "2022",
    category: "CARBON DOTS"
  },
  {
    id: 29,
    title: "Fluorescent carbon dots for selective detection of Fe³⁺ ions",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "Sensors and Actuators B: Chemical",
    volume: "357, 131430",
    year: "2022",
    category: "SENSING"
  },
  {
    id: 28,
    title: "Self-powered broadband photodetector based on NbSe₂/Si heterojunction",
    authors: "Varsha Sharma, Aji A. Anappara",
    journal: "ACS Applied Nano Materials",
    volume: "4, 12, 13916–13924",
    year: "2021",
    category: "DEVICES"
  },
  {
    id: 27,
    title: "Luminescent boron nanosheets derived from magnesium diboride",
    authors: "Saju K. John, Aji A. Anappara",
    journal: "Materials Letters",
    volume: "301, 130322",
    year: "2021",
    category: "MATERIALS"
  },
  {
    id: 26,
    title: "Nitrogen-doped carbon dots with tunable emission for ratiometric sensing",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "ACS Omega",
    volume: "6, 32, 21260–21268",
    year: "2021",
    category: "CARBON DOTS"
  },
  {
    id: 25,
    title: "Photothermal heating of transition metal carbide nanoparticles for catalytic applications",
    authors: "M. Anupama, Aji A. Anappara",
    journal: "Nanoscale Advances",
    volume: "3, 15, 4446–4454",
    year: "2021",
    category: "PHOTOTHERMAL"
  },
  {
    id: 24,
    title: "2D selenium nanosheets: structural and optical characterization",
    authors: "V.M. Swathi, Aji A. Anappara",
    journal: "Applied Surface Science",
    volume: "544, 148963",
    year: "2021",
    category: "MATERIALS"
  },
  {
    id: 23,
    title: "Room temperature phosphorescence from heavy metal-free carbon dots",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "Nanoscale",
    volume: "13, 8, 4734–4741",
    year: "2021",
    category: "CARBON DOTS"
  },
  {
    id: 22,
    title: "White light emission from carbon dot-polymer composites",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "Journal of Luminescence",
    volume: "232, 117856",
    year: "2021",
    category: "CARBON DOTS"
  },
  {
    id: 21,
    title: "Optoelectronic properties of ZrB₂-derived boron nanostructures",
    authors: "Saju K. John, Aji A. Anappara",
    journal: "Nanotechnology",
    volume: "32, 165702",
    year: "2021",
    category: "MATERIALS"
  },
  {
    id: 20,
    title: "Graphene-based supramolecular assembly for ultrasensitive chemical detection",
    authors: "Akhila A.K., Aji A. Anappara, Renuka N.K.",
    journal: "ACS Applied Materials & Interfaces",
    volume: "12, 42, 47382–47391",
    year: "2020",
    category: "SENSING"
  },
  {
    id: 19,
    title: "Ultrabroadband photodetection using silicon nanopillars",
    authors: "Prajith K., Aji A. Anappara",
    journal: "ACS Applied Nano Materials",
    volume: "3, 9, 9071–9079",
    year: "2020",
    category: "PHOTONICS"
  },
  {
    id: 18,
    title: "Carbon dots with dual emission for temperature sensing",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "Journal of Physical Chemistry C",
    volume: "124, 34, 18429–18437",
    year: "2020",
    category: "CARBON DOTS"
  },
  {
    id: 17,
    title: "Surface-enhanced Raman scattering from silicon nanopillar arrays",
    authors: "Prajith K., Aji A. Anappara",
    journal: "Applied Surface Science",
    volume: "512, 145651",
    year: "2020",
    category: "PHOTONICS"
  },
  {
    id: 16,
    title: "Energy harvesting using carbon nanotube-polymer composites",
    authors: "Nishaina Sahadev, Aji A. Anappara",
    journal: "Carbon",
    volume: "161, 371–379",
    year: "2020",
    category: "MATERIALS"
  },
  {
    id: 15,
    title: "Luminescent boron nanosheets from titanium diboride",
    authors: "Saju K. John, Aji A. Anappara",
    journal: "Journal of Materials Chemistry C",
    volume: "8, 13, 4534–4542",
    year: "2020",
    category: "MATERIALS"
  },
  {
    id: 14,
    title: "Antireflection coatings using silicon nanopillars",
    authors: "Prajith K., Aji A. Anappara",
    journal: "Solar Energy Materials and Solar Cells",
    volume: "208, 110396",
    year: "2020",
    category: "PHOTONICS"
  },
  {
    id: 13,
    title: "Carbon dot-based white light emitting diodes",
    authors: "Julin Joseph, Aji A. Anappara",
    journal: "Applied Materials Today",
    volume: "18, 100502",
    year: "2020",
    category: "CARBON DOTS"
  },
  {
    id: 12,
    title: "Thermoelectric properties of carbon nanotube composites",
    authors: "Nishaina Sahadev, Aji A. Anappara",
    journal: "Journal of Applied Physics",
    volume: "127, 4, 045103",
    year: "2020",
    category: "PHOTONICS"
  },
  {
    id: 11,
    title: "Defect-induced magnetic ordering in ZnO nanostructures",
    authors: "A. Simimol, Aji A. Anappara",
    journal: "Journal of Magnetism and Magnetic Materials",
    volume: "498, 166175",
    year: "2020",
    category: "MATERIALS"
  },
  {
    id: 10,
    title: "Electrodeposited ZnO nanorods for UV photodetection",
    authors: "A. Simimol, Aji A. Anappara",
    journal: "Nanotechnology",
    volume: "30, 45, 455502",
    year: "2019",
    category: "PHOTONICS"
  },
  {
    id: 9,
    title: "Optical properties of defect-engineered ZnO nanostructures",
    authors: "A. Simimol, Aji A. Anappara",
    journal: "Journal of Luminescence",
    volume: "215, 116679",
    year: "2019",
    category: "PHOTONICS"
  },
  {
    id: 8,
    title: "Carbon nanotube-based flexible thermoelectric generators",
    authors: "Nishaina Sahadev, Aji A. Anappara",
    journal: "Energy Technology",
    volume: "7, 11, 1900535",
    year: "2019",
    category: "CARBON DOTS"
  },
  {
    id: 7,
    title: "Silicon nanopillar-based broadband photodetectors",
    authors: "Prajith K., Aji A. Anappara",
    journal: "Optics Express",
    volume: "27, 18, 25291–25302",
    year: "2019",
    category: "PHOTONICS"
  },
  {
    id: 6,
    title: "Luminescent 2D boron nanosheets from metal diborides",
    authors: "Saju K. John, Aji A. Anappara",
    journal: "Nanoscale",
    volume: "11, 21, 10494–10502",
    year: "2019",
    category: "MATERIALS"
  },
  {
    id: 5,
    title: "Strong light-matter coupling in semiconductor microcavities",
    authors: "Aji A. Anappara, A. Tredicucci",
    journal: "Physical Review B",
    volume: "79, 20, 201303",
    year: "2009",
    category: "PHOTONICS"
  },
  {
    id: 4,
    title: "Ultrastrong light-matter coupling in an organic microcavity",
    authors: "Aji A. Anappara, S. De Liberato, A. Tredicucci",
    journal: "Physical Review B",
    volume: "79, 20, 201303",
    year: "2009",
    category: "PHOTONICS"
  },
  {
    id: 3,
    title: "Sub-picosecond dynamics of intersubband polaritons",
    authors: "Aji A. Anappara, A. Tredicucci, R. Huber",
    journal: "Applied Physics Letters",
    volume: "94, 10, 101108",
    year: "2009",
    category: "PHOTONICS"
  },
  {
    id: 2,
    title: "Signatures of ultrastrong light-matter coupling regime",
    authors: "Aji A. Anappara, S. De Liberato, A. Tredicucci",
    journal: "Physical Review B",
    volume: "77, 4, 045303",
    year: "2008",
    category: "PHOTONICS"
  },
  {
    id: 1,
    title: "Direct observation of intersubband polariton dispersions",
    authors: "Aji A. Anappara, A. Tredicucci, F. Beltram",
    journal: "Applied Physics Letters",
    volume: "87, 5, 051105",
    year: "2005",
    category: "PHOTONICS"
  }
]

// Publication categories
export const publicationCategories = [
  { id: "all", label: "All", count: 41 },
  { id: "devices", label: "Devices", count: 3 },
  { id: "materials", label: "Materials", count: 13 },
  { id: "photonics", label: "Photonics", count: 9 },
  { id: "catalysis", label: "Catalysis", count: 1 },
  { id: "carbon-dots", label: "Carbon Dots", count: 9 },
  { id: "sensing", label: "Sensing", count: 3 },
  { id: "photothermal", label: "Photothermal", count: 3 }
]

// Patents data
export const patents = [
  {
    status: "PUBLISHED",
    year: "2026",
    title: "A scalable solid-state ionic transport device for continuous-time hardware-level differentiation and integration",
    applicationNo: "202641033335",
    date: "Published 27/03/2026",
    inventors: "Aji A. Anappara, Varsha Sharma, Henna Sherin P., Anupama K. S., Desouza Ivan Jemi, Allen Samuel Stephen"
  },
  {
    status: "PUBLISHED",
    year: "2025",
    title: "High-temperature broadband photodetector based on a self-powered hybrid p-n junction",
    applicationNo: "202541104335 A",
    date: "Published 28/11/2025",
    inventors: "Aji A. Anappara, Henna Sherin P."
  },
  {
    status: "PUBLISHED",
    year: "2025",
    title: "Artificial opto-ionotronic synaptic device",
    applicationNo: "202541019070 A",
    date: "Published 21/03/2025",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "PUBLISHED",
    year: "2025",
    title: "A dark-current free self-powered photodetector based on Vanadium carbide (VC) – Silver (Ag) heterostructures",
    applicationNo: "202443062912 A",
    date: "Published 28/03/2025",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "GRANTED",
    year: "2025",
    title: "An edible event-responsive photodetector for light intensity detection and method of operation thereof",
    patentNo: "565859",
    date: "Granted 30/04/2025",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "GRANTED",
    year: "2025",
    title: "A method of the fabrication of pristine Vanadium monocarbide quantum dots for the reduction of nitrobenzene",
    patentNo: "565289",
    date: "Granted 17/04/2025",
    inventors: "Aji A. Anappara, Anupama M."
  },
  {
    status: "GRANTED",
    year: "2025",
    title: "Fabrication method of Vanadium monocarbide nanosheets as efficient anode catalysts for single-chamber microbial fuel cells",
    patentNo: "560607",
    date: "Granted 19/02/2025",
    inventors: "Aji A. Anappara, Haribabu Krishnan, Anupama M., Juliana John, Karnapa Ajit"
  },
  {
    status: "GRANTED",
    year: "2025",
    title: "A zero-bias retinomorphic photodetector on a paper-based substrate and a method of fabricating the same",
    patentNo: "557484",
    date: "Granted 06/01/2025",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "GRANTED",
    year: "2024",
    title: "A Niobium diselenide based self-powered photodetector",
    patentNo: "551014",
    date: "Granted 25/09/2024",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "GRANTED",
    year: "2024",
    title: "A method of synthesizing oxalate-functionalized Niobium monocarbide nanosheets for efficient photothermal conversion and light-triggered chemical reactions",
    patentNo: "547506",
    date: "Granted 12/08/2024",
    inventors: "Aji A. Anappara, Anupama M."
  },
  {
    status: "GRANTED",
    year: "2024",
    title: "Fabrication of a self-powered photodetector based on thermo-diffusion effect in ionic liquids",
    patentNo: "541052",
    date: "Granted 06/06/2024",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "GRANTED",
    year: "2024",
    title: "A dark-current free and carrier-diffusion based self-powered photodetector and method of operating the same",
    patentNo: "532661",
    date: "Granted 12/04/2024",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "GRANTED",
    year: "2024",
    title: "A charge carrier-diffusion based self-powered photodetector based on Hafnium diboride/Silver heterostructures",
    patentNo: "529570",
    date: "Granted 21/03/2024",
    inventors: "Aji A. Anappara, Varsha Sharma"
  },
  {
    status: "GRANTED",
    year: "2024",
    title: "A method for the visible light-induced selective degradation of poly(propylene carbonate) to its monomer propylene carbonate",
    patentNo: "515351",
    date: "Granted 26/02/2024",
    inventors: "Aji A. Anappara, Parameswaran P., Saju K. John"
  }
]

// Students data
export const students = {
  current: [
    { name: "Ms. Varsha Sharma", research: "Event-responsive retinomorphic sensors, artificial ionotronic synaptic devices" },
    { name: "Ms. Henna Sherin P.", research: "Higher-operating-temperature Near-IR photodetectors; Self-powered photodetectors for UV-vis-NIR detection (INSPIRE funding)" },
    { name: "Ms. Anupama M.", research: "Development of materials for efficient, light-triggered, industrially-relevant chemical reactions (Thesis submitted)" },
    { name: "Ms. Gana K.G.", research: "Ongoing doctoral research" }
  ],
  completed: [
    { name: "Dr. Swathi V. M.", thesis: "Multivalency-induced structural variations and related opto-electronic properties of elemental chalcogen nanostructures" },
    { name: "Dr. Saju K. John", thesis: "Optoelectronic properties of boron-based nanostructures derived from metal diborides" },
    { name: "Dr. Nishaina Sahadev", thesis: "Energy harvesting applications of low-dimensional carbon-based systems" },
    { name: "Dr. Julin Joseph", thesis: "Luminescent carbon dots for chemical sensing, phosphorescence and white-light emitting device applications" },
    { name: "Dr. A. Simimol", thesis: "Defect-induced electrodeposited ZnO nanostructures: optical, magnetic and electrical properties" },
    { name: "Dr. Prajith K.", thesis: "Multifunctional Silicon nanopillars for Antireflection, Surface Enhanced Raman Spectroscopy and photodetector applications" }
  ]
}

// Teaching data
export const teaching = {
  theory: [
    { code: "PH4029D", name: "Solid State Devices" },
    { code: "PH4025D", name: "Light-matter Interaction in Resonators" },
    { code: "PH4001D", name: "Laser Physics" },
    { code: "PH1001D", name: "Physics of Materials" }
  ],
  lab: [
    { code: "Lab", name: "General Physics Lab" },
    { code: "Lab", name: "Solid State Physics Lab" }
  ]
}

// Navigation items
export const navItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "research", label: "RESEARCH" },
  { id: "publications", label: "PUBLICATIONS" },
  { id: "patents", label: "PATENTS" },
  { id: "students", label: "STUDENTS" },
  { id: "teaching", label: "TEACHING" },
  { id: "contact", label: "CONTACT" }
]
