import IconApple from "@/features/icons/components/IconApple";
import IconFacebook from "@/features/icons/components/IconFacebook";
import IconGoogle from "@/features/icons/components/IconGoogle";
import IconInstagram from "@/features/icons/components/IconInstagram";
import IconLogo from "@/features/icons/components/IconLogo";
import Link from "next/link";

const HomepageFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="left">
            <IconLogo />
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>

          <div className="links">
            <div className="links__company">
              <p>Company</p>
              <Link href="/">About</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Mobile</Link>
            </div>

            <div className="links__contact">
              <p>Contact</p>
              <Link href="/">Help/FAQ</Link>
              <Link href="/">Press</Link>
              <Link href="/">Affilates</Link>
            </div>

            <div className="links__more">
              <p>More</p>
              <Link href="/">Airlinefees</Link>
              <Link href="/">Airline</Link>
              <Link href="/">Low fare tips</Link>
            </div>
          </div>

          <div className="apps">
            <div className="social__apps">
              <Link href="/">
                <IconFacebook />
              </Link>
              <Link href="/">
                <IconInstagram />
              </Link>
            </div>

            <p>Discover our app</p>

            <div className="buttons">
              <Link className="google" href="/">
                <IconGoogle />
              </Link>
              <Link className="apple" href="/">
                <IconApple />
              </Link>
            </div>
          </div>
        </div>

        <div className="bottom">
          <p>All rights reserved@travelgoo.co</p>
        </div>
      </div>
    </footer>
  );
};

export default HomepageFooter;
