import { SectionFive } from "./sections/SectionFive/SectionFive";
import { SectionFor } from "./sections/SectionFor/SectionFor";
import { SectionOne } from "./sections/SectionOne/SectionOne";
import { SectionThree } from "./sections/SectionThree/SectionThree";
import { SectionTwo } from "./sections/SectionTwo/SectionTwo";

export default function Page() {
  return (
    <div>
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
     <SectionFor/>
     <SectionFive/>
    </div>
  );
}
