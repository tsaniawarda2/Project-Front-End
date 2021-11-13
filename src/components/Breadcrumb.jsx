import React from "react";

export default function Breadcrumb() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
    </div>
  );
}
