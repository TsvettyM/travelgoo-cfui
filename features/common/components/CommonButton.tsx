interface IProps {
  title: string;
  fontSize: "big" | "normal" | "small";
  style: "green" | "gray";
  type: "button" | "reset" | "submit";
  handleClick?: (arg?: any) => void;
}

const CommonButton = ({
  style,
  title,
  type,
  fontSize,
  handleClick,
}: IProps) => {
  return (
    <button
      type={type}
      className={`common__button is-${style} is-${fontSize}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CommonButton;
