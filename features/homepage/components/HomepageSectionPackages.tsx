import CommonButton from "@/features/common/components/CommonButton";
import HomepageSectionPackagesBox from "./HomepageSectionPackagesBox";
import { useState } from "react";

const HomepageSectionPackages = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  function handleSelection(selection: number) {
    setSelectedButton(selection);
  }

  return (
    <section className="homepage__packages">
      <h3>Best Packages For You</h3>

      <div className="container">
        <div className="button__list">
          <CommonButton
            fontSize="normal"
            style={selectedButton === 1 ? "green" : "gray"}
            title="Hot Deals"
            type="button"
            handleClick={() => handleSelection(1)}
          />

          <CommonButton
            fontSize="normal"
            style={selectedButton === 2 ? "green" : "gray"}
            title="Backpack"
            type="button"
            handleClick={() => handleSelection(2)}
          />

          <CommonButton
            fontSize="normal"
            style={selectedButton === 3 ? "green" : "gray"}
            title="South Asia"
            type="button"
            handleClick={() => handleSelection(3)}
          />

          <CommonButton
            fontSize="normal"
            style={selectedButton === 4 ? "green" : "gray"}
            title="Honeymoon"
            type="button"
            handleClick={() => handleSelection(4)}
          />

          <CommonButton
            fontSize="normal"
            style={selectedButton === 5 ? "green" : "gray"}
            title="Europe"
            type="button"
            handleClick={() => handleSelection(5)}
          />

          <CommonButton
            fontSize="normal"
            style={selectedButton === 6 ? "green" : "gray"}
            title="More"
            type="button"
            handleClick={() => handleSelection(6)}
          />
        </div>

        <div className="packages__list">
          <HomepageSectionPackagesBox
            image="/images/trip-image-1.png"
            days={3}
            price={500}
            description="Explore the Beauty of the island for 3 days and 2 nights with our travel agency"
            destinations="Indonesia"
          />

          <HomepageSectionPackagesBox
            image="/images/trip-image-2.png"
            days={3}
            price={800}
            description="Enjoy the Shrimes and blossoms here in this beautiful country"
            destinations="Japan"
          />

          <HomepageSectionPackagesBox
            image="/images/trip-image-3.png"
            days={3}
            price={600}
            description="Explore the majestic mountains and landscapes day and nights"
            destinations="Mountains"
          />
        </div>

        <CommonButton
          type="button"
          title="Discover more"
          style="green"
          fontSize="big"
        />
      </div>
    </section>
  );
};

export default HomepageSectionPackages;
