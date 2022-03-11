import { BlockLayout } from "./block-layout";
import { education } from "../../data/profile";

const EducationBlock = () => {
  return (
    <BlockLayout title="Education">
      <div className="flex flex-col gap-10">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{edu.school}</h3>
            <span className="text-sm">{edu.duration}</span>
            <div className="mt-3 flex flex-col">
              <p>{edu.course}</p>
              {edu.gpa ? <span>{edu.gpa}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </BlockLayout>
  );
};

export { EducationBlock };
