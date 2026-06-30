import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">

      <div className="flex justify-between px-20">

        <div>

          <h2 className="text-3xl font-bold">
            Project Portal
          </h2>

          <p className="mt-4 text-gray-400 w-80">

            Student Project Management System developed using
            React, Node.js, Express and MongoDB.

          </p>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-white cursor-pointer">
              Home
            </li>

            <li className="hover:text-white cursor-pointer">
              Features
            </li>

            <li className="hover:text-white cursor-pointer">
              About
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        <div>

          <h3 className="text-2xl font-semibold mb-5">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 support@projectportal.com
          </p>

          <p className="text-gray-400 mt-3">
            📞 +91 9876543210
          </p>

          <p className="text-gray-400 mt-3">
            📍 Lucknow, Uttar Pradesh
          </p>

        </div>

      </div>

      <hr className="my-10 border-gray-700" />

      <p className="text-center text-gray-500">

        © 2026 Project Portal | Developed by Ajay Maurya

      </p>

    </footer>
  );
};

export default Footer;