import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-20 text-gray-600">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
            <img src={Logo} alt="Dev Stack Logo" className="h-10" />
          <p className="mt-3 max-w-md text-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-5 flex gap-5 text-sm">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">PRODUCT</h3>
          <div className="mt-4 space-y-2 text-sm">
            <p>Home</p>
            <p>Technologies</p>
            <p>Projects</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-900">COMPANY</h3>
          <div className="mt-4 space-y-2 text-sm">
            <p>About</p>
            <p>Contact</p>
            <p>Careers</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mx-auto mt-12 max-w-7xl border-t pt-5 text-xs">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-2 text-gray-400">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
