import React from "react";

export default function Social() {
  return (
    <div>
      <main className="py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-lg font-bold mb-10">Follow Us</h1>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/Kisi.Inc/"
                rel="noreferrer"
                target="_blank"
                alt="facebook link"
              >
                <img
                  className="px-10"
                  src={`https://www.getkisi.com/images/facebook-2.svg`}
                  alt="facebook"
                />
              </a>
              <a href="https://twitter.com/KISI" className="">
                <img
                  className="px-10"
                  src={`https://www.getkisi.com/images/twitter-2.svg`}
                  alt="twitter"
                />
              </a>
              <a href="https://www.instagram.com/getkisi/">
                <img
                  className="px-10"
                  src={`https://www.getkisi.com/images/instagram.svg`}
                  alt="instagram"
                />
              </a>
              <a href="https://www.linkedin.com/company/kisi/">
                <img
                  className="px-10"
                  src={`https://www.getkisi.com/images/linkedin-Copy-2.svg`}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
