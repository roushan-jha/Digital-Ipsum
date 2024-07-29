import React from "react";
import Testimonials from "../components/Testimonials";
import PropertyCard from "../components/PropertyCard";
import ArrowRight from "../svg/ArrowRight";

const PropertyDetailsPage = () => {
  return (
    <div className="font-primary">
      <div className="h-[50vh] bg-primary flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-5xl text-white">Property Details</h1>
        <p className="font-medium text-white">Home / Property Details</p>
      </div>
      <div className="p-32">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-2xl">
                Luxury Beachfront Villa
              </h2>
              <p className="opacity-60">18 Malibu, CA</p>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-6 items-center justify-center">
                  <span className="px-3 py-2 bg-secondary rounded-lg text-sm">
                    For Sale
                  </span>
                  <span className="font-semibold text-3xl">$ 6,490</span>
                </div>
                <div className="flex justify-between gap-2">
                  <div className="flex items-center gap-[2px]">
                    <ArrowRight />
                    <p className="font-medium text-sm">2 Beds</p>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <ArrowRight />
                    <p className="font-medium text-sm">2 Baths</p>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <ArrowRight />
                    <p className="font-medium text-sm">800 sqft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3/4 bg-primary rounded-xl h-[64vh]"></div>
            <div className="w-1/4 flex flex-col gap-4">
              <div className="bg-primary rounded-xl h-[25vh]"></div>
              <div className="bg-primary rounded-xl h-[25vh]"></div>
              <div>
                <button className="border-[1px] border-primary rounded-lg text-center py-3 px-4 w-full font-medium">See All Photos</button>
              </div>
            </div>
          </div>
          <div className="pt-24 flex justify-between items-center gap-12">
              <div className="w-1/4 bg-gray-100 h-[50vh] rounded-xl p-6 flex flex-col justify-center gap-3">
                <h5 className="font-medium text-xl">Details</h5>
                <div className="flex justify-between items-center">
                  <p className="w-1/2">Lot area</p>
                  <p className="w-1/2">:900 sqft</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="w-1/2">Beds</p>
                  <p className="w-1/2">:4 beds</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="w-1/2">Baths</p>
                  <p className="w-1/2">:4 baths</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="w-1/2">Rooms</p>
                  <p className="w-1/2">:12 rooms</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="w-1/2">Price</p>
                  <p className="w-1/2">:$6,490</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="w-1/2">Status</p>
                  <p className="w-1/2">:For sale</p>
                </div>
              </div>
              <div className="w-3/4 flex flex-col gap-8">
                <h3 className="font-medium text-2xl">Overview</h3>
                <div className="flex flex-col gap-6">
                  <p>Iaculis urna sed feugiat donec vitae vestibulum praesent. Facilisis ultrices curabitur porttitor gravida neque aliquam sem eget ipsum. Nulla tortor vitae aenean ullamcorper euismod. Praesent nisi pretium neque malesuada. Convallis nunc sed tempus purus risus. Cursus dui faucibus aliquet tristique quam urna.</p>
                  <p>Gravida urna nam duis sed id donec odio sed. Odio ornare lorem pellentesque dictum vitae. Faucibus convallis blandit cursus a at nunc id eget libero. Molestie a sem elit blandit sit velit ut purus tempus. Mattis consectetur pellentesque turpis condimentum in dapibus leo neque. Neque scelerisque ullamcorper cras amet integer at sagittis scelerisque. Lacus elementum nunc eget erat nunc lectus. Purus at feugiat sed volutpat porttitor. </p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className="p-32 flex flex-col gap-4">
        <h2 className="font-semibold text-2xl">Related Properties</h2>
        <div className="flex justify-between gap-6">
          <PropertyCard tag="sale" />
          <PropertyCard tag="rent" />
          <PropertyCard tag="sale" />
          <PropertyCard tag="rent" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
