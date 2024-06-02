import CommonButton from "@/features/common/components/CommonButton";
import IconCircle1 from "@/features/icons/components/IconCircle1";
import IconCircle2 from "@/features/icons/components/IconCircle2";
import IconEmail from "@/features/icons/components/IconEmail";
import IconEmailArrow from "@/features/icons/components/IconEmailArrow";
import IconPluses from "@/features/icons/components/IconPluses";

const HomepageSectionSubscribe = () => {
  return (
    <section className="homepage__subscribe">
      <div className="container">
        <h3>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h3>
        <IconEmailArrow />
        <IconCircle1 />
        <IconCircle2 />
        <IconPluses />
        <form>
          <div className="input__container">
            <IconEmail />
            <input type="text" placeholder="Your email" />
          </div>

          <CommonButton
            type="button"
            title="Subscribe"
            style="green"
            fontSize="normal"
          />
        </form>
      </div>
    </section>
  );
};

export default HomepageSectionSubscribe;
