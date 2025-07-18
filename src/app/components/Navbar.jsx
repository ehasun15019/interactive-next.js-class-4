import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/add-product">Add Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
