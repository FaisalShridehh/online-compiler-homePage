import { useContext, useEffect, useState } from "react";
import darkLogo from "../../assets/1.svg";
import lightLogo from "../../assets/4.svg";
import AppThemeChangeButton from "../AppThemeChangeButton";
import { ThemeToggle } from "../../contextAPI/ThemeContext";
import { Button } from "@nextui-org/react";
import "./Header.css";

export default function Header() {
  const { isLocalStorageDark } = useContext(ThemeToggle);

  const [navState, setNavState] = useState(false);
  const [iconState, setIconState] = useState(false);

  const toggleSidebar = () => {
    setNavState(!navState);
    setIconState(!iconState);
  };

  // Add event listener to window resize
  useEffect(() => {
    // Function to close the sidebar when the window is resized
    const closeSidebarOnResize = () => {
      if (navState && window.innerWidth >= 765) {
        setNavState(false);
        setIconState(false);
      }
    };
    window.addEventListener("resize", closeSidebarOnResize);

    return () => {
      window.removeEventListener("resize", closeSidebarOnResize);
    };
  }, [navState]);

  return (
    <header
      id="Header"
      className=" 
      border-b border-b-[#007194]/30 dark:border-b-[#6DDCFF]/50 m-auto sticky top-0 left-0 right-0 z-[9999] dark:bg-darkBgColor/50 bg-lightBgColor/50 shadow-sm shadow-[#007194] dark:shadow-[#6DDCFF] transition-all duration-700 w-full backdrop-blur-sm  ease-in-out animate-header-slide-down-fade 
      "
      data-aos="fade-up"
    >
      <div className=" mx-auto w-full">
        <div
          className={`flex items-center justify-between shrink-0 md:px-4 mx-auto px-3 lg:px-8 py-3 ${
            navState && "dark:bg-darkBgColor bg-lightBgColor"
          } `}
        >
          <div className={"flex items-center gap-5"}>
            <a href={"#Home"} className="flex items-center gap-2   ">
              <img
                className="w-12 h-12"
                src={isLocalStorageDark ? darkLogo : lightLogo}
                alt=""
              />
              <span className=" uppercase font-semibold text-[#000] dark:text-white ">
                NexaCode
              </span>
            </a>
            <AppThemeChangeButton />
          </div>
          {/* desktop mode */}
          <nav className="hidden space-x-10 md:space-x-4 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-evenly text-gray-500 dark:text-[#F5F5F5]">
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
            {/* this when implement it in our complete Project */}
            {/* <SignedIn>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform shrink-0 "
                    color="default"
                    name={userProfileInfo?.username}
                    size="sm"
                    src={userProfileInfo?.profilePic}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    className="h-14 gap-2"
                    textValue="profile Info"
                  >
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{userProfileInfo?.username}</p>
                  </DropdownItem>
                  <DropdownItem
                    key="account"
                    onClick={() =>
                      navigate(`/profile/edit-profile/${userProfileInfo?._id}`)
                    }
                  >
                    My Account
                  </DropdownItem>
                  <DropdownItem
                    key="Dashboard"
                    onClick={() => navigate(`/profile`)}
                  >
                    Dashboard
                  </DropdownItem>
                  <DropdownItem
                    key="chat"
                    onClick={() => {
                      navigate(`/messenger`);
                    }}
                  >
                    Chat
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    onClick={() => signOut(() => navigate("/"))}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </SignedIn> */}
            {/* <SignedOut> */}
            <div className="md:flex md:gap-2 md:justify-center">
              <div className="relative inline-flex items-center justify-center group cursor-pointer">
                <a className="border-2 border-[#2A2B3A] hover:border-[#8AE5E5] focus:border-[#8AE5E5] hover:shadow-[0px_0px_10px_0px_rgb(138,229,229)] focus:shadow-[0px_0px_10px_0px_rgb(138,229,229)] flex items-center justify-center text-lightTextColor dark:text-darkTextColor bg-lightBgSecondaryColor dark:bg-darkBgSecondaryColor text-base font-semibold rounded-xl duration-150 cursor-pointer">
                  <span className="rounded-full px-6 py-1 cursor-pointer">
                    Sign In
                  </span>
                </a>
              </div>
              <div className="relative inline-flex items-center justify-center group cursor-pointer">
                <div className="absolute transition-all duration-200 rounded-xl -inset-px bg-gradient-to-r dark:from-cyan-500 dark:to-purple-500 from-[#6DDCFF] via-[#8AE5E5] to-[#007194] group-hover:shadow-lg group-hover:shadow-[#007194]/50 cursor-pointer"></div>
                <a className="relative inline-flex items-center justify-center w-full px-6 py-1 text-base font-bold text-lightTextColor dark:text-darkTextColor  border border-transparent rounded-xl dark:bg-darkBgColor cursor-pointer">
                  Try Free
                </a>
              </div>
            </div>
            {/* </SignedOut> */}
            {/* this when implement it in our complete Project */}
          </nav>
          <div className="block md:hidden">
            <button
              type="button"
              className="text-[#161616] dark:text-[#FAFAFA]"
              onClick={toggleSidebar}
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
          } text-gray-500 dark:text-[#FAFAFA] bg-lightBgColor/50 dark:bg-darkBgColor/50 z-[99998]  ease-in-out animate-header-slide-down-fade transition-all`}
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

          <div className="flex gap-4 justify-center pb-3 ">
            {/* this when implement it in our complete Project */}
            {/* <SignedIn>
              <Dropdown placement="top">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform shrink-0 "
                    color="default"
                    name={userProfileInfo?.username}
                    size="sm"
                    src={userProfileInfo?.profilePic}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    className="h-14 gap-2"
                    textValue="profile Info"
                  >
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{userProfileInfo?.username}</p>
                  </DropdownItem>
                  <DropdownItem
                    key="account"
                    onClick={() =>
                      navigate(`/profile/edit-profile/${userProfileInfo?._id}`)
                    }
                  >
                    My Account
                  </DropdownItem>
                  <DropdownItem
                    key="Dashboard"
                    onClick={() => navigate(`/profile`)}
                  >
                    Dashboard
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    onClick={() => signOut(() => navigate("/"))}
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </SignedIn> */}
            {/* <SignedOut> */}
            <div className="flex gap-2 justify-center">
              <div className="relative inline-flex items-center justify-center group cursor-pointer ">
                <a className="border-2 border-[#2A2B3A] hover:border-[#8AE5E5] focus:border-[#8AE5E5] hover:shadow-[0px_0px_10px_0px_rgb(138,229,229)] focus:shadow-[0px_0px_10px_0px_rgb(138,229,229)] flex items-center justify-center text-lightTextColor dark:text-darkTextColor bg-lightBgSecondaryColor dark:bg-darkBgSecondaryColor text-base font-semibold rounded-xl duration-150 cursor-pointer ">
                  <span className="rounded-full px-6 py-1 ">Sign In</span>
                </a>
              </div>
              <div className="relative inline-flex items-center justify-center group cursor-pointer ">
                <div className="absolute transition-all duration-200 rounded-xl -inset-px bg-gradient-to-r dark:from-cyan-500 dark:to-purple-500 from-[#6DDCFF] via-[#8AE5E5] to-[#007194] group-hover:shadow-lg group-hover:shadow-[#007194]/50 cursor-pointer"></div>
                <a className="relative inline-flex items-center justify-center w-full px-6 py-1 text-base font-bold text-lightTextColor dark:text-darkTextColor  border border-transparent rounded-xl dark:bg-darkBgColor cursor-pointer ">
                  Try Free
                </a>
              </div>
            </div>
            {/* </SignedOut> */}
            {/* this when implement it in our complete Project */}
          </div>
        </nav>
        {/* mobile mode end */}
      </div>
    </header>
  );
}
