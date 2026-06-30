import React from "react";

const Stats = () => {
  return (
    <section className="bg-blue-600 text-white py-20">

      <h2 className="text-5xl font-bold text-center mb-16">
        Our Achievements
      </h2>

      <div className="flex justify-evenly">

        <div className="text-center">
          <h1 className="text-6xl font-bold">1200+</h1>
          <p className="mt-3 text-xl">Projects Submitted</p>
        </div>

        <div className="text-center">
          <h1 className="text-6xl font-bold">500+</h1>
          <p className="mt-3 text-xl">Students</p>
        </div>

        <div className="text-center">
          <h1 className="text-6xl font-bold">50+</h1>
          <p className="mt-3 text-xl">Teachers</p>
        </div>

        <div className="text-center">
          <h1 className="text-6xl font-bold">98%</h1>
          <p className="mt-3 text-xl">Success Rate</p>
        </div>

      </div>

    </section>
  );
};

export default Stats;