import React from "react";

export default function FeaturesCard({ header, text }) {
  return (
    <div className="card bg-white/50">
      <div className="card-body">
        <h2 className="card-header text-purple-950">{header}</h2>
        <p className="text-purple-950">{text}</p>
      </div>
    </div>
  );
}
