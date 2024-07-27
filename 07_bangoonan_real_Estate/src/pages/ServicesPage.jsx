import React from "react";
import Contact from "../components/Contact";
import Agents from "../components/Agents";
import video_icon from "../assets/Play Icon.png";
import check from '../assets/check.png'

const ServicesPage = () => {
  return (
    <div className="font-primary">
      <div className="h-[50vh] bg-primary flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-5xl text-white">Our Services</h1>
        <p className="font-medium text-white">Home / Our Services</p>
      </div>
      <div>
        <div className="flex justify-between gap-10 items-center p-32">
          <div className="w-1/2 h-auto flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-2xl">Discover Our Services</h3>
              <p className="opacity-60 text-sm">Quis in porttitor purus sed</p>
            </div>
            <p className="w-4/5 text-sm">
              Integer metus eros diam in commodo erat felis. Lorem scelerisque
              mattis scelerisque ut fames sit. Eget in risus aliquam pulvinar
              tempor. Tristique sed aliquam eget lorem id et fringilla placerat
              lobortis.
            </p>
            <div className="flex flex-col gap-3">
              <div className="w-4/5 flex justify-between items-center hover:bg-slate-100 bg-gray-200 bg-opacity-50 px-4 py-3 rounded-md font-medium">
                <p>Real Estate Investment</p>
                <span className="px-[4px] py-[2px] text-sm bg-secondary rounded-md">
                  90%
                </span>
              </div>
              <div className=" w-4/5 flex justify-between items-center hover:bg-slate-100 bg-gray-200 bg-opacity-50 px-4 py-3 rounded-md font-medium">
                <p>Property Management</p>
                <span className="px-[4px] py-[2px] text-sm bg-secondary rounded-md">
                  96%
                </span>
              </div>
              <div className=" w-4/5 flex justify-between items-center hover:bg-slate-100 bg-gray-200 bg-opacity-50 px-4 py-3 rounded-md font-medium">
                <p>Real Estate Consulting</p>
                <span className="px-[4px] py-[2px] text-sm bg-secondary rounded-md">
                  90%
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[50vh] bg-primary rounded-xl flex justify-end items-end">
            <div className="w-3/5 bg-slate-200 rounded-tl-lg p-6  flex justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-semibold text-2xl">10K</h2>
                <p className="opacity-60 text-sm">Properties sold</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-semibold text-2xl">50+</h2>
                <p className="opacity-60 text-sm">Country served</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-24 items-center px-32 pb-32">
          <div className="w-2/5 h-[60vh] bg-primary rounded-xl"></div>
          <div className="w-3/5 h-auto flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-2xl">Discover Our Services</h3>
              <p className="opacity-60 text-sm">Quis in porttitor purus sed</p>
            </div>
            <p className="text-sm">
              Integer metus eros diam in commodo erat felis. Lorem scelerisque
              mattis scelerisque ut fames sit. Eget in risus aliquam pulvinar
              tempor. Tristique sed aliquam eget lorem id et fringilla placerat
              lobortis.
            </p>
            <div className="flex justify-between gap-10">
              <div className="w-1/2 flex flex-col gap-2">
                  <div>
                    <img src={check} alt="Icon" />
                  </div>
                  <h3 className="font-medium text-xl">Hassle-free Process</h3>
                  <p className="text-sm opacity-60">Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.</p>
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                  <div>
                    <img src={check} alt="Icon" />
                  </div>
                  <h3 className="font-medium text-xl">Competitive Pricing</h3>
                  <p className="text-sm opacity-60">Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70vh] mx-32 flex justify-center items-center bg-gray-300 rounded-xl relative">
        <div className="absolute top-[30vh]">
          <img src={video_icon} alt="Video Icon" />
        </div>
      </div>
      <Agents />
      <div className="px-32 bg-slate-200 flex justify-between">
        <div className="w-2/5 h-[80vh] bg-primary"></div>
        <div className="w-3/5 flex justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-2xl">Featured Properties</h2>
              <p className="opacity-60 text-sm">
                Faucibus massa lorem purus sit in nunc.
              </p>
            </div>
            <div className="h-[1px] bg-primary bg-opacity-10"></div>
            <div className="flex flex-col gap-2">
              <button className="w-[30%] bg-secondary px-6 py-2 font-medium text-sm rounded-md">
                For Sale
              </button>
              <div className="flex justify-between items-center gap-6">
                <div>
                  <h3 className="font-medium text-xl">
                    Luxurious Modern House
                  </h3>
                  <p className="text-sm opacity-60">36 Future, CO</p>
                </div>
                <p className="font-semibold text-3xl">$ 4,490</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/3 h-[150px] bg-white rounded-md text-sm flex justify-center items-end pb-3 opacity-60">
                3 Beds
              </div>
              <div className="w-1/3 h-[150px] bg-white rounded-md text-sm flex justify-center items-end pb-3 opacity-60">
                3 Baths
              </div>
              <div className="w-1/3 h-[150px] bg-white rounded-md text-sm flex justify-center items-end pb-3 opacity-60">
                800 sqft
              </div>
            </div>
            <button className="w-2/3 px-6 py-3 bg-primary text-white font-medium rounded-md">
              Schedule A Tour
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ServicesPage;
