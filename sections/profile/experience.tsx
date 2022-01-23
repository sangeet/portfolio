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
          <span className="text-sm">{exp.employer}</span>
          <div className="text-sm">
            <span>{exp.startDate}</span> - <span>{exp.endDate}</span>
          </div>
          <p className="mt-3">{exp.description}</p>
        </div>
      ))}
    </BlockLayout>
  );
};

export { ExperienceBlock };
