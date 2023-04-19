import React from "react";

import styles from "../styles/Global";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section
      id="features"
      className={`${styles.section} pb-20
      ${styles.bgPrimary} 
      banner03 `}
    >
      <div
        className={`flex items-center 
        ${styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${styles.textLeft}
        `}
        >
          <h1
            className={`
            text-purple-950
          ${styles.h1Text} mr-8 mb-8`}
          >
            Features
          </h1>
          <div className="grid gap-x-24 gap-y-24 sm:grid-cols-1 md:grid-cols-2 grid-cols-3">
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
