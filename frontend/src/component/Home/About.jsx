import React from "react";

const About = () => {
  return (
    <section className="bg-slate-100 py-24 px-20">

      <div className="flex justify-between items-center gap-20">

        <div className="w-1/2">

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
            alt="About"
            className="rounded-3xl shadow-2xl"
          />

        </div>

        <div className="w-1/2">

          <h2 className="text-5xl font-bold text-slate-800">
            About Project Portal
          </h2>

          <p className="text-gray-600 mt-8 leading-8 text-lg">

            Project Portal is a web application developed using the
            MERN Stack. It allows students to submit their academic
            projects online while teachers can review, approve,
            or reject submissions easily.

          </p>

          <p className="text-gray-600 mt-6 leading-8 text-lg">

            This system eliminates paperwork and provides a fast,
            transparent, and organized workflow for project
            management.

          </p>

          <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
};

export default About;