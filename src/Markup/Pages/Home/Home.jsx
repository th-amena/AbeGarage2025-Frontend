import React from "react";
import TopBannerHome from "../../Components/Banner/TopBannerHome";
import About24 from "../../Components/About24/About24";
import ServicesSec from "../../Components/ServiceSec/ServicesSec";
import FeaturesSec from "../../Components/FeaturesSec/FeturesSec";
import WhyChooseUs from "../../Components/WhyChoosUs/WhyChooseUs";
import BottomBanner from "../../Components/Banner/BottomBanner";
import CtaSec from "../../Components/CtaSec/CtaSec";



const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Video Section */}
      <TopBannerHome />
      {/* About Us Section */}
      <About24 />
      {/* Services Section */}
      <ServicesSec />
      {/* Services Section */}
      <FeaturesSec />
      {/* Why Choose US Section */}
      <WhyChooseUs />
      {/* Video Section */}
      <BottomBanner />
      {/* CTA Section */}
      <CtaSec />
    </div>
  );
};

export default Home;
