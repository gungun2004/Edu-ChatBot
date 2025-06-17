import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-center text-gray-600 py-4 text-sm mt-10 shadow-inner">
      <p>
        © {new Date().getFullYear()} EduGO. Built with 💙 by students, for students.
      </p>
    </footer>
  );
};

export default Footer;
