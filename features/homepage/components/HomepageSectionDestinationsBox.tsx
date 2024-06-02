import IconArrow from "@/features/icons/components/IconArrow";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  profileImage: string;
  title: string;
  description: string;
}

const HomepageSectionDestinationsBox = ({
  description,
  title,
  profileImage,
}: IProps) => {
  return (
    <Link href={"/"} className="destinations__box">
      <div className="profile-image">
        <Image src={profileImage} alt="" fill />
      </div>

      <h4>{title}</h4>
      <p>{description}</p>

      <IconArrow />
    </Link>
  );
};

export default HomepageSectionDestinationsBox;
