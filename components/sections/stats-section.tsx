"use client";

import CountUp from "../CountUp/CountUp";

export default function StatsSection() {
  return (
    <section className="py-16 bg-muted/30 w-full pt-10 ">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Head Count */}
        <div className="p-6  rounded-2xl ">
          <h2 className="text-5xl font-bold ">
            <CountUp to={100} duration={2} />+
          </h2>
          <p className="mt-2 text-gray-300 text-lg font-medium">Head Count</p>
        </div>

        {/* Client Satisfied */}
        <div className="p-6  rounded-2xl ">
          <h2 className="text-5xl font-bold ">
            <CountUp to={100} duration={2} />+
          </h2>
          <p className="mt-2 text-gray-300 text-lg font-medium">
            Client Satisfied
          </p>
        </div>

        {/* Years in Business */}
        <div className="p-6  rounded-2xl ">
          <h2 className="text-5xl font-bold ">
            <CountUp to={15} duration={2} />
          </h2>
          <p className="mt-2 text-gray-300 text-lg font-medium">
            Years in Business
          </p>
        </div>
      </div>
    </section>
  );
}
