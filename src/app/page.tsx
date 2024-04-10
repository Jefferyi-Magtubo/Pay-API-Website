import Image from "next/image";
import { Main } from "next/document";


export default function Home() {
  return (
<main className="relative w-screen ">
  <div className="absolute w-full -top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 780 780" 
      className="w-full h-auto"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <circle id="a" cx="390" cy="390" r="390"/>
        <circle id="b" cx="390" cy="390" r="390"/>
      </defs>
      <g fill="#36536B" fillRule="evenodd" opacity=".15">
        <use xlinkHref="#a"/>
        <use xlinkHref="#b"/>
      </g>
    </svg>
  </div>
</main>
  );
}
