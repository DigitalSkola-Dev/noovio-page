interface Props {
  className?: string;
}

const CollaborationIcon = ({ className }: Props) => {
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
        d="M37.4974 43.7448C37.4974 39.3245 35.7414 35.0853 32.6158 31.9597C29.4902 28.8341 25.251 27.0781 20.8307 27.0781C16.4105 27.0781 12.1712 28.8341 9.04562 31.9597C5.92001 35.0853 4.16406 39.3245 4.16406 43.7448"
        stroke="url(#paint0_linear_9406_13548)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8307 27.0833C26.5837 27.0833 31.2474 22.4196 31.2474 16.6667C31.2474 10.9137 26.5837 6.25 20.8307 6.25C15.0778 6.25 10.4141 10.9137 10.4141 16.6667C10.4141 22.4196 15.0778 27.0833 20.8307 27.0833Z"
        stroke="url(#paint1_linear_9406_13548)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.8255 41.6615C45.8255 34.6406 41.6589 28.1198 37.4922 24.9948C38.8618 23.9672 39.957 22.6179 40.6809 21.0662C41.4047 19.5145 41.7349 17.8083 41.6422 16.0985C41.5495 14.3888 41.0368 12.7283 40.1494 11.264C39.262 9.79961 38.0274 8.57659 36.5547 7.70312"
        stroke="url(#paint2_linear_9406_13548)"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9406_13548"
          x1="20.8307"
          y1="27.0781"
          x2="20.8307"
          y2="43.7448"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9406_13548"
          x1="20.8307"
          y1="6.25"
          x2="20.8307"
          y2="27.0833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9406_13548"
          x1="41.1901"
          y1="7.70312"
          x2="41.1901"
          y2="41.6615"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1280F8" />
          <stop offset={1} stopColor="#0040EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CollaborationIcon;
