import React from "react";
import PropertyCard from "../components/PropertyCard";
import FeaturedProperties from "../components/FeaturedProperties";
import video_icon from "../assets/Play Icon.png";

const PropertyListPage = () => {
  return (
    <div className="font-primary">
      <div className="h-[50vh] bg-primary flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-5xl text-white">Property List</h1>
        <p className="font-medium text-white">Home / Property List</p>
      </div>
      <div className="p-32 flex flex-col gap-6">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="font-semibold text-3xl">
            Explore Our Latest Properties
          </h2>
          <p className="opacity-60">Faucibus massa lorem purus sit in nunc.</p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-6">
            <PropertyCard tag="sale" />
            <PropertyCard tag="rent" />
            <PropertyCard tag="sale" />
            <PropertyCard tag="rent" />
          </div>
          <div className="flex gap-6">
            <PropertyCard tag="sale" />
            <PropertyCard tag="rent" />
            <PropertyCard tag="sale" />
            <PropertyCard tag="rent" />
          </div>
        </div>
      </div>
      <FeaturedProperties />
      <div className="flex justify-between gap-10 px-32 py-16">
        <PropertyCard width={"w-1/3"} tag="sale" />
        <PropertyCard width={"w-1/3"} tag="rent" />
        <PropertyCard width={"w-1/3"} tag="sale" />
      </div>
      <div className="px-32 pt-16 pb-32">
        <div className="w-full h-[70vh] flex justify-center items-center bg-gray-300 rounded-t-xl relative">
          <div className="absolute top-[30vh]">
            <img src={video_icon} alt="Video Icon" />
          </div>
        </div>
        <div className="font-primary flex justify-between p-12 bg-primary rounded-b-xl">
          <h3 className="w-1/2 font-medium text-3xl text-white">
            Get Attractive Property Offers Into Your Inbox
          </h3>
          <div className="w-1/2 flex gap-6 justify-end items-center">
            <input
              className="px-4 py-3 rounded-md focus:outline-none"
              type="text"
              placeholder="your email"
            />
            <button className="flex gap-3 items-center px-6 py-3 font-medium bg-secondary rounded-md">
              Get Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListPage;
