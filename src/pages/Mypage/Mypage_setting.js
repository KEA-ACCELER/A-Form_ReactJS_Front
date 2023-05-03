import React from "react";
import "./Mypage.css";
import profileimg from "../../assets/images/profile_sample1.png";

export default function Mypage_setting() {
  return (
    <div className="Mypage_setting">
      <div className="setting_container1">
        <div className="profile_img">
          <img src={profileimg} alt="" />
        </div>

        <button className="change_photo_button">Change Photo</button>
      </div>

      <div className="setting_container2">
        <div className="buttons">
          <button className="back_button">Back</button>
          <button className="save_changes_button">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
