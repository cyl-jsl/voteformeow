import React from 'react';
import Banner from "../components/Banner";
import Advocate from "../components/Advocate";
import Latest from "../components/Latest";
import Policy from "../components/Policy";
import Donation from "../components/Donation";
import Banner2 from "../components/Banner2";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Advocate />
      <Latest />
      <Policy />
      <Donation />
      <Banner2 />
    </>
  );
};

export default Homepage;
