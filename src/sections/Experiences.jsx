import { Timeline } from "../components/timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section id="experiences" className="w-full c-space section-spacing">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
