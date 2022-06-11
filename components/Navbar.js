import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-kisiBlack h-16 flex place-content-around items-center fixed w-full z-50">
      <img
        className="text-white"
        src={`https://res.cloudinary.com/kisi-kloud/image/upload/c_limit,co_rgb:ffffff,dpr_auto,e_colorize,f_auto,q_auto:good,w_136/c_limit,w_68/v1/logos/kisi/kisi-logo`}
        alt="adasd"
      />
      <div className="flex items-center">
        <div className="text-white mx-3">Product</div>
        <div className="text-white mx-3">Solutions</div>
        <div className="text-white mx-3">Resources</div>
        <div className="text-white mx-3">Pricing</div>
        <div className="text-white mx-3 bg-kisiBrand p-2 px-9 rounded-full ml-4">
          Get Quote
        </div>
      </div>
    </nav>
  );
};
