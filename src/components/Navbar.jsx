import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-violet-500">Anjali Lal</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-100">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-violet-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-900 text-gray-100 flex flex-col gap-4 p-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block py-2 px-4 hover:bg-violet-600 rounded"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
