import IconAirport from "@/features/icons/components/IconAirport";
import IconChoose from "@/features/icons/components/IconChoose";
import IconPayment from "@/features/icons/components/IconPayment";

interface IProps {
  title: string;
  description: string;
  icon: "choose" | "payment" | "airport";
}

const HomepageSectionTripBox = ({ description, title, icon }: IProps) => {
  const getIcon = () => {
    if (icon === "choose") {
      return <IconChoose />;
    }

    if (icon === "payment") {
      return <IconPayment />;
    }

    return <IconAirport />;
  };

  return (
    <div className="trip__box">
      {getIcon()}
      <div className="text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomepageSectionTripBox;
