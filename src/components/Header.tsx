import React, { useState } from "react";
import Container from "./Container";

const Header = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="fixed bg-white fixed left-0 right-0 z-30">
      <Container className=" flex h-[112px] items-center   bg-white ">
        <img src="/images/logo.svg" alt="logo" />
        <ul className="lg:flex space-x-5 ml-10  text-base hidden">
          <li className="text-base font-bold cursor-pointer active:text-neutral-very-dark-violet">
            Features
          </li>
          <li className="text-base font-bold cursor-pointer active:text-neutral-very-dark-violet">
            Pricing
          </li>
          <li className="text-base font-bold cursor-pointer active:text-neutral-very-dark-violet">
            Resources
          </li>
        </ul>

        <div className="ml-auto lg:block hidden">
          <span className="mr-7 text-base font-bold cursor-pointer active:text-neutral-very-dark-violet">
            Login
          </span>
          <button className="px-5 py-2 rounded-full bg-primary-cyan text-white text-base font-bold cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="ml-auto lg:hidden flex-flex-col relative  justify-items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28"
            width="28"
            className="fill-neutral-gray  cursor-pointer active:fill-neutral-very-dark-violet"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleSidebarOpen}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
            <div className="bg-primary-dark-violet w-[335px] px-5 py-10 fixed right-5 mt-3 z-10 space-y-5 rounded-md flex flex-col items-center ">
              <span className="font-bold text-white">Features</span>
              <span className="font-bold text-white">Pricing</span>
              <span className="font-bold text-white">Resources</span>
              <div className="w-full h-[1px] bg-neutral-grayish-violet"></div>
              <span className="font-bold text-white">Login</span>
              <button className="font-bold text-white bg-primary-cyan py-2 rounded-full w-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
