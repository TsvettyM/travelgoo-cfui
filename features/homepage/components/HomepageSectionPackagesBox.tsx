import IconDestination from "@/features/icons/components/IconDestination";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  description: string;
  price: number;
  days: number;
  destinations: string;
  image: string;
}

const HomepageSectionPackagesBox = ({
  days,
  description,
  destinations,
  price,
  image,
}: IProps) => {
  return (
    <div className="packages__box">
      <div className="image">
        <Image src={image} alt="" fill />
      </div>

      <div className="content">
        <div className="top">
          <p className="days">
            {days} Days, {days - 1} Nights
          </p>
          <p className="price">${price} / Person</p>
        </div>

        <p>{description}</p>

        <div className="bottom">
          <IconDestination />
          <p className="destinations">{destinations}</p>
          <Link href="/">Know more</Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageSectionPackagesBox;
