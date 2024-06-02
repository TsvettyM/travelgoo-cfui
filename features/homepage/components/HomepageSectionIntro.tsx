import CommonButton from "@/features/common/components/CommonButton";
import Image from "next/image";

const HomepageSectionIntro = () => {
  return (
    <section className="homepage__section--intro">
      <Image src="/images/intro-bg.jpg" alt="" fill draggable={false} />

      <div className="intro__text">
        <h1>Your Imagination Is Your Only Limit</h1>
        <p>
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority
        </p>

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

export default HomepageSectionIntro;
