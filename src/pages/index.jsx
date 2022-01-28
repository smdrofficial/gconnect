import React from "react";

// components
import Layout from "@components/Layout";

import HomeCarousel from "@components/HomeCarousel";

const Home = () => {
  return (
    <Layout>
      <div>
        <HomeCarousel />
      </div>
      <div className="container-section">
        <div className="main-text-content">
          <p>
            This website is for volunteers of Heartfulness who are working
            towards conducting programmes and sessions at Govt.&nbsp;
            organisations, Armed forces, Public Sector Units (PSU) etc.&nbsp; It
            aims to provide you with all the resources that you may require to
            initiate, conduct and manage Heartfulness programmes at your
            centre.&nbsp; The content on this website will be constantly
            evolving to provide better and improved material for the
            programmes.&nbsp; Given this, we encourage you to always use the
            latest version of resources from this website rather than maintain
            or share downloaded copies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
