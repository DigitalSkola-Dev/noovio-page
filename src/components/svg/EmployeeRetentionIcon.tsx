interface Props {
  className?: string;
}

const EmployeeRetentionIcon = ({ className }: Props) => {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M41.6693 27.0895C41.6693 37.5061 34.3776 42.7145 25.7109 45.7353C25.2571 45.8891 24.7641 45.8817 24.3151 45.7145C15.6276 42.7145 8.33594 37.5061 8.33594 27.0895V12.5061C8.33594 11.9536 8.55543 11.4237 8.94613 11.033C9.33683 10.6423 9.86674 10.4228 10.4193 10.4228C14.5859 10.4228 19.7943 7.92281 23.4193 4.75614C23.8606 4.37906 24.4221 4.17188 25.0026 4.17188C25.5831 4.17188 26.1446 4.37906 26.5859 4.75614C30.2318 7.94364 35.4193 10.4228 39.5859 10.4228C40.1385 10.4228 40.6684 10.6423 41.0591 11.033C41.4498 11.4237 41.6693 11.9536 41.6693 12.5061V27.0895Z"
        stroke="url(#paint0_linear_9406_13560)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 24.9948L22.9167 29.1615L31.25 20.8281"
        stroke="url(#paint1_linear_9406_13560)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9406_13560"
          x1="25.0026"
          y1="4.17187"
          x2="25.0026"
          y2="45.8455"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9406_13560"
          x1={25}
          y1="20.8281"
          x2={25}
          y2="29.1615"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default EmployeeRetentionIcon;
