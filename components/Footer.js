import React from "react";

export default function Footer() {
  return (
    <div className="bg-kisiBlack pt-20 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex">
          <div className="mr-20">
            <a href="">
              <img
                className=""
                src="https://res.cloudinary.com/kisi-kloud/image/upload/c_limit,co_rgb:ffffff,dpr_auto,e_colorize,f_auto,q_auto:good,w_136/c_limit,w_68/v1/logos/kisi/kisi-logo"
                alt="kisi logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-4 gap-12 text-white">
            <div>
              <p className="pt-2 pb-6 text-xl font-bold">Products</p>
              <ul>
                <li className="mb-8 font">Product Overview</li>
                <li className="mb-8 ">Kisi Reader Pro</li>
                <li className="mb-8 ">Kisi Controller</li>
                <li className="mb-8 ">Mobile and Keycards</li>
                <li className="mb-8 ">Management Software</li>
                <li className="mb-8 ">Integrations</li>
              </ul>
            </div>
            <div>
              <p className="pt-2 pb-6 text-xl font-bold">Learn More</p>
              <ul>
                <li className="mb-8 ">How Kisi Works</li>
                <li className="mb-8 ">Get Quote</li>
                <li className="mb-8 ">Pricing</li>
                <li className="mb-8 ">Customers</li>
                <li className="mb-8 ">Secure by design</li>
                <li className="mb-8 ">Access Control Guide</li>
              </ul>
            </div>
            <div>
              <p className="pt-2 pb-6 text-xl font-bold">Products</p>
              <ul>
                <li className="mb-8 ">Product Overview</li>
                <li className="mb-8 ">Kisi Reader Pro</li>
                <li className="mb-8 ">Kisi Controller</li>
                <li className="mb-8 ">Mobile and Keycards</li>
                <li className="mb-8 ">Management Software</li>
                <li className="mb-8 ">Integrations</li>
              </ul>
            </div>
            <div>
              <p className="pt-2 pb-6 text-xl font-bold">Help</p>
              <ul>
                <li className="mb-8 ">Support</li>
                <li className="mb-8 ">Contact</li>
                <li className="mb-8 ">Press</li>
                <li className="mb-8 ">(+1) 646 663 4880</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
