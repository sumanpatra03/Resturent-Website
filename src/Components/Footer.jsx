// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white my-28 mb-0">
      <div className="grid grid-cols-2 md:grid-cols-5 py-10 pl-6 ">
        <div>
          <h2 className="font-bold mb-3 text-[30px]">
            Yami<span className="text-[#fbc531]">Food</span>
          </h2>
          <p className="text-[20px] text-[gray]">
            © 2024 Bundl Technologies Pvt. Ltd
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-3 text-[20px]">Company</h2>
          <p className="text-[gray] mb-2 text-[20px]">About</p>
          <p className="text-[gray] mb-2 text-[20px]">Careers</p>
          <p className="text-[gray] mb-2 text-[20px]">Team</p>
        </div>

        <div>
          <h2 className="font-bold mb-3 text-[25px]">Contact us</h2>
          <p className="text-[gray] mb-2 text-[20px]">Help & Support</p>
          <p className="text-[gray] mb-2 text-[20px]">Partner with us</p>
          <p className="text-[gray] mb-2 text-[20px]">Ride with us</p>
        </div>

        <div>
          <h2 className="font-bold mb-3 text-[25px]">Legal</h2>
          <p className="text-[gray] mb-2 text-[20px]">Terms & Conditions</p>
          <p className="text-[gray] mb-2 text-[20px]">Cookie Policy</p>
          <p className="text-[gray] mb-2 text-[20px]">Privacy Policy</p>
          <p className="text-[gray] mb-2 text-[20px]">Investor Relations</p>
        </div>

        <div>
          <h2 className="font-bold mb-3 text-[25px]">We deliver to:</h2>
          <p className="text-[gray] mb-2 text-[20px]">Bangalore</p>
          <p className="text-[gray] mb-2 text-[20px]">Gurgaon</p>
          <p className="text-[gray] mb-2 text-[20px]">Hyderabad</p>
          <p className="text-[gray] mb-2 text-[20px]">Mumbai</p>
          <p className="text-[gray] mb-2 text-[20px]">Delhi</p>
          <p className="text-[gray] mb-2 text-[20px]">Pune</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
