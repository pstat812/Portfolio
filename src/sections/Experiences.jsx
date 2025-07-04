import ExperienceList from "../components/ExperienceCard";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section id="experiences" className="w-full">
      <ExperienceList data={experiences} />
    </section>
  );
};

export default Experiences;
