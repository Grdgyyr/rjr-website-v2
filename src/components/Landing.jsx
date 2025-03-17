import Section from "./Section";
import { rjrlogo, stars } from "../assets";
import Heading from "./Heading";

const Landing = () => {
  return (
    <Section className="overflow-hidden" id="landing">
      <div className="container relative z-2">
        <div className="relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={rjrlogo}
            className="relative z-1 mx-auto lg:mx-0"
            width={400}
            height={400}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          title="General Merchandising | Trading"
          tag='"Quality Products and Service Delivered at Reasonable Price"'
        />

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="#profile"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
