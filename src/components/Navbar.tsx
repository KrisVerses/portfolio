import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

/**
 * A string containing a complex list of Tailwind CSS classes for styling navigation links.
 *
 * - `px-4`: Adds padding on the left and right sides.
 * - `font-inter`: Applies the "Inter" font family.
 * - `hover:text-accent`: Changes the text color to the accent color on hover.
 * - `transition-all`: Applies a transition effect to all properties.
 * - `duration-200`: Sets the transition duration to 200ms.
 * - `ease-in-out`: Uses the "ease-in-out" timing function for the transition.
 * - `inline-block`: Displays the element as an inline-level block container.
 * - `transform`: Enables transformations on the element.
 * - `hover:scale-[1.1]`: Scales the element to 110% on hover.
 * - `relative`: Positions the element relative to its normal position.
 * - `after:absolute`: Positions the `::after` pseudo-element absolutely.
 * - `after:bottom-0`: Positions the `::after` pseudo-element at the bottom.
 * - `after:left-1/2`: Positions the `::after` pseudo-element at the horizontal center.
 * - `after:transform`: Enables transformations on the `::after` pseudo-element.
 * - `after:-translate-x-1/2`: Translates the `::after` pseudo-element to the left by 50%.
 * - `after:h-[1px]`: Sets the height of the `::after` pseudo-element to 1 pixel.
 * - `after:w-0`: Sets the initial width of the `::after` pseudo-element to 0.
 * - `hover:after:w-1/2`: Expands the width of the `::after` pseudo-element to 50% on hover.
 * - `after:transition-all`: Applies a transition effect to all properties of the `::after` pseudo-element.
 * - `after:duration-300`: Sets the transition duration of the `::after` pseudo-element to 300ms.
 * - `after:bg-accent`: Sets the background color of the `::after` pseudo-element to the accent color.
 */
const navLinkStyles =
  "px-6 font-inter hover:text-accent transition-all duration-200 ease-in-out inline-block transform hover:scale-[1.1] relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-[1px] after:w-0 hover:after:w-1/2 after:transition-all after:duration-300 after:bg-accent";
const Navbar = () => {
  return (
    <header className="container flex justify-center sm:justify-between items-center py-4 px-8">
      <figure className="flex items-center space-x-4">
        <img
          className="max-h-52"
          src="../../public/images/KV-Logo.png"
          alt="logo for site"
        />
        <div className="font-inter tracking-wide font-bold hidden sm:block">
          <div className="text-md">
            <p>Kris Verses</p>
          </div>
          <p className="text-[12px] font-light py-2">Creative Developer</p>
        </div>
      </figure>
      <nav className="hidden sm:block">
        <ul className="flex">
          <li className="inline-block">
            <Link className={navLinkStyles} to="/">
              Home
            </Link>
          </li>
          <li className="inline-block">
            <Link className={navLinkStyles} to="/about">
              About
            </Link>
          </li>
          <li className="inline-block">
            <Link className={navLinkStyles} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="visible sm:hidden justify-self-end">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
