import React from "react";

export default function FeaturesCard({ header, text }) {
  return (
    <div className="card bg-white/50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="card-body">
        <h2 className="card-header text-purple text-2xl sm:text-3xl lg:text-4xl">
          {header}
        </h2>
        <p className="text-purple text-base sm:text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}
