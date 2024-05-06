import React from "react";
import Sundaypage from "./Sundaypage";
import Mondaypage from "./Mondaypage";
import Tuesdaypage from "./Tuesdaypage";
import Wenesdaypage from "./Wenesdaypage";
import Thursdaypage from "./Thursdaypage";
import Fridaypage from "./Fridaypage";
import Saturdaypage from "./Saturdaypage";

const Sugesstionpage = () => {
  return (
    <div>
      <div className="row-start">
        <div className="banner">
          <div className="banner-img">
            <img src="https://i.ibb.co/crp25Fp/banner-1.jpg" alt="" />
          </div>
          <div className="banner-title">
            <h1>Women's Lifestyle</h1>
            <h1>colour suggestions</h1>
          </div>
        </div>
      </div>
     
      <Sundaypage />
      <Mondaypage />
      <Tuesdaypage />
      <Wenesdaypage />
      <Thursdaypage />
      <Fridaypage />
      <Saturdaypage />
    </div>
  );
};

export default Sugesstionpage;
