import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

import {
  rjrlogo,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6, 
  framer,
  raindrop,
  catalog5,
  catalog6,
  catalog7,
  catalog8,
  catalog9,
  catalog10,
  medical,
  hardware,
  electrical,
  computer,
  linen,
  office,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Profile",
    url: "#profile",
  },
  {
    id: "1",
    title: "services",
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




export const catalog = [
  {
    id: "0",
    title: "Electronics",
    text: "We also cater specific order basis services and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    imageUrl: catalog5,
    colorful: false,

  },
  {
    id: "1",
    title: "Computer Accessories",
    text: "We also cater specific order basis services and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    imageUrl: catalog6,
  },
  {
    id: "2",
    title: "Computer Parts",
    text: "We also cater specific order basis services and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    imageUrl: catalog7,
  },
  {
    id: "3",
    title: "Office Supplies",
    text: "We also cater specific order basis services and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    imageUrl: catalog8,
  },
  {
    id: "4",
    title: "Medical Supplies",
    text: "We also cater specific order basis services and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    imageUrl: catalog9,
  },
  {
    id: "5",
    title: "Network Equipments",
    text: "We also cater specific order basis services and goods locally or internationally sourced. We will handle all the hassles of shipping and handling. Feel free to visit our office or contact us for further details.",
    imageUrl: catalog10,
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

export const landing = [
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

export const services = [
  {
    id: "0",
    title: "LINEN SUPPLIES",
    text: "Customized Household and Office Curtains Fabric printing Services Hospital Gowns and Cadaver Bags",
    backgroundUrl: "./src/assets/services/card-1.png",
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "ELECTRONICS",
    text: "Heating Elements PA Speakers and Microphones",
    backgroundUrl: "./src/assets/services/card-2.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "OFFICE SUPPLIES AND FURNITURE",
    text: "Papers, Folders, Pens Etc. Computer Chairs and Tables Office Filing Cabinets",
    backgroundUrl: "./src/assets/services/card-3.svg",
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "IT EQUIPMENTS",
    text: "CCTV Computer Accessories and Peripherals Networking Accessories Laptops and Pre-Build Desktops Printers, Toners and Inks",
    backgroundUrl: "./src/assets/services/card-1.png",
    imageUrl: benefitImage4,
    light: true,
  },
  {
    id: "4",
    title: "MEDICAL SUPPLIES",
    text: "Facemasks, Thermometers, Gloves Laboratory Apparatus and Appliances",
    backgroundUrl: "./src/assets/services/card-2.svg",
    imageUrl: benefitImage5,
  },
  {
    id: "5",
    title: "SOLAR PANELS AND INVERTERS",
    text: "Low and High Capacity UPS and Solar Inverters Grid Tie, Hybrid Setup Deep Cycle Solar Batteries",
    backgroundUrl: "./src/assets/services/card-3.svg",
    imageUrl: benefitImage6,
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
