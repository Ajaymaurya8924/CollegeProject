import React from "react";

const Features = () => {
  return (
    <section className="py-24 bg-white">

      <div className="text-center">

        <h2 className="text-5xl font-bold text-slate-800">

          Our Features

        </h2>

        <p className="text-gray-500 mt-5 text-lg">

          Everything you need to manage student projects efficiently.

        </p>

      </div>

      <div className="flex justify-center gap-10 mt-20 px-20">

        {/* Card 1 */}

        <div className="bg-white shadow-xl rounded-3xl p-10 w-96 hover:-translate-y-2 hover:shadow-2xl transition">

          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-5xl">

            📤

          </div>

          <h3 className="text-3xl font-bold mt-8">

            Submit Project

          </h3>

          <p className="text-gray-600 mt-5 leading-8">

            Students can submit their academic projects with title,
            description and assigned teacher in just one click.

          </p>

        </div>

        {/* Card 2 */}

        <div className="bg-white shadow-xl rounded-3xl p-10 w-96 hover:-translate-y-2 hover:shadow-2xl transition">

          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-5xl">

            ✅

          </div>

          <h3 className="text-3xl font-bold mt-8">

            Teacher Approval

          </h3>

          <p className="text-gray-600 mt-5 leading-8">

            Teachers can review every project and approve
            or reject it with complete transparency.

          </p>

        </div>

        {/* Card 3 */}

        <div className="bg-white shadow-xl rounded-3xl p-10 w-96 hover:-translate-y-2 hover:shadow-2xl transition">

          <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-5xl">

            📊

          </div>

          <h3 className="text-3xl font-bold mt-8">

            Track Status

          </h3>

          <p className="text-gray-600 mt-5 leading-8">

            Monitor every submitted project with Pending,
            Approved and Rejected status in real time.

          </p>

        </div>

      </div>

    </section>
  );
};

export default Features;