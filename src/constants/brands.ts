export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url?: string;
}

export const BRANDS: Brand[] = [
  {
    id: "openspace",
    name: "OpenSpace",
    tagline: "Creating Spaces. Unlocking Potential.",
    description: "Expert solutions in space management and utilization, helping businesses unlock the true potential of their physical environments."
  },
  {
    id: "opencomms",
    name: "OpenComms",
    tagline: "Connecting Businesses Without Limits.",
    description: "Seamless communication infrastructure and strategy designed to keep your business connected globally."
  },
  {
    id: "openwaste",
    name: "OpenWaste",
    tagline: "Smarter Waste Solutions For a Clearer Tomorrow.",
    description: "Innovative and sustainable waste management systems focused on reducing environmental impact for a cleaner future."
  },
  {
    id: "openenergy",
    name: "OpenEnergy",
    tagline: "Powering a Sustainable Future Together.",
    description: "Clean energy solutions that empower businesses to transition to sustainable power sources effectively.",
    url: "https://openenergyservices.co.uk"
  },
  {
    id: "openworks",
    name: "OpenWorks",
    tagline: "Facilitating Better Facilities.",
    description: "Comprehensive facility management services that ensure your operational environments are optimized and efficient."
  },
  {
    id: "openfleet",
    name: "OpenFleet",
    tagline: "Keeping Business Moving Forward.",
    description: "Logistics and fleet management solutions that drive efficiency and reliability in business movement."
  },
  {
    id: "openaqua",
    name: "OpenAqua",
    tagline: "Pure Connections. Clearer Business.",
    description: "Advanced water management and purification systems for industrial and commercial excellence."
  },
  {
    id: "opentalent",
    name: "OpenTalent",
    tagline: "Recruiting. A Better Way.",
    description: "Modern recruitment strategies that connect the right people with the right opportunities through innovation."
  },
  {
    id: "opensure",
    name: "OpenSure",
    tagline: "Safer, Compliant and Always Prepared.",
    description: "Risk management and compliance solutions that safeguard your business operations against any eventuality."
  },
  {
    id: "opentech",
    name: "OpenTech",
    tagline: "Technology Solutions That Drive Results.",
    description: "Cutting-edge IT and software solutions tailored to meet the unique challenges of modern businesses."
  },
  {
    id: "opencapital",
    name: "OpenCapital",
    tagline: "Funding Growth, Fuelling Ambition.",
    description: "Strategic financial solutions and investment services designed to fuel business expansion and ambition."
  },
  {
    id: "opencover",
    name: "OpenCover",
    tagline: "Protecting Businesses. Supporting Success.",
    description: "Comprehensive insurance and protection plans tailored to the specific needs of businesses within our network."
  },
  {
    id: "openlead",
    name: "Openlead",
    tagline: "The Smarter Way To Source New Business.",
    description: "Advanced lead generation and market intelligence tools that streamline business development.",
    url: "https://openlead.co.uk"
  },
  {
    id: "openacademy",
    name: "OpenAcademy",
    tagline: "Developing People. Building Brighter Futures.",
    description: "Corporate training and development programs focused on nurturing talent and fostering future leaders.",
    url: "https://openleadacademy.co.uk"
  }
];

export const GROUP_MISSION = "CONNECTING BUSINESSES. SUPPORTING SUCCESS.";
