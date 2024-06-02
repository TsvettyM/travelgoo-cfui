import IconBooking from "@/features/icons/components/IconBooking";
import IconTicket from "@/features/icons/components/IconTicket";
import IconTour from "@/features/icons/components/IconTour";

interface IProps {
  title: string;
  description: string;
  icon: "ticket" | "booking" | "tour";
}

const HomepageSectionServiceBox = ({ description, title, icon }: IProps) => {
  const getIcon = () => {
    if (icon === "ticket") {
      return <IconTicket />;
    }

    if (icon === "booking") {
      return <IconBooking />;
    }

    return <IconTour />;
  };

  return (
    <div className="services__box">
      {getIcon()}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default HomepageSectionServiceBox;
