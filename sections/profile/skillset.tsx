import { BlockLayout } from "./block-layout";
import { skillset } from "../../data/profile";

const SkillsetBlock = () => {
  return (
    <BlockLayout title="Skillset" hasMarginBottom={false}>
      <div className="grid grid-cols-2 gap-2">
        {skillset.map((skill, index) => (
          <span key={index} className="mr-3">
            - {skill}
          </span>
        ))}
      </div>
    </BlockLayout>
  );
};

export { SkillsetBlock };
