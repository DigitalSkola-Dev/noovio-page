const LoveIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width={11}
      height={9}
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.75244 0.84069C5.60869 0.96569 5.38807 0.96569 5.24494 0.84069C4.13119 -0.12806 2.47619 -0.164311 1.33932 1.04631C-1.15068 4.19944 2.46432 6.98194 4.84869 8.66819C5.03874 8.80272 5.26585 8.87497 5.49869 8.87497C5.73154 8.87497 5.95865 8.80272 6.14869 8.66819C8.55057 6.97381 12.1487 4.19944 9.65807 1.04631C8.52182 -0.164311 6.86557 -0.12806 5.75182 0.84069"
        fill="url(#paint0_linear_8466_12714)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8466_12714"
          x1="5.49996"
          y1="0.125"
          x2="5.49996"
          y2="8.87497"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0040EB" />
          <stop offset={1} stopColor="#002485" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LoveIcon;
