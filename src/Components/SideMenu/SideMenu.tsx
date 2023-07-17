import React from "react";
import { GiHamburger } from "react-icons/gi";
import Admin from "../../Assets/user.jpg";

export const SideMenu = () => {
  return (
    <div className=" bg-sideMenuBg relative h-[100%] basis-20 p-4">
      {/* Logo Div */}
      <div className="logo mt-4 gap-2 text-[white] flex items-center justify-center m-auto">
        <GiHamburger className="text-[20px]" />
        <h1 className="text-[20px] align-center justify-center font-black">
          Foodie
        </h1>
      </div>

      {/* User Div */}
      <div className="flex items-center justify-center text-[white] flex-col mt-[3rem] admin">
        <img
          src={Admin}
          alt="Admin Image"
          className="h-[80px] w-[80px] border-red-200 border-[4px] object-cover rounded-full"
        />
        <span className="opacity-70 mt-2 text-gray-400">Welcome</span>
        <h3 className="font-bold text-textColor">Lara Jansey</h3>
      </div>
    </div>
  );
};
