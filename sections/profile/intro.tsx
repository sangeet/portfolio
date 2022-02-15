const IntroBlock = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-16 p-5 md:p-8 bg-pattern">
      <div className="flex flex-col">
        <h1 className="mb-3 font-bold text-2xl md:text-3xl lg:text-4xl">
          Sangeet Khatri
        </h1>
        <span className="text-xl md:text-2xl">Frontend Engineer</span>
        <span className="text-sm">Bengaluru, Karnataka, India</span>
      </div>
      <div className="flex flex-col md:text-right mt-5">
        <span className="text-2xl">+91-85532 21820</span>
        <span className="mt-1">sangeet.khatri@outlook.com</span>
      </div>
    </div>
  );
};

export { IntroBlock };
