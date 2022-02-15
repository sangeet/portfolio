import { FunctionComponent } from "react";

type BlockLayoutPropsType = {
  title: string;
  hasMarginBottom?: boolean;
  children: React.ReactNode;
};
const BlockLayout: FunctionComponent<BlockLayoutPropsType> = ({
  title,
  hasMarginBottom = true,
  children,
}) => {
  const margin = hasMarginBottom ? "mb-10" : "mb-0";
  return (
    <div className={margin}>
      <h2 className="text-2xl md:text-3xl font-bold mb-5 pl-10">{title}</h2>
      <div className="flex flex-col mb-10 p-5 md:px-10 md:py-8">
        {children}
      </div>
    </div>
  );
};

export { BlockLayout };
