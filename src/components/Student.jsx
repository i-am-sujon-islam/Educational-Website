import React from "react";

// Student Component

const Student = ({ imgLink, userName, title, gmail }) => {
  return (
    <div>
      <div className="max-w-sm flex flex-col justify-center items-center p-2 hover:shadow-lg">
        <img src={imgLink} alt="Img" className="w-36 rounded-full" />
        <h2 className="text-xl font-bold text-blue-700 hover:text-red-700 duration-200 cursor-pointer">
          {userName}
        </h2>
        <h4 className="text-lg text-gray-700">{title}</h4>
        <a href={gmail} className="text-gray-700">
          {gmail}
        </a>
      </div>
    </div>
  );
};

export default Student;
