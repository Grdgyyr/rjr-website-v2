import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  framer,
  homeSmile,
  instagram,
  plusSquare,
  raindrop,
  recording01,
  recording03,
  roadmap5,
  roadmap6,
  roadmap7,
  roadmap8,
  roadmap9,
  roadmap10,
  searchMd,
  sliders04,
  yourlogo,
  medical,
  hardware,
  electrical,
  computer,
  linen,
  office
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Profile",
    url: "#profile",
  },
  {
    id: "1",
    title: "Products",
    url: "#products",
  },
  {
    id: "2",
    title: "Product Catalog",
    url: "#catalog",
  },
  {
    id: "5",
    title: "Contact Us",
    url: "#footer",
    onlyMobile: true,
  },
];




export const roadmap = [
  {
    id: "0",
    title: "Electronics",
    text: "We also cater specific order basis products and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    status: "Available",
    imageUrl: roadmap5,
    colorful: false,
  },
  {
    id: "1",
    title: "Computer Accessories",
    text: "We also cater specific order basis products and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    status: "Available",
    imageUrl: roadmap6,
  },
  {
    id: "2",
    title: "Computer Parts",
    text: "We also cater specific order basis products and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    status: "Available",
    imageUrl: roadmap7,
  },
  {
    id: "3",
    title: "Office Supplies",
    text: "We also cater specific order basis products and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    status: "Available",
    imageUrl: roadmap8,
  },
  {
    id: "4",
    title: "Medical Supplies",
    text: "We also cater specific order basis products and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    status: "Available",
    imageUrl: roadmap9,
  },
  {
    id: "5",
    title: "Network Equipments",
    text: "We also cater specific order basis products and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    status: "Available",
    imageUrl: roadmap10,
  },
];

export const collabText =
  "RJR Marketing is founded in 1999 with its main purpose of Linen Manufacturing providing Linen supplies, Office Supplies, Electronics and IT Equipment for Government Hospitals and Private sectors. Over the years, the business evolved to include trading and providing customer's needs from originally Linens and Equipments to anything within the business scope for client's supplies.";
export const collabText2 = "Currently, RJR Marketing is a one stop shop for every imaginable item needed by clients with extensive suppliers throughout the country bringing quality and affordable items for client's needs.";
export const collabText3 ="RJR Marketing is PhilGEPS Platinum registered and is able to cater government transactions.";
export const collabContent = [
  {
    id: "0",
    title: "History",
    text: collabText,
  },
  {
    id: "1",
    title: "What we provide",
    text: collabText2,
  },
  {
    id: "2",
    title: "Top-notch Security",
    text: collabText3
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Office",
    icon: office,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Linen",
    icon: linen,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Computer",
    icon: computer,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Hardware",
    icon: hardware,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Electrical",
    icon: electrical,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Medical",
    icon: medical,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Cypress Avenue, Granplains Subdivision, Quintin Salas, Jaro",
    icon: LocationOnIcon,
    url: "#",
  },
  {
    id: "1",
    title: "(033) 330-8014 | (63) 918-3099-150",
    icon: PhoneIcon,
    url: "#",
  },
  {
    id: "2",
    title: "rjrmarketingiloilo@gmail.com | info@rjrmarketing.com",
    icon: EmailIcon,
    url: "mailto:rjrmarketingiloilo@gmail.com",
  },
  {
    id: "3",
    title: "www.facebook.com/RJRMerchandising",
    icon: FacebookIcon,
    url: "https://www.facebook.com/RJRMerchandising",
  },
];
