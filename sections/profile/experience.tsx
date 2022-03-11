import { BlockLayout } from "./block-layout";
import { experiences } from "../../data/profile";

const ExperienceBlock = () => {
  return (
    <BlockLayout title="Experience">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index === experiences.length - 1 ? "" : "mb-10"
          }`}
        >
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <div className="flex text-sm">
            <span>{exp.employer}</span>
            <span className="mx-1">-</span>
            <span>{exp.location}</span>
          </div>
          <div className="text-sm">
            <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
          </div>
          {exp.description && <p className="mt-3">{exp.description}</p>}
        </div>
      ))}
    </BlockLayout>
  );
};

export { ExperienceBlock };
