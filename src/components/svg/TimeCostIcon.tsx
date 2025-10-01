interface Props {
  className?: string;
}

const TimeCostIcon = ({ className }: Props) => {
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
        d="M22.9167 31.2474H27.0833C28.1884 31.2474 29.2482 30.8084 30.0296 30.027C30.811 29.2456 31.25 28.1858 31.25 27.0807C31.25 25.9757 30.811 24.9159 30.0296 24.1345C29.2482 23.3531 28.1884 22.9141 27.0833 22.9141H20.8333C19.5833 22.9141 18.5417 23.3307 17.9167 24.1641L6.25 35.4141"
        stroke="url(#paint0_linear_9406_13524)"
        strokeWidth="4.24691"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5859 43.7462L17.9193 40.8295C18.5443 39.9962 19.5859 39.5795 20.8359 39.5795H29.1693C31.4609 39.5795 33.5443 38.7462 35.0026 37.0795L44.5859 27.9128C45.3899 27.1531 45.8591 26.1051 45.8903 24.9994C45.9216 23.8938 45.5123 22.8209 44.7526 22.017C43.9929 21.2131 42.9449 20.7439 41.8392 20.7126C40.7335 20.6813 39.6607 21.0906 38.8568 21.8503L30.1068 29.9753"
        stroke="url(#paint1_linear_9406_13524)"
        strokeWidth="4.24691"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.17188 33.3281L16.6719 45.8281"
        stroke="url(#paint2_linear_9406_13524)"
        strokeWidth="4.24691"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3464 24.7943C36.6831 24.7943 39.388 22.0893 39.388 18.7526C39.388 15.4159 36.6831 12.7109 33.3464 12.7109C30.0096 12.7109 27.3047 15.4159 27.3047 18.7526C27.3047 22.0893 30.0096 24.7943 33.3464 24.7943Z"
        stroke="url(#paint3_linear_9406_13524)"
        strokeWidth="4.24691"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 16.6641C15.9518 16.6641 18.75 13.8658 18.75 10.4141C18.75 6.96228 15.9518 4.16406 12.5 4.16406C9.04822 4.16406 6.25 6.96228 6.25 10.4141C6.25 13.8658 9.04822 16.6641 12.5 16.6641Z"
        stroke="url(#paint4_linear_9406_13524)"
        strokeWidth="4.24691"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9406_13524"
          x1="18.75"
          y1="22.9141"
          x2="18.75"
          y2="35.4141"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9406_13524"
          x1="30.239"
          y1="20.7109"
          x2="30.239"
          y2="43.7462"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9406_13524"
          x1="10.4219"
          y1="33.3281"
          x2="10.4219"
          y2="45.8281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_9406_13524"
          x1="33.3464"
          y1="12.7109"
          x2="33.3464"
          y2="24.7943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_9406_13524"
          x1="12.5"
          y1="4.16406"
          x2="12.5"
          y2="16.6641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TimeCostIcon;
