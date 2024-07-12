import React from "react";
import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <li>
          <Link to={"/"}>
            <IoHomeOutline className="icon" />
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to={"/products"}>
            <MdOutlineProductionQuantityLimits className="icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to={"/comments"}>
            <BiCommentDetail className="icon" />
            کامنت‌ها
          </Link>
        </li>
        <li>
          <Link to={"/users"}>
            <FiUsers className="icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to={"/orders"}>
            <IoBagCheckOutline className="icon" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="/offs">
            <BsCurrencyDollar className="icon" />
            تخفیف‌ها
          </Link>
        </li>
      </ul>
    </div>
  );
}
