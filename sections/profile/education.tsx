import { BlockLayout } from "./block-layout";

const EducationBlock = () => {
  return (
    <BlockLayout title="Education">
      <h3 className="text-xl font-bold">Christ University Bangalore</h3>
      <span className="text-sm">2014 – 2017</span>
      <div className="mt-3 flex flex-col">
        <p>
          Bachelor of Science - B.Sc Computer Science, Mathematics and
          Electronics
        </p>
        <span>3.2 GPA / 4.0</span>
      </div>
    </BlockLayout>
  );
};

export { EducationBlock };
