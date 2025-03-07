import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section id="footer" crosses className="!px-0 !py-10">
      <div className="container flex justify-between items-center w-full max-sm:flex-col max-sm:gap-10">
        <p className="text-lg sm:text-2xl font-bold text-n-4">RJR Marketing 2025</p>
        <ul className="flex gap-5 flex-wrap items-center justify-end">
          {socials.map((item) => {
            const IconComponent = item.icon;
            let href = item.url;
            let targetAttr = "";
            if (item.id === "0") {
              href =
                "https://www.google.com/maps/place/RJR+Marketing/@10.7440588,122.5593994,19z/data=!4m6!3m5!1s0x33aee5ec27954f07:0x1f639fe21264ea56!8m2!3d10.7443516!4d122.5589113!16s%2Fg%2F11mpd0xcqd?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D";
              targetAttr = "_blank";
            } else if (item.id === "1") {
              href = "tel:+639183099150";
            } else if (item.id === "2") {
              href = "mailto:rjrmarketingiloilo@gmail.com";
            } else if (item.id === "3") {
              href = "https://www.facebook.com/RJRMerchandising";
              targetAttr = "_blank";
            }

            return (
              <li key={item.id} className="flex items-center gap-3">
                <span className="text-white flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6">
                  <IconComponent fontSize="small" />
                </span>
                <a href={href} target={targetAttr} rel="noopener noreferrer" className="text-white text-sm">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
