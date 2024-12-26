import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Portfolio Perch</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="https://ecgrobotics.org/ftc10195/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              About the Team
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEO4ifptS7LqIjBBJTRyEO3BSJ6wb-KkQPREObv2NO3X1GXg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Submit Portfolio
            </a>
            <button
              className="flex items-center space-x-2 rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="https://ecgrobotics.org/ftc10195/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
              >
                About the Team
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdEO4ifptS7LqIjBBJTRyEO3BSJ6wb-KkQPREObv2NO3X1GXg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
              >
                Submit Portfolio
              </a>
              <button
                className="mt-2 flex w-full items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Team;