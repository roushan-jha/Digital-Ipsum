import React from "react";
import check from "../assets/check.png";
import circle_3_p from "../assets/3-circle-p.png";
import Jobs from "../components/Jobs";

const jobs = [
  {
    post: "Property Sales Executive",
    salary: "Competitive",
    location: "New York City, NY"
  },
  {
    post: "Commercial Property Sales",
    salary: "$80,000",
    location: "Chicago, IL"
  },
  {
    post: "Sales Representative",
    salary: "$40,000",
    location: "Miami, FL"
  },
]

const CareerPage = () => {
  return (
    <div className="font-primary">
      <div className="h-[50vh] bg-primary flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-5xl text-white">Carrers</h1>
        <p className="font-medium text-white">Home / Carrers</p>
      </div>
      <div className="p-32 flex justify-between gap-16">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-3xl">
              Exciting Opportunities for Real Estate Professionals
            </h2>
            <p className="opacity-60 text-sm">
              Posuere id quam lorem dignissim.
            </p>
          </div>
          <p>
            Odio dui facilisi eu donec pharetra ac mi. Ornare netus non dui
            lorem amet laoreet et gravida fermentum. Platea faucibus duis aenean
            vitae porttitor sagittis. Rhoncus facilisis et nunc gravida
            pellentesque.
          </p>
          <div className="flex justify-between gap-8">
            <div className="w-1/2 flex flex-col items-center justify-center gap-2 bg-slate-200 rounded-md px-12 py-4">
              <h3 className="text-3xl font-semibold">16+</h3>
              <p className="opacity-60">Position Available</p>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center gap-2 bg-slate-200 rounded-md px-12 py-4">
              <h3 className="text-3xl font-semibold">12+</h3>
              <p className="opacity-60">Need Urgently</p>
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-xl w-1/2 h-[50vh]"></div>
      </div>
      <div className="bg-slate-200 p-32 relative">
        <div className="flex justify-between gap-16">
          <div className="bg-primary w-1/2 h-[64vh] rounded-xl"></div>
          <div className="w-1/2 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-3xl">
                Discover the Benefits of Working With Bangoonan
              </h2>
              <p className="opacity-60">Posuere id quam lorem dignissim.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div>
                  <img src={check} alt="Check Icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-medium text-xl">
                    Excellent Communication
                  </h2>
                  <p className="w-4/5 opacity-60 text-sm">
                    Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={check} alt="Check Icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-medium text-xl">
                    Extensive Market Knowledge
                  </h2>
                  <p className="w-4/5 opacity-60 text-sm">
                    Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={check} alt="Check Icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-medium text-xl">Strong Negotiators</h2>
                  <p className="w-4/5 opacity-60 text-sm">
                    Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[18%] flex flex-col items-center justify-center gap-4 bg-white px-6 py-4 rounded-xl absolute bottom-20 left-1/3">
          <div>
            <img src={circle_3_p} alt="Profiles" />
          </div>
          <p className="opacity-60 text-sm">Join 200+ Agent</p>
        </div>
      </div>
      <div className="p-32">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold text-3xl">
              Explore Open Job Positions
            </h2>
            <p className="opacity-60">Posuere id quam lorem dignissim.</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <div className="w-3/4">
                <span className="px-4 py-2 bg-secondary rounded-md">Sales</span>
              </div>
            </div>
            <div className="my-4 flex flex-col gap-4 items-center justify-center">
              <Jobs post={jobs[0].post} salary={jobs[0].salary} location={jobs[0].location} />
              <Jobs post={jobs[1].post} salary={jobs[1].salary} location={jobs[1].location} />
              <Jobs post={jobs[2].post} salary={jobs[2].salary} location={jobs[2].location} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <div className="w-3/4">
                <span className="px-4 py-2 bg-secondary rounded-md">Finance</span>
              </div>
            </div>
            <div className="my-4 flex flex-col gap-4 items-center justify-center">
              <Jobs post={jobs[0].post} salary={jobs[0].salary} location={jobs[0].location} />
              <Jobs post={jobs[1].post} salary={jobs[1].salary} location={jobs[1].location} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
