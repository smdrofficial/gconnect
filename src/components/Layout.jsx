import React from "react";

import PropTypes from "prop-types";

// components
import Head from 'next/head'

import Header from "@components/Header";

import Footer from "@components/Footer";

// config
import config from "@assets/config";

const Layout = ({ children, seoContent }) => {
  return (
    <div className="app-wrapper" tabIndex="-1">
      <Head>
        <title> {seoContent.title || config.title} </title>
        <meta
          name="description"
          content={seoContent.description || config.description}
        />
      </Head>

      <Header />

      <div className="main-wrapper">{children}</div>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoContent: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

Layout.defaultProps = {
  seoContent: {
    title: config.title,
    description: config.description,
  },
};

export default Layout;
