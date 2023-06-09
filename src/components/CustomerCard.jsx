import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";

const CustomerCard = ({ feedBack }) => {
  const { photo, name, feedback, ratings } = feedBack;
  return (
    <div className="md:w-56 bg-gray-600 bg-opacity-40 flex flex-col rounded-lg">
      <LazyLoad>
        <div className="">
          <img className="w-full rounded-t-lg" src={photo} alt="customers" />
        </div>
      </LazyLoad>
      <div className="px-6">
        <p className="text-2xl font-semibold text-center py-2 text-white">
          {name}
        </p>
        <p className="text-xs text-gray-300">
          {feedback.split(" ").slice(0, 20).join(" ")} ...
          <span className="link">Read More</span>
        </p>
      </div>
      <div className="flex items-center justify-start mx-auto mt-auto p-2">
        <Rating
          className="px-2"
          style={{ maxWidth: 150 }}
          value={ratings}
          readOnly
        />{" "}
        <span>{ratings}</span>
      </div>
    </div>
  );
};

export default CustomerCard;
