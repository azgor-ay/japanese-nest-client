import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipes from "../../components/Recipes";
import { FaAward } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const DetailsChef = () => {
  const data = useLoaderData();
  const {
    awards,
    num_recipes,
    num_likes,
    description,
    experience_year,
    name,
    picture,
    signature_dish,
    specialty,
  } = data;

  return (
    <div className="container mx-auto">
      {/* Single Chef Banner */}
      <div className="grid md:grid-cols-3">
        <div className="p-5 md:col-span-2 text-white md:text-black">
          <div className="h-48">
            <LazyLoad>
              <img
                className="w-full overflow-hidden rounded-lg"
                src={picture}
                alt=""
              />
            </LazyLoad>
          </div>
          <div class="ms-4">
            <span 
            className="bg-clip-text text-5xl font-extrabold drop-shadow-md text-transparent bg-gradient-to-r from-green-500 to-violet-900">
              {name}{" "}
            </span>
            <div className="font-bold">
              <p className="badge badge-success">
                Total {experience_year} years of cooking experience
              </p>
            </div>
            <div>
              <h4 className="font-bold pt-4 text-xl drop-shadow">
                Gained Awards
              </h4>
              {awards.map((a) => (
                <div>
                  <p className="ms-6 font-semibold badge">
                    {" "}
                    <FaAward className="inline" /> {a}
                  </p>
                </div>
              ))}
            </div>
            <div className="py-1">
              <div className="badge badge-secondary">
                <p>Signature Dish: {signature_dish}</p>
              </div>
              <div className="badge badge-secondary md:ms-8">
                <p>Specialty on: {specialty}</p>
              </div>
            </div>
            <div className="pb-5">
              <div className="badge badge-secondary">
                <p>Number of Recipes: {num_recipes}</p>
              </div>
              <div className="badge badge-secondary md:ms-8">
                <p>Total Likes: {num_likes}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-bold py-5 mt-12 text-3xl text-white">
            Words that describe {name} the best{" "}
          </h1>
          <p className="leading-relaxed text-gray-400 px-8 md:px-0">{description}</p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl md:text-5xl py-6 text-white font-bold text-center md:mt-28">
          Best recipes of <span className="text-green-500">{name}</span>
        </h1>
        <Recipes></Recipes>
      </div>
    </div>
  );
};

export default DetailsChef;
