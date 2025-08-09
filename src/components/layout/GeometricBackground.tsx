import React from "react";

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-dark-bg">
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-yellow/5 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-brand-yellow/5 rounded-full filter blur-2xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default GeometricBackground;
