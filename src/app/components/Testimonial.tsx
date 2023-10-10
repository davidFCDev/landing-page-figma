"use client";

import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="flex gap-10 px-20 py-48 justify-center items-center">
      <div className="flex flex-col gap-4 w-[40%]">
        <h3 className="text-green font-bold text-2xl tracking-[0.3em] font-rubik">
          TESTIMONIALS
        </h3>
        <h1 className="text-6xl font-bold leading-[1.3em] tracking-wide font-averia">
          Our community loves Edufy
        </h1>
        <p className="text-xl text-dark font-semibold font-avaria">
          In recent times, there has been a notable shift as people increasingly
          embrace and prioritize education of their children.
        </p>
        <div className="flex gap-1 items-center">
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <p className="font-bold">4.9/5</p>
          <p>(4500+ Reviews)</p>
        </div>
      </div>

      <TestimonialCard />
    </div>
  );
};

export default Testimonial;
