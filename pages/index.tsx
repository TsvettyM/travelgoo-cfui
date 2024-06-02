import HomepageFooter from "@/features/homepage/components/HomepageFooter";
import HomepageHeader from "@/features/homepage/components/HomepageHeader";
import HomepageSectionDestinations from "@/features/homepage/components/HomepageSectionDestinations";
import HomepageSectionGoal from "@/features/homepage/components/HomepageSectionGoal";
import HomepageSectionIntro from "@/features/homepage/components/HomepageSectionIntro";
import HomepageSectionPackages from "@/features/homepage/components/HomepageSectionPackages";
import HomepageSectionService from "@/features/homepage/components/HomepageSectionService";
import HomepageSectionSubscribe from "@/features/homepage/components/HomepageSectionSubscribe";
import HomepageSectionTrip from "@/features/homepage/components/HomepageSectionTrip";
import { NextPage } from "next";
import Head from "next/head";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Travel Goo</title>
      </Head>

      <main>
        <HomepageHeader />
        <HomepageSectionIntro />
        <HomepageSectionService />
        <HomepageSectionGoal />
        <HomepageSectionDestinations />
        <HomepageSectionPackages />
        <HomepageSectionTrip />
        <HomepageSectionSubscribe />
        <HomepageFooter />
      </main>
    </>
  );
};

export default Homepage;
