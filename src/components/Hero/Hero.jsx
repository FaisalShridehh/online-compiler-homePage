import { Link, Button } from "@nextui-org/react";
import heroPicture from "../../assets/2.png";

import "./Hero.css";
export default function Hero() {
  return (
    // <div className="dark:bg-darkBgColor bg-[#FAFAFA] text-[#161616] dark:text-[#FAFAFA]">
    <section
      id="Home"
      className="relative  text-lightTextColor dark:text-darkTextColor snap-start w-screen h-screen flex items-center justify-center overflow-x-hidden z-[9988]   "
    >
      {/* Hero Wrapper */}
      <div className="flex md:flex-row items-center justify-center flex-col h-full w-[calc(100%-20px)] px-8 ">
        {/* Hero headlines , call to action , LeftSide Content */}

        <div className="flex-[8] flex flex-col justify-center md:justify-between gap-3 items-center md:items-start p-5 mt-24 md:mt-0 ">
          <h1 className="text-4xl text-LightTextColor dark:text-[#fff]  sm:text-5xl lg:text-6xl xl:text-7xl font-bold flex flex-wrap gap-3 justify-center md:justify-start  ">
            {/* <span> */}
            Unleash Your
            {/* </span> */}
            <span className="dark:text-darkAccentColor text-lightAccentColor w-fit h-fit tracking-wide font-extrabold">
              Coding
            </span>
            {/* <span> */}
            Potential.
            {/* </span> */}
          </h1>

          <p className="text-lg sm:mt-8 text-center md:text-left font-medium">
            Code, Collaborate, and Create with NexaCode
          </p>

          <div className="flex gap-4 flex-wrap mt-6 md:justify-start lg:justify-center ">
            <div className="relative inline-flex items-center justify-center group">
              <a
                className="ui-btn px-6 py-2 flex items-center justify-center  dark:text-darkTextColor !bg-lightBgSecondaryColor dark:!bg-darkBgSecondaryColor text-base font-semibold rounded-full"
                title="Try our Text Editor"
              >
                <span className="rounded-full dark:text-darkTextColor text-lightTextColor hover:text-lightAccentColor">
                  Try Our Text Editor
                </span>
              </a>
            </div>
            <div className="relative inline-flex items-center justify-center group ">
              <div className="absolute transition-all duration-200 rounded-xl -inset-px bg-gradient-to-r dark:from-cyan-500 dark:to-purple-500 from-[#6DDCFF] via-[#8AE5E5] to-[#007194] group-hover:shadow-lg group-hover:shadow-[#007194]/50"></div>
              <a className="relative inline-flex items-center justify-center w-full px-6 py-1 text-base font-bold text-lightTextColor dark:text-darkTextColor  border border-transparent rounded-xl dark:bg-darkBgColor cursor ">
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* right Side Image */}

        <div className="flex-[4] relative flex justify-center items-center  ">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="blur-3xl filter opacity-70 lg:w-[350px] lg:h-[400px] md:w-[300px] md:h-[350px] w-[250px] h-[300px]"
              style={{
                filter: "blur(64px)",
              }}
              // width="350"
              // height="400"
              viewBox="0 0 444 536"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                fill="url(#c)"
              />
              <defs>
                <linearGradient
                  id="c"
                  x1="82.7339"
                  y1="550.792"
                  x2="-39.945"
                  y2="118.965"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0%"
                    stopColor={`${
                      localStorage.getItem("App Theme") === "dark"
                        ? "#6DDCFF"
                        : "#44BCFF"
                    }`}
                  />
                  <stop
                    offset="50%"
                    stopColor={`${
                      localStorage.getItem("App Theme") === "dark"
                        ? "#44BCFF"
                        : "#1A7575"
                    } `}
                  />
                  <stop
                    offset="100%"
                    stopColor={`${
                      localStorage.getItem("App Theme") === "dark"
                        ? "#6DDCFF"
                        : "#007194"
                    } `}
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <img
            className="relative lg:w-[512px] lg:h-[512px] md:w-[400px] md:h-[400px]  w-[350px] h-[350px]  max-w-sm mx-auto md:max-w-lg "
            src={heroPicture}
            alt="NexaCode Platform"
          />
        </div>
      </div>
    </section>
  );
}
