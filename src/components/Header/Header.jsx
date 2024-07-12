import React from "react";
import "./Header.css";
import { CiBellOn } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img className="profile-img" src="images/person.png" alt="profile" />
        <div>
          <h1>مهدیه احمدی</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>
      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جستجو کنید ..." />
          <button>جستجو</button>
        </div>
        <button className="header-left-icon">
          <CiBellOn />
        </button>
        <button className="header-left-icon">
          <CiBrightnessDown />
        </button>
      </div>
    </div>
  );
}
