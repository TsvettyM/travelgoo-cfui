import IconExperience from "@/features/icons/components/IconExperience";
import IconHistory from "@/features/icons/components/IconHistory";
import IconTraveller from "@/features/icons/components/IconTraveller";
import IconVisited from "@/features/icons/components/IconVisited";

interface IProps {
  title: string;
  description: string;
  icon: "experience" | "traveller" | "visited" | "history";
}

const HomepageSectionGoalBox = ({ description, title, icon }: IProps) => {
  const getIcon = () => {
    if (icon === "experience") {
      return <IconExperience />;
    }
    if (icon === "traveller") {
      return <IconTraveller />;
    }
    if (icon === "visited") {
      return <IconVisited />;
    }
    return <IconHistory />;
  };

  return (
    <div className="goal__box">
      {getIcon()}
      <h3>{description}</h3>
      <p>{title}</p>
    </div>
  );
};

export default HomepageSectionGoalBox;
