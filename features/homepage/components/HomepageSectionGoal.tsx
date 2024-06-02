import Image from "next/image";
import HomepageSectionGoalBox from "./HomepageSectionGoalBox";

const HomepageSectionGoal = () => {
  return (
    <section className="homepage__goal">
      <Image src="/images/goal-map.png" alt="" fill draggable={false} />

      <div className="container">
        <h2>We always try to give you the best service</h2>
        <p>
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority.
        </p>

        <div className="goal__list">
          <HomepageSectionGoalBox
            description="15+"
            title="Years of Experience"
            icon="experience"
          />

          <HomepageSectionGoalBox
            description="15k+"
            title="Happy Travellers"
            icon="traveller"
          />

          <HomepageSectionGoalBox
            description="650+"
            title="Places Visited"
            icon="visited"
          />

          <HomepageSectionGoalBox
            description="2k+"
            title="Travel History"
            icon="history"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionGoal;
