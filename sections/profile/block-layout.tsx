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
  return (
    <div className={`border-t border-slate-700 pt-10`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-5 pl-5 md:pl-10">{title}</h2>
      <div className="flex flex-col mb-10 p-5 md:px-10 md:py-8">{children}</div>
    </div>
  );
};

export { BlockLayout };
