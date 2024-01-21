import React, { useState } from "react";
import photos from "../../assets/Image/image-removebg-preview (7).png";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const menus = [
  {
    id: "1",
    menu: "Home",
    path: "/",
  },
  { id: "2", menu: "About", path: "/about" },
  {
    id: "3",
    menu: "Contact Us",
    path: "/contact",
  },
  { id: "4", menu: "Project", path: "/project" },
];
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handelMEnu = () => {
    setMenu(!menu);
  };
  return (
    <div className=" mainDiv">
      {/* Mobile Views */}
      <div className=" md:hidden flex justify-between">
        {/* Logo NAme */}
        <div className="flex justify-start items-center gap-2">
          <img className=" h-16 w-16 " src={photos}></img>
          <h1 className=" font-bold">Towhura Constructions</h1>
        </div>
        {/* Icon */}
        <div className=" flex justify-end items-center">
          <button onClick={handelMEnu} className=" text-2xl px-4">
            <TiThMenu />
          </button>
        </div>
      </div>
      {/* Onclick Menu */}
      <div className={`${menu ? " block md:hidden relative" : " hidden "}`}>
        <div className=" absolute -top-4 left-20 flex justify-center md:hidden items-center gap-8">
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {" "}
              {menu.menu}
              {}
            </NavLink>
          ))}
        </div>
      </div>

      {/* MD/Lg Views */}
      <div className="hidden w-[425px] md:w-[740px] md:mx-auto lg:w-full md:flex justify-between text-xl font-bold">
        {/* Logo */}
        <div className="flex justify-start items-center gap-2">
          <img className=" h-20 w-16 " src={photos}></img>
          <h1 className=" font-bold">Towhura Constructions</h1>
        </div>
        {/* Menu */}
        <div className=" flex justify-center items-center gap-8">
          {menus.map((menu) => (
            <NavLink
              to={menu.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {" "}
              {menu.menu}
              {}
            </NavLink>
          ))}
        </div>
        {/* Login */}
        <div className=" flex items-center">
          <button className=" hover:border-b-4 border-black border-2 rounded-b-md rounded-t-md px-4">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
