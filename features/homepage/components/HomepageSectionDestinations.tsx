import Image from "next/image";
import HomepageSectionDestinationsBox from "./HomepageSectionDestinationsBox";

const HomepageSectionDestinations = () => {
  return (
    <section className="homepage__destinations">
      <h3>Our Popular Destinations</h3>
      <div className="container">
        <div className="left__side">
          <Image
            src="/images/left-side-image.png"
            alt=""
            fill
            draggable={false}
          />
        </div>

        <div className="right__side">
          <div className="destinations__list">
            <HomepageSectionDestinationsBox
              description="20+ Spots 2D & 3N"
              profileImage="/images/profile-image-1.png"
              title="Thailand"
            />

            <HomepageSectionDestinationsBox
              description="25+ Spots 3D & 3N"
              profileImage="/images/profile-image-2.png"
              title="Indonesia"
            />

            <HomepageSectionDestinationsBox
              description="20+ Spots 3D & 2N"
              profileImage="/images/profile-image-3.png"
              title="New Zeland"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageSectionDestinations;
