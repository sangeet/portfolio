import { BlockLayout } from "./block-layout";
import { education } from "../../data/profile";

const EducationBlock = () => {
  return (
    <BlockLayout title="Education">
      <h3 className="text-xl font-bold">{education.school}</h3>
      <span className="text-sm">{education.duration}</span>
      <div className="mt-3 flex flex-col">
        <p>{education.course}</p>
        <span>{education.gpa}</span>
      </div>
    </BlockLayout>
  );
};

export { EducationBlock };
