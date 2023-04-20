import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section
      id="features"
      className={`flex justify-center items-center pt-16 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-0 pb-20
  bg-primary
  banner03 `}
    >
      <div
        className={`flex items-center 
    flex-row md:flex-col 
    w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col md:mb-10 lg:ml-44 sm:ml-0 md:ml-5 
      text-left
    `}
        >
          <h1
            className={`
        text-purple
        font-bold font-Barlow text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 mr-8 mb-8`}
          >
            Features
          </h1>
          <div className="grid gap-x-16 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeaturesCard
              header="Period and Cycle Tracking"
              text="Easy-to-use tool for tracking menstrual cycles, including information on cycle length, period duration, and symptoms."
            />
            <FeaturesCard
              header="Menopause Education & Tracking"
              text="Resources and tracking tools for women who are experiencing or approaching menopause, including educational articles and videos, symptom tracking, and expert advice.
          "
            />
            <FeaturesCard
              header="Exercises"
              text="Personalized exercises designed to support women's reproductive health, including exercises to improve menstrual pain, strengthen pelvic muscles, and prepare for childbirth.
          "
            />
            <FeaturesCard
              header="Sustainable Choices"
              text="Learn about eco-friendly menstrual products and sustainable choices for your period.
          "
            />
            <FeaturesCard
              header="Educational Resources"
              text="A range of educational resources tailored specifically for African women, including articles, videos, and expert advice on reproductive health and wellness.
          "
            />
            <FeaturesCard
              header="Community"
              text="Connect with other African women through the Poka community, sharing experiences, tips, and advice on reproductive health and wellness."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
