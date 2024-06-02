import Image from "next/image";
import HomepageSectionTripBox from "./HomepageSectionTripBox";

const HomepageSectionTrip = () => {
  return (
    <section className="homepage__trip">
      <h3>Book Your Next Trip in 3 Easy Steps</h3>
      <p>Easy and Fast</p>

      <div className="container">
        <div className="left__side">
          <HomepageSectionTripBox
            icon="choose"
            title="Choose Destination"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
          />

          <HomepageSectionTripBox
            icon="payment"
            title="Make Payment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
          />

          <HomepageSectionTripBox
            icon="airport"
            title="Reach Airport on Selected Date"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
          />
        </div>

        <div className="right__side">
          <Image
            src="/images/trip-right-side.png"
            alt=""
            fill
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionTrip;
