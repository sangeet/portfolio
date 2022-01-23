import { BlockLayout } from "./block-layout";
import { skillset } from "../../data/profile";

const SkillsetBlock = () => {
  return (
    <BlockLayout title="Skillset" hasMarginBottom={false}>
      <div className="flex flex-wrap">
        {skillset.map((skill, index) => (
          <span key={index} className="mr-3">
            {skill}
          </span>
        ))}
      </div>
    </BlockLayout>
  );
};

export { SkillsetBlock };
