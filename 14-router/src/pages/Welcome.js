import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main>
      <h1>Welcome</h1>

      <Link to={"new-user"}>New User</Link>

      {/* Nested routes placeholder in v6 */}
      <Outlet />
    </main>
  );
}
