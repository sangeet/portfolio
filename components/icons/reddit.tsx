const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Reddit"
      role="img"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#f40" />
      <g fill="#fff">
        <ellipse cx={256} cy={307} rx={166} ry={117} />
        <circle cx={106} cy={256} r={42} />
        <circle cx={407} cy={256} r={42} />
        <circle cx={375} cy={114} r={32} />
      </g>
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="m256 196 23-101 73 15" stroke="#fff" strokeWidth={16} />
        <path d="m191 359c33 25 97 26 130 0" stroke="#f40" strokeWidth={13} />
      </g>
      <g fill="#f40">
        <circle cx={191} cy={287} r={31} />
        <circle cx={321} cy={287} r={31} />
      </g>
    </svg>
  );
};

export { RedditIcon };