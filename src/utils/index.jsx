import React from "react";

export const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <p className="text-3xl font-bold">Loading...</p>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
