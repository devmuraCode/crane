import { SectionFive } from "./sections/SectionFive/SectionFive";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionSix } from "./sections/SectionSix/SectionSix";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";

export default function Page() {
  return (
    <div>
      <SectionOne />
      <SectionSix />
      <SectionTwo />
      <SectionThree />
      {/* <SectionFor /> */}

      <SectionFive />
    </div>
  );
}
