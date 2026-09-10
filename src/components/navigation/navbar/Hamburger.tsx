import type { JSX } from "react";

type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function Hamburger({ isOpen, toggleMenu }: HamburgerProps): JSX.Element {
  return (
      <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-lg p-2 text-text hover:bg-line/40 focus:outline-none focus:ring-2 focus:ring-text/20 md:hidden"
          aria-label={
              isOpen ? "Fermer le menu" : "Ouvrir le menu"
          }
          aria-expanded={isOpen}
      >
          <svg
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
          >
              {isOpen ? (
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                  />
              ) : (
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                  />
              )}
          </svg>
      </button>
  );
}
