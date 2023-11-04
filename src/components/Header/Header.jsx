import { useState } from "react";
import darkLogo from "../../assets/1.svg";
import lightLogo from "../../assets/4.svg";
import AppThemeChangeButton from "../AppThemeChangeButton";

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [navState, setNavState] = useState(false);
  const [iconState, setIconState] = useState(false);

  return (
    <header className=" border-b border-b-[#007194]/30 dark:border-b-[#6DDCFF]/50 m-auto sticky top-0 z-[10000] dark:bg-darkBgColor bg-lightBgColor shadow-sm shadow-[#007194] dark:shadow-[#6DDCFF] " data-aos="fade-up">
      <div className="container mx-auto">
        <div
          className={`flex items-center justify-between shrink-0 px-4 mx-auto sm:px-6 lg:px-8 py-3 ${
            navState && "dark:bg-darkBgColor bg-lightBgColor"
          } `}
        >
          <div className={"flex items-center gap-5"}>
            <a
              href="#"
              title=""
              className="flex items-center gap-2   "
            >
              <img className="w-12 h-12" src={localStorage.getItem("App Theme") === "dark" ? darkLogo : lightLogo} alt="" />
              <span className=" uppercase font-semibold text-[#000] dark:text-white ">
                NexaCode
              </span>
            </a>
            <AppThemeChangeButton
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          </div>
          {/* desktop mode */}
          <nav className="hidden space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-evenly text-gray-500 dark:text-[#F5F5F5]">
            <a
              href="#Home"
              title=""
              className="text-base font-normal transition-all duration-200 hover:dark:text-gray-400 dark:hover:text-darkAccentColor hover:text-lightAccentColor"
            >
              Home
            </a>

            <a
              href="#Features"
              title=""
              className="text-base font-normal transition-all duration-200 hover:dark:text-gray-400 dark:hover:text-darkAccentColor hover:text-lightAccentColor"
            >
              Features
            </a>

            <a
              href="#FAQS"
              title=""
              className="text-base font-normal transition-all duration-200 hover:dark:text-gray-400 dark:hover:text-darkAccentColor hover:text-lightAccentColor"
            >
              FAQS
            </a>

            <a
              href="#Contact"
              title=""
              className="text-base font-normal transition-all duration-200 hover:dark:text-gray-400 dark:hover:text-darkAccentColor hover:text-lightAccentColor"
            >
              Contact Us
            </a>
          </nav>
          <div className="block md:hidden">
            <button
              type="button"
              className="text-[#161616] dark:text-[#FAFAFA]"
              onClick={() => {
                setIconState((pre) => !pre);
                setNavState((pre) => !pre);
              }}
            >
              <span hidden={iconState}>
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <span hidden={!iconState}>
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* mobile mode start */}
        <nav
          className={`${
            navState ? "block" : "hidden"
          } text-gray-500 dark:text-[#FAFAFA] bg-lightBgColor dark:bg-darkBgColor z-[100000]`}
        >
          <div className="flex flex-col pt-8 pb-4 px-4 space-y-6">
            <a
              href="#Home"
              title=""
              className="text-base font-normal transition-all duration-200  hover:dark:text-gray-400 dark:hover:text-gray-900 hover:text-lightAccentColor"
            >
              Home
            </a>

            <a
              href="#Features"
              title=""
              className="text-base font-normal transition-all duration-200  hover:dark:text-gray-400 dark:hover:text-gray-900 hover:text-lightAccentColor"
            >
              Features
            </a>

            <a
              href="#FAQS"
              title=""
              className="text-base font-normal transition-all duration-200  hover:dark:text-gray-400 dark:hover:text-gray-900 hover:text-lightAccentColor"
            >
              FAQS
            </a>
            <a
              href="#Contact"
              title=""
              className="text-base font-normal transition-all duration-200  hover:dark:text-gray-400 dark:hover:text-gray-900 hover:text-lightAccentColor"
            >
              Contact Us
            </a>

            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            </div>
          </div>
        </nav>
        {/* mobile mode end */}
      </div>
    </header>
  );
}
