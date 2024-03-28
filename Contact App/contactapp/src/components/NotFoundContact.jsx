import React from "react";

const NotFoundContact = () => {
  return (
    <div className="flex gap-4 justify-center items-center h-[80vh]">
      <div>
        <img src="/contact.png" />
      </div>
      <h3 className="text-2xl font-semibold text-white">Contact Not Found</h3>
    </div>
  );
};

export default NotFoundContact;
