import IconButton from "@/features/icons/components/IconButton";
import IconLogo from "@/features/icons/components/IconLogo";
import IconStar from "@/features/icons/components/IconStar";
import IconUser from "@/features/icons/components/IconUser";
import Link from "next/link";

const HomepageHeader = () => {
  return (
    <header>
      <div className="container">
        <IconLogo />

        <nav>
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Packages</Link>
        </nav>

        <div className="header__buttons">
          <button type="button" className="button__star">
            <IconStar />
          </button>

          <button type="button" className="button__user">
            <IconUser />
          </button>

          <button type="button" className="button__menu">
            <IconButton />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
