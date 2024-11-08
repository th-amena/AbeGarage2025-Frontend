import React from "react";
import TopBannerHome from "../../Components/Banner/TopBannerHome";
import About24 from "../../Components/About24/About24";
import ServicesSec from "../../Components/ServiceSec/ServicesSec";
import FeaturesSec from "../../Components/FeaturesSec/FeturesSec";
import WhyChooseUs from "../../Components/WhyChoosUs/WhyChooseUs";
import BottomBanner from "../../Components/Banner/BottomBanner";
import CtaSec from "../../Components/CtaSec/CtaSec";
import Layout from "../../Pages/Layout/Layout"



const Home = () => {
  return (
<<<<<<< HEAD
    <Layout>Home</Layout>

  )
}
=======
    <Layout>
    
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
    </Layout>
  );
};
>>>>>>> 3a8ac580eb0bc714734f8cc8bf0e830df03f0ebc

export default Home;
