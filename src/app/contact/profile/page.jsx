import React from "react";

const delay = (ms) =>
  new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });

const page = async () => {
  // 2 second delay
  await delay(2000);
  return (
    <div>
      <h2>this is profile</h2>
    </div>
  );
};

export default page;
