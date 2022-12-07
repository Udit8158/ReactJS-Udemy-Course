import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams(); // taking value of dynamic routing

  return (
    <main>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </main>
  );
}
