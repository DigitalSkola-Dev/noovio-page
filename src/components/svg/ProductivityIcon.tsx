interface Props {
  className?: string;
}

const ProductivityIcon = ({ className }: Props) => {
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
        d="M17.2956 20.8337C17.0271 20.8483 16.7597 20.7884 16.523 20.6606C16.2864 20.5328 16.0897 20.342 15.9547 20.1093C15.8198 19.8767 15.7518 19.6112 15.7582 19.3424C15.7647 19.0735 15.8454 18.8116 15.9915 18.5857L23.754 6.25033C23.8759 6.03068 24.0526 5.84627 24.2668 5.71497C24.481 5.58368 24.7255 5.50995 24.9766 5.50094C25.2277 5.49193 25.4768 5.54794 25.6999 5.66354C25.923 5.77914 26.1124 5.95041 26.2498 6.16074L33.9623 18.542C34.1143 18.7603 34.2037 19.0161 34.2208 19.2815C34.2379 19.547 34.1821 19.8121 34.0594 20.0481C33.9366 20.2842 33.7517 20.4821 33.5245 20.6206C33.2974 20.759 33.0367 20.8327 32.7706 20.8337H17.2956Z"
        stroke="url(#paint0_linear_9406_13542)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 29.1719H8.33333C7.18274 29.1719 6.25 30.1046 6.25 31.2552V41.6719C6.25 42.8225 7.18274 43.7552 8.33333 43.7552H18.75C19.9006 43.7552 20.8333 42.8225 20.8333 41.6719V31.2552C20.8333 30.1046 19.9006 29.1719 18.75 29.1719Z"
        stroke="url(#paint1_linear_9406_13542)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.4557 43.7552C40.4828 43.7552 43.7474 40.4906 43.7474 36.4635C43.7474 32.4365 40.4828 29.1719 36.4557 29.1719C32.4287 29.1719 29.1641 32.4365 29.1641 36.4635C29.1641 40.4906 32.4287 43.7552 36.4557 43.7552Z"
        stroke="url(#paint2_linear_9406_13542)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9406_13542"
          x1="24.9908"
          y1="5.5"
          x2="24.9908"
          y2="20.8358"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9406_13542"
          x1="13.5417"
          y1="29.1719"
          x2="13.5417"
          y2="43.7552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9406_13542"
          x1="36.4557"
          y1="29.1719"
          x2="36.4557"
          y2="43.7552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProductivityIcon;
