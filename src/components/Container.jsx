import React from "react";

function Container({ children }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white card-container rounded-xl p-5 m-5 dark:border-white border-black border-2 dark:white text-black glow-button font-semibold'">{children}</div>
    </div>
  );
}

export default Container;
