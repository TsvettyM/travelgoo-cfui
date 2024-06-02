import HomepageSectionServiceBox from "./HomepageSectionServiceBox";

const HomepageSectionService = () => {
  return (
    <section className="homepage__service">
      <div className="container">
        <h2>Our Service</h2>
        <div className="service__list">
          <HomepageSectionServiceBox
            description="We book all kind of national or international ticket for your destinaion."
            title="Ticket Booking"
            icon="ticket"
          />

          <HomepageSectionServiceBox
            description="You can easily book your according to your budget hotel by our website."
            title="Hotel Booking"
            icon="booking"
          />

          <HomepageSectionServiceBox
            description="We provide you the best plan within a short time explore more."
            title="Tour Plan"
            icon="tour"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionService;
