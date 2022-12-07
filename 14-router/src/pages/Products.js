import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <main>
      <h1>Products</h1>
      <ul>
        <Link to="/products/p1">A Book</Link>
        <Link to="/products/p2">A Carpet</Link>
        <Link to="/products/p3">An Online Course</Link>
      </ul>
    </main>
  );
}
