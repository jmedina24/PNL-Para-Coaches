import React from 'react'
import Main from '../components/Main';
import WhyPNL from '../components/WhyPNL';
import PNLOrigins from '../components/PNLOrigins';
import WhyEnroll from '../components/WhyEnroll';
import WorkingTogether from '../components/WorkingTogether';
import PNLForCoaches from '../components/PNLForCoaches';
import Modules from '../components/Modules';
import WhatIncludes from '../components/WhatIncludes';
import Summary from '../components/Summary';
import Satisfaction from '../components/Satisfaction';

const Home = () => {
  return (
    <>
      <Main />
      <WhyPNL />
      <PNLOrigins />
      <WhyEnroll />
      <WorkingTogether />
      <PNLForCoaches />
      <Modules />
      <WhatIncludes />
      <Summary />
      <Satisfaction />
    </>
  )
}

export default Home