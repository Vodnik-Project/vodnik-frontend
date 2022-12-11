import { FunctionComponent } from "react";

interface LogoProps {
    height: string | number | undefined;
    width: string | number | undefined;
}

const Logo: FunctionComponent<LogoProps> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 77 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 38H56"
        stroke="#5B5B5B"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M3 21.1616L74 21.1616"
        stroke="#5B5B5B"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M20 3L56 3"
        stroke="#5B5B5B"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Logo;
