import React from "react";
import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <NavLink to={"/"}>
          <IoHomeOutline className="icon" />
          صفحه اصلی
        </NavLink>
        <NavLink to={"/products"}>
          <MdOutlineProductionQuantityLimits className="icon" />
          محصولات
        </NavLink>
        <NavLink to={"/comments"}>
          <BiCommentDetail className="icon" />
          کامنت‌ها
        </NavLink>
        <NavLink to={"/users"}>
          <FiUsers className="icon" />
          کاربران
        </NavLink>
        <NavLink to={"/orders"}>
          <IoBagCheckOutline className="icon" />
          سفارشات
        </NavLink>
        <NavLink to="/offs">
          <BsCurrencyDollar className="icon" />
          تخفیف‌ها
        </NavLink>
      </ul>
    </div>
  );
}
